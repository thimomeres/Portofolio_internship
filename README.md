# Timo Baware Meres — Portfolio

Modern personal portfolio for an Informatics student and AI & Web Developer.

## Stack

- HTML5
- CSS3 (custom animations & glassmorphism)
- JavaScript (ES6+)
- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [Font Awesome 6](https://fontawesome.com/)

## Structure

```
Portofolio/
├── index.html      # Main page & all sections
├── css/
│   └── styles.css  # Animations, glass effects, cursor, loader
├── js/
│   ├── data.js     # Skills & projects data
│   └── main.js     # Interactions & dynamic rendering
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve with any static server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

## Customize

| What | Where |
|------|--------|
| CV / Resume | Replace `assets/CV.pdf` with your latest PDF |
| Profile photo | Replace `.profile-placeholder` content in `index.html` |
| Project images | Replace `.project-image` placeholders in rendered cards |
| Live Demo / GitHub links | Update `href="#"` in `js/main.js` `renderProjects()` |
| Twitter/X | Add URL to social link in `index.html` |
| Skills / Projects | Edit `js/data.js` |

## Sections

1. Hero — intro, CTAs, profile placeholder
2. About Me
3. Education
4. Technical Skills
5. Projects (5 cards)
6. Certifications
7. Contact
8. Social Media
9. Footer

## Features

- Dark modern aesthetic with glassmorphism & gradients
- Loading animation
- Custom cursor (desktop)
- Scroll reveal animations
- Animated navbar on scroll
- Responsive grid layouts (mobile, tablet, desktop)
- Hover effects on cards and buttons
