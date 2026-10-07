LEARNSNAP WEBSITE
=================
1. Open index.html in any browser to see the site (double-click it).

2. PUT THE SITE ONLINE (free, no coding):
   - Go to https://app.netlify.com/drop  (or https://pages.cloudflare.com, or GitHub Pages)
   - Drag this whole "learnsnap-website" folder onto the page.
   - You get a public web address you can share.

3. ADD YOUR STORE LINKS when the apps are published:
   - Open index.html in Notepad (right-click > Open with > Notepad).
   - Near the bottom, find this line:
         var STORE = { play: "", apple: "" };
   - Paste your links between the quotes, for example:
         var STORE = { play: "https://play.google.com/store/apps/details?id=com.learnsnap.app", apple: "https://apps.apple.com/app/your-app-id" };
   - Save. The buttons will now open the stores. While a link is empty, the button says "coming soon".

4. Google Play needs a Google Play developer account. The App Store needs a Mac, Xcode and an Apple developer account.
