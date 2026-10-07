/* LearnSnap subscription prototype (front end only).
   No payment, backend or account logic. Everything reads from window.LS_MOCK (mock-data.js).
   Components: PricingSection, PricingCard, BillingToggle, CheckoutModal, PaymentForm, PaymentSuccess,
   SubscriptionCard, PaymentMethodCard, BillingHistory, ChangePlanModal, CancelSubscriptionModal,
   UpgradeModal, ComparisonTable, BillingFAQ. */
(function () {
  "use strict";
  var M = window.LS_MOCK;
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- helpers ---------- */
  var ICONS = {
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>'
  };
  function icon(n) {
    return '<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + "</svg>";
  }
  function money(c) {
    var d = c / 100;
    return "$" + (c % 100 === 0 ? d.toFixed(c === 0 ? 0 : 2) : d.toFixed(2));
  }
  function fmtDate(iso) {
    return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", { timeZone: "UTC", year: "numeric", month: "long", day: "numeric" });
  }
  function addPeriod(iso, interval) {
    var p = iso.split("-").map(Number), d = new Date(Date.UTC(p[0], p[1] - 1, p[2]));
    if (interval === "yearly") d.setUTCFullYear(d.getUTCFullYear() + 1); else d.setUTCMonth(d.getUTCMonth() + 1);
    return d.toISOString().slice(0, 10);
  }
  function priceOf(plan, interval) { return interval === "yearly" ? plan.yearly : plan.monthly; }
  function savingsCents(plan) { return plan.monthly * 12 - plan.yearly; }
  function savingsPct(plan) { return plan.monthly ? Math.round((1 - plan.yearly / (plan.monthly * 12)) * 100) : 0; }
  var MAX_SAVE = Math.max.apply(null, Object.keys(M.plans).map(function (k) { return savingsPct(M.plans[k]); }));
  function reduced() { return matchMedia("(prefers-reduced-motion: reduce)").matches; }
  function store(key, val) { try { if (val === undefined) return JSON.parse(sessionStorage.getItem(key)); sessionStorage.setItem(key, JSON.stringify(val)); } catch (e) { return null; } }

  var toastEl, toastT;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; void toastEl.offsetWidth; toastEl.classList.add("on");
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove("on"); }, 3200);
  }

  /* ---------- modal helper ---------- */
  var FOCUSABLE = 'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';
  function openModal(html, opts) {
    opts = opts || {};
    var prev = document.activeElement;
    var overlay = document.createElement("div"); overlay.className = "overlay";
    var modal = document.createElement("div");
    modal.className = "modal" + (opts.wide ? " wide" : "") + (opts.glow ? " glow" : "");
    modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true"); modal.setAttribute("aria-label", opts.label || "Dialog"); modal.tabIndex = -1;
    modal.innerHTML = '<button class="x" type="button" aria-label="Close">' + icon("x") + '</button><div class="mbody"></div>';
    overlay.appendChild(modal); document.body.appendChild(overlay);
    var body = $(".mbody", modal);
    var scrollBefore = document.body.style.overflow; document.body.style.overflow = "hidden";
    var api = {
      el: body, modal: modal,
      set: function (h) { body.innerHTML = h; modal.scrollTop = 0; },
      close: function () {
        document.removeEventListener("keydown", onKey, true);
        overlay.classList.add("closing");
        setTimeout(function () { overlay.remove(); }, reduced() ? 0 : 200);
        document.body.style.overflow = scrollBefore;
        if (prev && prev.focus) prev.focus();
      }
    };
    function onKey(e) {
      if (e.key === "Escape") { e.preventDefault(); api.close(); return; }
      if (e.key !== "Tab") return;
      var f = $$(FOCUSABLE, modal).filter(function (n) { return n.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKey, true);
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) api.close(); });
    $(".x", modal).addEventListener("click", api.close);
    api.set(html);
    setTimeout(function () { modal.focus(); }, 30);
    return api;
  }

  /* ---------- BillingToggle ---------- */
  function BillingToggle(value, small) {
    return '<div class="seg' + (small ? " sm" : "") + '" role="radiogroup" aria-label="Billing period" data-v="' + value + '"><span class="thumb"></span>' +
      '<button type="button" role="radio" data-v="monthly" aria-checked="' + (value === "monthly") + '">Monthly</button>' +
      '<button type="button" role="radio" data-v="yearly" aria-checked="' + (value === "yearly") + '">Yearly</button></div>';
  }
  function bindToggle(el, onChange) {
    function set(v) {
      el.dataset.v = v;
      $$("button", el).forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.v === v)); });
      onChange(v);
    }
    $$("button", el).forEach(function (b) { b.addEventListener("click", function () { set(b.dataset.v); }); });
    el.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); var v = el.dataset.v === "monthly" ? "yearly" : "monthly"; set(v); $('button[data-v="' + v + '"]', el).focus(); }
    });
  }

  /* ---------- PricingCard ---------- */
  function priceParts(plan, interval) {
    if (!plan.monthly) return { amt: "$0", per: "/ month", note: "No card needed", save: "" };
    if (interval === "yearly") return { amt: money(plan.yearly), per: "/ year", note: "That's " + money(Math.round(plan.yearly / 12)) + " a month", save: "Save " + money(savingsCents(plan)) };
    return { amt: money(plan.monthly), per: "/ month", note: "Billed monthly", save: "" };
  }
  function PricingCard(plan, interval) {
    var p = priceParts(plan, interval), pro = plan.id === "pro";
    return '<article class="plan rv' + (pro ? " pro" : "") + '" data-plan="' + plan.id + '" aria-labelledby="pn-' + plan.id + '">' +
      (plan.badge ? '<span class="badge">' + plan.badge + "</span>" : "") +
      '<div><h2 id="pn-' + plan.id + '">' + plan.name + '</h2><p class="blurb">' + plan.blurb + "</p></div>" +
      '<div><div class="amt"><span class="n">' + p.amt + '</span><span class="per">' + p.per + '</span></div>' +
      '<p class="price-note"><span class="nt">' + p.note + '</span><span class="card-save" data-on="' + (!!p.save) + '">' + (p.save || "&nbsp;") + "</span></p></div>" +
      '<ul class="feats">' + plan.features.map(function (f) { return "<li>" + icon("check") + "<span>" + f + "</span></li>"; }).join("") + "</ul>" +
      (plan.id === "free"
        ? '<a class="btn outline block" href="index.html#download">' + plan.cta + "</a>"
        : '<button type="button" class="btn ' + (pro ? "light" : "dark") + ' block" data-checkout="' + plan.id + '">' + plan.cta + "</button>") +
      "</article>";
  }

  /* ---------- PricingSection ---------- */
  function PricingSection() {
    var tRoot = $("#toggle-root"), pRoot = $("#plans-root");
    if (!pRoot) return;
    var state = { interval: "monthly" };
    tRoot.innerHTML = BillingToggle(state.interval) + '<span class="save" id="savePill" data-on="false">' + icon("spark") + " Save up to " + MAX_SAVE + "%</span>";
    pRoot.innerHTML = Object.keys(M.plans).map(function (k) { return PricingCard(M.plans[k], state.interval); }).join("");
    var pill = $("#savePill");

    bindToggle($(".seg", tRoot), function (v) {
      state.interval = v;
      pill.dataset.on = String(v === "yearly");
      $$(".plan", pRoot).forEach(function (card) {
        var plan = M.plans[card.dataset.plan], p = priceParts(plan, v);
        var amt = $(".amt", card), n = $(".n", card), per = $(".per", card);
        function apply() { n.textContent = p.amt; per.textContent = p.per; $(".nt", card).textContent = p.note; var s = $(".card-save", card); s.dataset.on = String(!!p.save); s.innerHTML = p.save || "&nbsp;"; }
        if (reduced()) { apply(); return; }
        amt.classList.add("out");
        setTimeout(function () { apply(); amt.classList.remove("out"); }, 150);
      });
    });

    function select(id) { $$(".plan", pRoot).forEach(function (c) { c.classList.toggle("selected", c.dataset.plan === id); }); }
    pRoot.addEventListener("click", function (e) {
      var card = e.target.closest(".plan"); if (!card) return;
      select(card.dataset.plan);
      var b = e.target.closest("[data-checkout]");
      if (b) CheckoutModal(b.dataset.checkout, state.interval);
    });
  }

  /* ---------- PaymentForm ---------- */
  var COUNTRIES = ["United States", "United Kingdom", "Canada", "Nigeria", "Ghana", "Kenya", "South Africa", "India", "Australia", "Germany", "France", "Other"];
  function field(id, name, label, ph, extra) {
    return '<div class="fld" data-f="' + name + '"><label for="' + id + "-" + name + '">' + label + '</label><input id="' + id + "-" + name + '" name="' + name + '" placeholder="' + ph + '" ' + (extra || "") + '><div class="em" aria-live="polite"></div></div>';
  }
  function PaymentForm(id, submitHtml) {
    return '<form class="form" id="' + id + '" novalidate>' +
      field(id, "number", "Card number", "1234 1234 1234 1234", 'inputmode="numeric" autocomplete="off" maxlength="23"') +
      '<div class="row2">' + field(id, "exp", "Expiry date", "MM/YY", 'inputmode="numeric" autocomplete="off" maxlength="5"') + field(id, "cvc", "CVC", "123", 'inputmode="numeric" autocomplete="off" maxlength="4"') + "</div>" +
      field(id, "name", "Name on card", "Full name", 'autocomplete="off"') +
      '<div class="fld" data-f="country"><label for="' + id + '-country">Country</label><select id="' + id + '-country" name="country"><option value="">Select country</option>' +
      COUNTRIES.map(function (c) { return "<option>" + c + "</option>"; }).join("") + '</select><div class="em" aria-live="polite"></div></div>' +
      field(id, "email", "Billing email", "you@example.com", 'type="email" autocomplete="off"') +
      '<button type="button" class="testfill">Fill with test details</button>' + submitHtml + "</form>";
  }
  function bindPaymentForm(form, onValid) {
    var f = function (n) { return form.elements[n]; };
    f("number").addEventListener("input", function () { var d = this.value.replace(/\D/g, "").slice(0, 19); this.value = d.replace(/(.{4})/g, "$1 ").trim(); });
    f("exp").addEventListener("input", function () { var d = this.value.replace(/\D/g, "").slice(0, 4); this.value = d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d; });
    f("cvc").addEventListener("input", function () { this.value = this.value.replace(/\D/g, "").slice(0, 4); });
    $(".testfill", form).addEventListener("click", function () {
      f("number").value = "4242 4242 4242 4242"; f("exp").value = "12/28"; f("cvc").value = "123"; f("name").value = "Alex Student"; f("country").value = "United States"; f("email").value = "alex@example.com";
      $$(".fld", form).forEach(function (x) { x.classList.remove("err"); $(".em", x).textContent = ""; });
    });
    function validate() {
      var errs = {}, digits = f("number").value.replace(/\D/g, "");
      if (digits.length < 13) errs.number = "Enter the full card number.";
      var m = /^(\d{2})\/(\d{2})$/.exec(f("exp").value), t = M.today.split("-");
      if (!m || +m[1] < 1 || +m[1] > 12) errs.exp = "Use the format MM/YY.";
      else if (+m[2] < +t[0].slice(2) || (+m[2] === +t[0].slice(2) && +m[1] < +t[1])) errs.exp = "This card has expired.";
      if (!/^\d{3,4}$/.test(f("cvc").value)) errs.cvc = "Enter 3 or 4 digits.";
      if (f("name").value.trim().length < 2) errs.name = "Enter the name on the card.";
      if (!f("country").value) errs.country = "Choose a country.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f("email").value)) errs.email = "Enter a valid email address.";
      $$(".fld", form).forEach(function (x) { var k = x.dataset.f; x.classList.toggle("err", !!errs[k]); $(".em", x).textContent = errs[k] || ""; });
      var first = Object.keys(errs)[0]; if (first) f(first).focus();
      return !first;
    }
    form.addEventListener("submit", function (e) { e.preventDefault(); if (validate()) onValid(form); });
  }

  /* ---------- CheckoutModal ---------- */
  function CheckoutModal(planId, interval) {
    var plan = M.plans[planId], st = { interval: interval || "monthly" };
    var m = openModal('<div class="co"><div class="co-l" id="co-l"></div><div class="co-r" id="co-r"></div></div>', { wide: true, label: "Checkout" });
    function left() {
      var p = priceOf(plan, st.interval);
      $("#co-l", m.el).innerHTML =
        "<h2>Complete your upgrade</h2>" +
        '<div><p class="lbl">Selected plan</p><p class="co-plan">LearnSnap ' + plan.name + "</p></div>" +
        BillingToggle(st.interval, true) +
        '<div class="co-price">' + money(p) + " <small>/ " + (st.interval === "yearly" ? "year" : "month") + "</small></div>" +
        (st.interval === "yearly" ? '<span class="co-save">You save ' + money(savingsCents(plan)) + " a year (" + savingsPct(plan) + "%)</span>" : '<p class="lbl">Switch to yearly to save up to ' + MAX_SAVE + "%.</p>") +
        '<ul class="feats">' + plan.features.map(function (f) { return "<li>" + icon("check") + "<span>" + f + "</span></li>"; }).join("") + "</ul>";
      bindToggle($(".seg", m.el), function (v) { st.interval = v; setTimeout(left, 380); });
    }
    left();
    $("#co-r", m.el).innerHTML =
      "<h3>Payment</h3>" +
      '<div class="notice">' + icon("info") + "<span>This is a design prototype. No payment is taken and nothing you type is sent anywhere. Please don't enter real card details.</span></div>" +
      PaymentForm("pay", '<button class="btn primary block" type="submit" id="paySubmit">Subscribe to ' + plan.name + "</button>" +
        '<p class="secure">' + icon("lock") + 'Secure checkout</p><p class="reassure">Cancel anytime from Subscription &amp; Billing. You see the full price before you confirm.</p>');
    var form = $("#pay", m.el);
    bindPaymentForm(form, function () {
      var b = $("#paySubmit", m.el); b.disabled = true; b.innerHTML = '<span class="spin"></span> Processing';
      setTimeout(function () { PaymentSuccess(m, plan, st.interval); }, reduced() ? 0 : 1200);
    });
    setTimeout(function () { var n = $("#pay-number", m.el); if (n && innerWidth > 640) n.focus(); }, 60);
  }

  /* ---------- PaymentSuccess ---------- */
  function PaymentSuccess(m, plan, interval) {
    var p = priceOf(plan, interval), next = addPeriod(M.today, interval);
    store("ls_billing", { fresh: true, plan: plan.id, interval: interval });
    var title = plan.id === "pro" ? "You're officially Pro. &#127881;" : "Your family is officially on LearnSnap. &#127881;";
    m.set('<div class="ok"><div class="ring">' + icon("check") + "</div><h2>" + title + '</h2><p class="sub">Welcome to unlimited learning with LearnSnap.</p>' +
      '<dl class="recap"><div><dt>Plan</dt><dd>LearnSnap ' + plan.name + "</dd></div><div><dt>Price</dt><dd>" + money(p) + " / " + (interval === "yearly" ? "year" : "month") + "</dd></div><div><dt>Next billing date</dt><dd>" + fmtDate(next) + "</dd></div></dl>" +
      '<div class="m-actions"><a class="btn primary" href="index.html#download">Start Learning</a><a class="btn outline" href="billing.html">View Subscription</a></div></div>');
    if (!reduced()) {
      var ok = $(".ok", m.el), colors = ["#5b4bff", "#8b5cf6", "#ffe45c", "#3fd69c", "#ff7a8e"];
      for (var i = 0; i < 38; i++) {
        var c = document.createElement("span"); c.className = "conf";
        c.style.left = Math.round(Math.random() * 100) + "%"; c.style.background = colors[i % colors.length];
        c.style.setProperty("--d", (Math.random() * 0.5).toFixed(2) + "s"); c.style.setProperty("--x", Math.round(Math.random() * 120 - 60) + "px");
        ok.appendChild(c);
      }
    }
    var a = $(".m-actions .btn", m.el); if (a) a.focus();
  }

  /* ---------- Billing page ---------- */
  var B = null; // billing page state
  function currentSub() {
    var s = store("ls_billing");
    if (s && s.fresh && M.plans[s.plan]) {
      var plan = M.plans[s.plan];
      return {
        sub: { planId: s.plan, interval: s.interval, status: "active", nextBilling: addPeriod(M.today, s.interval) },
        history: [{ id: "INV-NEW", date: M.today, description: "LearnSnap " + plan.name, amount: priceOf(plan, s.interval), status: "Paid" }]
      };
    }
    return { sub: M.subscription, history: M.history };
  }

  function SubscriptionCard() {
    var root_ = $("#sub-root"), sub = B.sub, plan = M.plans[sub.planId], cancel = B.cancel;
    root_.innerHTML =
      '<div class="top"><span class="name">LearnSnap ' + plan.name + '</span><span class="status' + (cancel ? " cancel" : "") + '"><i class="dot"></i>' + (cancel ? "CANCELS SOON" : "ACTIVE") + "</span></div>" +
      '<div class="price">' + money(priceOf(plan, sub.interval)) + "<small>/" + (sub.interval === "yearly" ? "year" : "month") + "</small></div>" +
      '<dl class="facts"><div><dt>' + (cancel ? "Access until" : "Next billing date") + "</dt><dd>" + fmtDate(sub.nextBilling) + "</dd></div><div><dt>Billing</dt><dd>" + (sub.interval === "yearly" ? "Yearly" : "Monthly") + "</dd></div></dl>" +
      (cancel ? '<div class="cancel-note"><span>Your plan is scheduled to cancel. You keep every feature until ' + fmtDate(sub.nextBilling) + '.</span><button type="button" id="resume">Keep ' + plan.name + "</button></div>" : "") +
      '<div class="actions"><button type="button" class="btn outline" id="chg">Change Plan</button>' + (cancel ? "" : '<button type="button" class="btn danger" id="cnl">Cancel Subscription</button>') + "</div>";
    $("#chg").addEventListener("click", function () { ChangePlanModal(); });
    var c = $("#cnl"); if (c) c.addEventListener("click", function () { CancelSubscriptionModal(); });
    var r = $("#resume"); if (r) r.addEventListener("click", function () { B.cancel = false; SubscriptionCard(); toast("Your plan will keep renewing (prototype)."); });
  }

  function PaymentMethodCard() {
    var pm = B.pm;
    $("#pm-root").innerHTML =
      "<h2>Payment Method</h2>" +
      '<div class="cardviz"><span class="chipv"></span><b>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; ' + pm.last4 + "</b></div>" +
      '<div class="meta"><span>' + pm.brand + " &bull;&bull;&bull;&bull; " + pm.last4 + "</span><span class=\"muted\">Expires " + pm.expires + "</span></div>" +
      '<button type="button" class="btn outline block" id="updpm">Update Payment Method</button>';
    $("#updpm").addEventListener("click", function () {
      var m = openModal('<div class="m-pad"><h2>Update payment method</h2><p class="sub">Prototype only. Nothing is saved or sent.</p>' +
        PaymentForm("upd", '<div class="m-actions"><button type="button" class="btn ghost" data-close>Cancel</button><button class="btn primary" type="submit">Save card</button></div>') + "</div>", { label: "Update payment method" });
      $("[data-close]", m.el).addEventListener("click", m.close);
      bindPaymentForm($("#upd", m.el), function (form) {
        B.pm = { brand: B.pm.brand, last4: form.elements.number.value.replace(/\D/g, "").slice(-4), expires: form.elements.exp.value };
        m.close(); PaymentMethodCard(); toast("Payment method updated (prototype).");
      });
    });
  }

  function BillingHistory() {
    var plan = M.plans[B.sub.planId];
    $("#hist-root").innerHTML =
      "<h2>Billing History</h2>" +
      '<table class="ht"><thead><tr><th>Date</th><th>Description</th><th>Amount</th><th>Status</th><th><span class="sr">Invoice</span></th></tr></thead><tbody>' +
      B.history.map(function (h, i) {
        return '<tr><td data-l="Date">' + fmtDate(h.date) + '</td><td data-l="Description">' + h.description + '</td><td data-l="Amount" class="amount">' + money(h.amount) + '</td><td data-l="Status"><span class="chip good">' + h.status + '</span></td><td class="act"><button type="button" class="btn outline sm" data-inv="' + i + '">View invoice</button></td></tr>';
      }).join("") + "</tbody></table>";
    $$("[data-inv]").forEach(function (b) {
      b.addEventListener("click", function () {
        var h = B.history[+b.dataset.inv], m = openModal(
          '<div class="m-pad"><h2>Invoice ' + h.id + '</h2><p class="sub">Prototype invoice. This is not a real document.</p>' +
          '<dl class="recap" style="max-width:none"><div><dt>Date</dt><dd>' + fmtDate(h.date) + "</dd></div><div><dt>Description</dt><dd>" + h.description + "</dd></div><div><dt>Payment method</dt><dd>" + B.pm.brand + " &bull;&bull;&bull;&bull; " + B.pm.last4 + "</dd></div><div><dt>Amount</dt><dd>" + money(h.amount) + "</dd></div><div><dt>Status</dt><dd>" + h.status + "</dd></div></dl>" +
          '<div class="m-actions"><button type="button" class="btn primary" data-close>Close</button></div></div>', { label: "Invoice" });
        $("[data-close]", m.el).addEventListener("click", m.close);
      });
    });
    void plan;
  }

  /* ---------- ChangePlanModal ---------- */
  function ChangePlanModal() {
    var cur = B.sub.planId, iv = B.sub.interval, sel = cur, REC = cur === "pro" ? "family" : "pro";
    var m = openModal('<div class="m-pad" id="cp"></div>', { label: "Change plan" });
    function render() {
      var curP = priceOf(M.plans[cur], iv), selP = priceOf(M.plans[sel], iv), d = selP - curP, per = iv === "yearly" ? "year" : "month";
      $("#cp", m.el).innerHTML =
        "<h2>Change plan</h2><p class=\"sub\">Pick the plan that fits. Nothing changes in this prototype.</p>" +
        '<div class="opts" role="radiogroup" aria-label="Plans">' + ["free", "pro", "family"].map(function (id) {
          var p = M.plans[id], pr = priceOf(p, iv), diff = pr - curP;
          return '<button type="button" class="opt-plan" role="radio" aria-checked="' + (id === sel) + '" data-id="' + id + '"><span class="radio"></span><span class="nm">' + p.name +
            (id === cur ? '<span class="chip">Current plan</span>' : "") + (id === REC && id !== cur ? '<span class="chip yellow">Recommended</span>' : "") + '</span><span class="pr">' + money(pr) + "<small class=\"muted\" style=\"font:500 14px var(--text)\">/" + per + "</small></span>" +
            '<span class="df">' + (id === cur ? "Your current plan" : (diff > 0 ? "+" : "&minus;") + money(Math.abs(diff)) + " per " + per + " compared with now") + "</span></button>";
        }).join("") + "</div>" +
        '<div class="diff"><strong>' + (sel === cur ? "This is your current plan" : "Price difference: " + (d > 0 ? "+" : "&minus;") + money(Math.abs(d)) + " per " + per) + "</strong>" +
        '<span class="muted">' + M.plans[sel].blurb + '</span><div class="mini-feats">' + M.plans[sel].features.slice(0, 5).map(function (f) { return '<span class="chip">' + f + "</span>"; }).join("") + "</div></div>" +
        '<div class="m-actions"><button type="button" class="btn ghost" data-close>Cancel</button><button type="button" class="btn primary" id="cfm"' + (sel === cur ? " disabled" : "") + ">Confirm Change</button></div>";
      $$(".opt-plan", m.el).forEach(function (b) { b.addEventListener("click", function () { sel = b.dataset.id; render(); var n = $('.opt-plan[data-id="' + sel + '"]', m.el); if (n) n.focus(); }); });
      $("[data-close]", m.el).addEventListener("click", m.close);
      $("#cfm", m.el).addEventListener("click", function () {
        m.set('<div class="ok"><div class="ring">' + icon("check") + "</div><h2>Plan change scheduled</h2><p class=\"sub\">If this were live, you would move to LearnSnap " + M.plans[sel].name + " on " + fmtDate(B.sub.nextBilling) + ". Nothing was changed.</p>" +
          '<div class="m-actions"><button type="button" class="btn primary" data-close>Done</button></div></div>');
        $("[data-close]", m.el).addEventListener("click", m.close); $("[data-close]", m.el).focus();
      });
    }
    render();
  }

  /* ---------- CancelSubscriptionModal ---------- */
  function CancelSubscriptionModal() {
    var m = openModal(
      '<div class="m-pad"><h2>Leaving LearnSnap?</h2><p class="sub">Your Pro experience won\'t be the same without you.</p>' +
      '<ul class="lose" aria-label="What you would lose">' + ["Unlimited AI tutor", "Unlimited scans", "Advanced analytics", "Personalized practice"].map(function (t) { return "<li>" + icon("x") + "<span>" + t + "</span></li>"; }).join("") + "</ul>" +
      '<div class="m-actions"><button type="button" class="btn primary" id="keep">Keep Pro</button><button type="button" class="btn danger" id="goon">Continue Cancellation</button></div></div>', { label: "Cancel subscription" });
    $("#keep", m.el).addEventListener("click", m.close);
    $("#goon", m.el).addEventListener("click", function () {
      B.cancel = true; SubscriptionCard();
      m.set('<div class="ok"><div class="ring">' + icon("check") + "</div><h2>Cancellation scheduled</h2><p class=\"sub\">Your subscription has been scheduled for cancellation. You keep your Pro features until " + fmtDate(B.sub.nextBilling) + ".</p>" +
        '<div class="m-actions"><button type="button" class="btn primary" data-close>Done</button></div></div>');
      $("[data-close]", m.el).addEventListener("click", m.close); $("[data-close]", m.el).focus();
    });
  }

  /* ---------- UpgradeModal (reusable, call LearnSnapBilling.openUpgrade()) ---------- */
  function UpgradeModal() {
    var m = openModal(
      '<div class="up"><div class="lock">' + icon("lock") + "</div><h2>You've reached your Free limit.</h2><p class=\"sub\">Unlock unlimited learning with LearnSnap Pro.</p>" +
      '<ul class="feats">' + ["Unlimited AI tutor questions", "Unlimited assignment scans", "Personalized practice", "Advanced mastery tracking"].map(function (t) { return "<li>" + icon("check") + "<span>" + t + "</span></li>"; }).join("") + "</ul>" +
      '<div class="m-actions"><button type="button" class="btn light" id="upgo">Upgrade to Pro</button><button type="button" class="btn ghost" id="later" style="color:var(--pro-muted)">Maybe Later</button></div></div>', { glow: true, label: "Upgrade to Pro" });
    $("#later", m.el).addEventListener("click", m.close);
    $("#upgo", m.el).addEventListener("click", function () { m.close(); setTimeout(function () { CheckoutModal("pro", "monthly"); }, 260); });
  }

  /* ---------- ComparisonTable ---------- */
  function ComparisonTable() {
    var r = $("#cmp-root"); if (!r) return;
    function cell(v) { return v === true ? '<span class="yes">' + icon("check") + '<span class="sr">Included</span></span>' : v === false ? '<span class="no" aria-label="Not included">&ndash;</span>' : '<span class="val">' + v + "</span>"; }
    r.innerHTML = '<div class="cmp-scroll rv" tabindex="0" role="region" aria-label="Plan comparison"><table class="cmp"><thead><tr><th scope="col"><span class="sr">Feature</span></th><th scope="col">Free</th><th scope="col" class="pro-col">Pro</th><th scope="col">Family</th></tr></thead><tbody>' +
      M.comparison.map(function (row) { return '<tr><th scope="row">' + row[0] + "</th><td>" + cell(row[1]) + '</td><td class="pro-col">' + cell(row[2]) + "</td><td>" + cell(row[3]) + "</td></tr>"; }).join("") + "</tbody></table></div>";
  }

  /* ---------- BillingFAQ ---------- */
  function BillingFAQ() {
    var r = $("#faq-root"); if (!r) return;
    r.innerHTML = '<div class="faq rv">' + M.faq.map(function (q, i) {
      return '<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false" aria-controls="fa' + i + '" id="fq' + i + '">' + q[0] + '<span class="pm" aria-hidden="true"></span></button><div class="faq-a" id="fa' + i + '" role="region" aria-labelledby="fq' + i + '"><div><p>' + q[1] + "</p></div></div></div>";
    }).join("") + "</div>";
    $$(".faq-q", r).forEach(function (b) {
      b.addEventListener("click", function () {
        var open = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", String(!open)); $("#" + b.getAttribute("aria-controls")).classList.toggle("open", !open);
      });
    });
  }

  /* ---------- page boot ---------- */
  function boot() {
    var tb = $("#themeBtn");
    if (tb) tb.addEventListener("click", function () {
      var dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
    });
    PricingSection(); ComparisonTable(); BillingFAQ();
    if ($("#sub-root")) {
      var cs = currentSub();
      B = { sub: cs.sub, history: cs.history, pm: { brand: M.paymentMethod.brand, last4: M.paymentMethod.last4, expires: M.paymentMethod.expires }, cancel: false };
      SubscriptionCard(); PaymentMethodCard(); BillingHistory();
    }
    $$('[data-action="upgrade-preview"]').forEach(function (b) { b.addEventListener("click", UpgradeModal); });

    if (root.classList.contains("anim")) {
      $$(".sec > .wrap > h2, .b-head, .panel.sub-card, .pm-card, .hist, .protobox").forEach(function (n) { n.classList.add("rv"); });
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
      $$(".rv").forEach(function (n, i) { if (n.classList.contains("plan")) n.style.setProperty("--d", ($$(".plan").indexOf(n) * 0.1) + "s"); io.observe(n); });
      setTimeout(function () { $$(".rv:not(.in)").forEach(function (n) { if (n.getBoundingClientRect().top < innerHeight) n.classList.add("in"); }); }, 2500);
    }
    var h = $(".site-h"); addEventListener("scroll", function () { h.style.boxShadow = scrollY > 8 ? "0 10px 30px -22px rgba(21,19,58,.5)" : "none"; }, { passive: true });
  }

  window.LearnSnapBilling = { openUpgrade: UpgradeModal, openCheckout: CheckoutModal };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
