# Khushi Sharma – Portfolio

A responsive multi-page portfolio website for a BCA student and aspiring front-end developer. Built with plain HTML, CSS and JavaScript (no frameworks, no build step). It works on phones, tablets and laptops.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Skills | `skills.html` |
| Projects | `projects.html` |
| Education | `education.html` |
| Certificates | `certificates.html` |
| Contact | `contact.html` |

## Run it locally

Open `index.html` in any browser. No installation is needed.

## Put it online with GitHub Pages (free)

1. Create a new repository on GitHub, for example `portfolio`.
2. Upload all files and folders from this project (keep `css`, `js` and `images` folders as they are).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute your site is live at `https://YOUR-USERNAME.github.io/portfolio/`. Add this link to your resume and LinkedIn.

Tip: name the repository `YOUR-USERNAME.github.io` to get the shorter address `https://YOUR-USERNAME.github.io/`.

## Folder structure

```
├── index.html, about.html, skills.html, projects.html, education.html, certificates.html, contact.html
├── css/style.css      all styles (colours are CSS variables at the top)
├── js/main.js         mobile menu and scroll animations
├── images/            khushi.jpg (profile photo), background.jpg
├── favicon.svg
└── README.md
```

## Customising

- **Text:** edit the HTML files directly.
- **Colours:** change the variables in `:root` at the top of `css/style.css`.
- **Photo:** replace `images/khushi.jpg` (portrait, about 720 × 880 px works well).
- **Projects:** copy one `<article class="card">` block in `projects.html`. Add your GitHub or live-demo links when your repositories are ready.
