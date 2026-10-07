LEARNSNAP WEBSITE
=================
1. Open index.html in any browser (double-click it). You need internet for the fonts.

2. PUT IT ONLINE (free): go to https://app.netlify.com/drop and drag this whole "learnsnap-website" folder onto the page. You get a public link.

3. THE STORE BUTTONS currently say "Coming soon". When your apps are published:
   - Open index.html in Notepad.
   - Find this line near the bottom:
         var STORE = { play: "", apple: "" };
   - Paste your store links between the quotes, save, and re-upload.
   The buttons then change from "Coming soon" to live download links.

Google Play needs a Google Play developer account. The App Store needs a Mac, Xcode and an Apple developer account.

OFFICIAL STORE BADGES: see badges/PUT-OFFICIAL-BADGES-HERE.txt. Until you add them, the site shows simple store buttons.

PRICING AND BILLING PAGES (design prototype, no real payments)
- pricing.html  : plans, monthly/yearly toggle, mock checkout, success screen, comparison table, FAQ
- billing.html  : subscription card, payment method, billing history, change plan, cancel, upgrade prompt
- All sample data (prices, dates, card, invoices, FAQ) is in assets/mock-data.js. Edit prices there.
- Nothing is charged or sent anywhere. To take real payments later, connect the "Subscribe" button to a payment provider.
- Keep the folder structure as it is (index.html, pricing.html, billing.html, assets/, badges/).
