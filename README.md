# CERL — Combustion Engineering Research Laboratory Website

A simple, static, no-build website for the Combustion Engineering Research
Laboratory (CERL), Department of Chemical Engineering, IIT Delhi. Built with
plain HTML and CSS — no frameworks, no npm, no backend required.

## 1. How to deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `cerl-lab-website`).
2. Upload **all** files and folders from this project, keeping the same
   folder structure:
   ```
   index.html
   research.html
   people.html
   publications.html
   facilities.html
   contact.html
   assets/css/style.css
   assets/js/main.js
   assets/img/people/
   assets/img/research/
   assets/img/facilities/
   README.md
   ```
3. In your repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`.
5. Set **Branch** to `main` (or `master`) and folder to `/ (root)`. Click **Save**.
6. Wait 1–2 minutes. GitHub will give you a live URL, typically:
   `https://<your-username>.github.io/<repository-name>/`

That's it — no build step, no installation required.

## 2. File overview

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `research.html` | Research themes page |
| `people.html` | Team / people page |
| `publications.html` | Publications list |
| `facilities.html` | Lab facilities/equipment |
| `contact.html` | Contact details and map |
| `assets/css/style.css` | All styling (single shared stylesheet) |
| `assets/js/main.js` | Small script for the mobile navigation menu |
| `assets/img/people/` | Put team member photos here |
| `assets/img/research/` | Put research images/schematics here |
| `assets/img/facilities/` | Put equipment photos here |

## 3. How to add a photo

1. Add your image file to the appropriate folder, e.g.
   `assets/img/people/abhijeet-raj.jpg`.
2. Open the relevant HTML file (e.g. `people.html`) in any text editor.
3. Find the placeholder block, for example:
   ```html
   <div class="photo-placeholder">
     Photograph placeholder...
   </div>
   ```
4. Replace it with an `<img>` tag:
   ```html
   <img class="photo-placeholder" src="assets/img/people/abhijeet-raj.jpg" alt="Prof. Abhijeet Raj">
   ```
   The same CSS class keeps the sizing consistent — the placeholder styling
   simply gets replaced by your actual photo.

## 4. How to add a new team member

Open `people.html` and find the section for the relevant group (PhD Scholars,
Master's Students, etc.). Copy one `<div class="person-card">...</div>` block,
paste it into the same `<div class="people-grid">`, and edit the name, role,
and note. For example:

```html
<div class="person-card">
  <div class="person-photo">Photo placeholder</div>
  <div class="person-body">
    <h4>New Student Name</h4>
    <div class="person-role">Master's Student</div>
    <p class="person-note"><em>Research interests: to be added.</em></p>
  </div>
</div>
```

## 5. How to add a publication

Open `publications.html` and copy a `<div class="pub-item">...</div>` block
under the correct year heading (or create a new
`<h2 class="pub-year-heading">2027</h2>` heading for a new year). Fill in the
title, authors, journal, and link.

## 6. How to add a research theme

Open `research.html` and copy one `<div class="card">...</div>` block inside
`<div class="grid grid-3">`. Update the title, description, and image.

## 7. How to add a facility/equipment entry

Open `facilities.html` and copy a `<div class="facility-item">...</div>`
block. Update the name, image, and description. **Only add equipment you
have confirmed the lab possesses.**

## 8. Notes

- All content marked as a "placeholder" is intentional — it was left blank
  because the specific information (biographies, research interests, emails,
  equipment, publications, etc.) was not provided when this site was built.
  Please replace these placeholders with verified, accurate content before
  wide circulation.
- The Google Scholar link for Prof. Abhijeet Raj is already wired in across
  the homepage, people page, publications page, and footer of every page.
- The site is fully responsive (works on mobile, tablet, and desktop) and
  requires no JavaScript framework — the only script (`main.js`) simply
  toggles the mobile navigation menu.
