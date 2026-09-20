Abdullah AlMsan Portfolio
========================

Overview
--------
A bilingual (Arabic RTL / English LTR) static portfolio built with plain HTML, CSS, and JavaScript. It presents projects, learning resources, experience, education, certificates, recommendation letters, and contact information. There is no backend.

Main structure
--------------
- index.html        Main portfolio page and modal containers.
- app.js            Bilingual content data, rendering, interactions, viewers, and downloads.
- styles.css        Site styling and responsive layouts.
- enhancements.js   Viewer polish, close controls, scroll indicators, and supporting UI behavior.
- assets/           Local images, icons, certificates, project media, and documents.
- resources/        Bilingual guides, viewers, recommendation-letter pages, downloadable archives, and PenGuide virtual-lab reference pages.

Run locally
-----------
From the portfolio folder, run:

  python -m http.server 8000

Then open:

  http://localhost:8000/

Using a local HTTP server is preferred over opening index.html directly with file:// because iframe viewers and downloads behave more consistently over HTTP.

GitHub Pages
------------
1. Create or use a GitHub repository.
2. Upload the contents of this folder so index.html is at the published root.
3. In the repository, open Settings > Pages.
4. Select the branch/folder that contains index.html and save.
5. After deployment, test both Arabic and English views and the downloadable local files.

Notes
-----
- The site is fully static and has no server-side application or database.
- Brand/tool icons used by the portfolio are stored locally under assets/brands/ so the interface does not depend on live icon hotlinks.
- External URLs in the site are references or user-invoked contact/source links; the site should not need external image requests during normal browsing.
