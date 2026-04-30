# ALTERNATE-REALITY-G: GARETH.AI Portfolio Website

A cyberpunk-themed personal portfolio website for alternate-universe GARETH — a futuristic AI engineer and space explorer specializing in deep learning, data science, and neural networks for cosmic phenomena analysis.

---

## 🌌 Overview

This is a **static, vanilla HTML/CSS/JavaScript** portfolio showcasing futuristic AI research projects in space exploration. The site features a **cyberpunk aesthetic** with neon glows, dark space backgrounds, and futuristic typography. Designed for deployment on **GitHub Pages** with zero build tools or dependencies.

**Key Features:**
- ✨ Cyberpunk neon aesthetic (cyan, magenta, electric blue)
- 🚀 6 featured space-themed AI/ML projects with detailed case studies
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Pure HTML/CSS/JavaScript (no frameworks, no npm)
- 🎯 Smooth animations, glitch effects, hover interactions
- 🌐 Easy GitHub Pages deployment
- ♿ Semantic HTML for accessibility

---

## 📂 Project Structure

```
ALTERNATE-REALITY-G/
├── index.html                    # Hero page & landing
├── about.html                    # Biography, expertise, timeline
├── projects.html                 # Project showcase grid
├── contact.html                  # Contact form & social links
├── styles/
│   └── main.css                  # Cyberpunk design system (1100+ lines)
├── scripts/
│   └── main.js                   # Interactivity & animations
├── projects/                     # Individual project detail pages
│   ├── exoplanet-discovery.html
│   ├── solar-flare-prediction.html
│   ├── radiation-anomaly.html
│   ├── autonomous-nav.html
│   ├── spectral-synthesis.html
│   └── comm-protocol.html
├── README.md                     # This file
└── .gitignore                    # Git ignore rules
```

---

## 🎨 Design System

### Color Palette
- **Primary (Neon Green):** `#00ff88` — Main accent, text glows
- **Secondary (Magenta):** `#ff006e` — Links, hover states
- **Accent (Electric Blue):** `#0080ff` — Secondary highlights
- **Background (Deep Space):** `#0a0e27` — Primary background
- **Secondary BG (Dark Blue):** `#16213e` — Cards, panels

### Typography
- **Headings:** Orbitron (futuristic, geometric)
- **Body/Code:** Space Mono (monospace, technical)

### Effects
- Text glows with `text-shadow`
- Neon border glows
- Smooth animations & transitions
- Glitch effect on hover for titles
- Grid background pattern (subtle)

---

## 📄 Pages & Content

### 1. **index.html** — Hero Landing Page
- Eye-catching hero section with glitch effect
- Futuristic tagline: "Neural pathways across the cosmos"
- Quick stats: missions, data analyzed, accuracy metrics
- Call-to-action buttons to projects and contact

### 2. **about.html** — Biography & Expertise
- Alt-universe GARETH background story
- 4 expertise areas with detailed descriptions
- Technical arsenal (languages, frameworks, specializations)
- Timeline of major achievements (2082–2089)

### 3. **projects.html** — Project Showcase
- Grid of 6 featured space-themed AI/ML projects:
  1. **Exoplanet Discovery Network** — CNN/unsupervised clustering for exoplanet classification (99.8% accuracy)
  2. **Solar Flare Prediction System** — Transformers for 72-hour solar event forecasting (91% recall)
  3. **Cosmic Radiation Anomaly Detector** — VAE for detecting novel radiation phenomena
  4. **Autonomous Navigation AI** — Reinforcement learning for asteroid field navigation (99.5% success)
  5. **Stellar Spectral Synthesis Model** — GANs for synthetic stellar data generation
  6. **Neural Communication Protocol Optimizer** — Graph Neural Networks for inter-planetary communication (60% efficiency gain)

- Each project links to detailed case study page
- Tech stack tags, years, and brief descriptions

### 4. **contact.html** — Contact & Social
- Email contact form
- Social links: GitHub, LinkedIn, Twitter, Email
- Placeholder URLs (customize with real links)
- Message transmission form with validation

### 5. **projects/*.html** — Detailed Case Studies
- In-depth project documentation (exoplanet-discovery.html as example)
- Technical architecture diagrams (text descriptions)
- Key results and metrics
- Scientific impact discussion
- Challenges & solutions
- Future directions
- Publication references

---

## 🚀 Getting Started

### Option 1: View Locally (Recommended for Testing)

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/YourUsername/ALTERNATE-REALITY-G.git
   cd ALTERNATE-REALITY-G
   ```

2. **Open in browser** — Simply open `index.html` in your browser:
   - **Windows:** Double-click `index.html`
   - **Mac/Linux:** `open index.html` or right-click → Open with Browser
   - Or open in VS Code and use Live Server extension

3. **Navigate** — Use navigation menu to explore all pages

### Option 2: Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial GARETH.AI portfolio commit"
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository settings
   - Scroll to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Click "Save"

3. **View live site**
   - Site will be available at: `https://YourUsername.github.io/ALTERNATE-REALITY-G/`
   - Wait 1-2 minutes for deployment to complete

---

## 🛠 Customization

### Update Personal Information

**Email & Contact Links** — Edit `contact.html`:
```html
<a href="mailto:YOUR_EMAIL@example.com" class="contact-link">YOUR_EMAIL@example.com</a>
<a href="https://github.com/YOUR_USERNAME" target="_blank" class="contact-link">github.com/your-username</a>
```

**Social Links** — Edit all social links in `contact.html`:
```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">LinkedIn</a>
```

### Modify Project Details

**Update projects on `projects.html`:**
- Change project titles, descriptions, years, tech tags
- Link to your actual project repositories or live demos

**Edit project detail pages** (`projects/*.html`):
- Expand case study sections with real project information
- Update technical architecture sections
- Add your own results and metrics
- Replace placeholder publication references

### Customize Colors & Fonts

**Edit `styles/main.css`** — Modify CSS variables at the top:
```css
:root {
    --primary-color: #00ff88;      /* Change neon green */
    --secondary-color: #ff006e;    /* Change magenta */
    --accent-color: #0080ff;       /* Change electric blue */
    --bg-primary: #0a0e27;         /* Change background */
}
```

### Change Fonts

**Edit Google Fonts import** in HTML head or change in CSS:
```css
--font-primary: 'Orbitron', sans-serif;        /* Change heading font */
--font-secondary: 'Space Mono', monospace;     /* Change body font */
```

---

## 🎯 Features & Interactions

### Mobile-Responsive
- Hamburger menu for mobile navigation
- Flexible grid layouts for all screen sizes
- Touch-friendly buttons and links
- Responsive typography (clamp font sizes)

### Animations & Effects
- **Glitch effect** on hero title on hover
- **Scroll animations** — Cards fade in as you scroll
- **Hover effects** — Project cards lift and glow
- **Smooth scrolling** — Anchor links animate smoothly
- **Active navigation links** — Underline animates for current page

### Accessibility
- Semantic HTML structure
- Alt text on images (when added)
- Color contrast meets WCAG standards
- Keyboard navigation support
- Screen reader friendly

---

## 🔧 Development Tips

### Testing Locally
- Open DevTools (F12 or Cmd+Option+I)
- Test responsiveness with device emulation (Ctrl+Shift+M)
- Check Network tab for performance
- Monitor Console for JavaScript errors

### Performance
- **File sizes:** All CSS/JS combined < 100KB
- **No external dependencies:** Pure vanilla code
- **Lazy loading:** Not needed (small file size)
- **Caching:** GitHub Pages automatically caches static files

### Browser Compatibility
- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ⚠️ IE 11 (not supported — uses CSS Grid, modern CSS)

---

## 📝 Content

### Alternate-Reality Persona: GARETH.AI (2089)

**Background:**
- Lead AI researcher at Jupiter Station Complex
- Specializes in deep learning, data science, space exploration
- Founded Neural Collective Lab in 2082
- 42 successful deep-space missions
- Analyzed 1.2M+ cosmic data points
- Model accuracy: 99.8%

**Expertise Areas:**
1. Deep Learning & Neural Networks
2. Data Science & Analytics
3. AI Systems Architecture
4. Space Technology Integration

**Technical Skills:**
- Python, TensorFlow, PyTorch, JAX, Scikit-learn, SQL, C++, Rust
- Apache Spark, Kubernetes, Distributed Computing
- LLMs, Computer Vision, Time Series Forecasting, Anomaly Detection, Optimization

---

## 🌍 Deployment Checklist

- [ ] Customize contact information (email, GitHub, LinkedIn)
- [ ] Update project descriptions with real projects
- [ ] Add actual images/screenshots (optional)
- [ ] Test all links work correctly
- [ ] Test on mobile device
- [ ] Test cross-browser (Chrome, Firefox, Safari)
- [ ] Push to GitHub
- [ ] Enable GitHub Pages
- [ ] Verify site is live
- [ ] Share link!

---

## 📊 File Statistics

| File | Lines | Purpose |
|------|-------|---------|
| `styles/main.css` | ~1100 | Complete cyberpunk design system |
| `scripts/main.js` | ~350 | Interactivity, animations, form handling |
| `index.html` | ~60 | Hero landing page |
| `about.html` | ~110 | Biography and expertise |
| `projects.html` | ~120 | Project showcase grid |
| `contact.html` | ~110 | Contact form and social links |
| `projects/*.html` | ~150 each | Detailed project case studies |

**Total:** ~1900+ lines of code | < 5MB total size

---

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/) — HTML/CSS/JavaScript reference
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [GitHub Pages Docs](https://pages.github.com/) — Deployment guide
- [Cyberpunk Design](https://en.wikipedia.org/wiki/Cyberpunk) — Design inspiration

---

## 📄 License

This project is open source and available for personal use. Feel free to fork, modify, and deploy your own version!

---

## 🤝 Contributing

Found a bug or have suggestions? Feel free to:
1. Open an issue
2. Submit a pull request
3. Share feedback

---

## 🚀 Future Enhancements

- [ ] Add real project images/screenshots
- [ ] Implement dark/light theme toggle
- [ ] Add retro terminal ASCII art effects
- [ ] Create blog section for AI/space insights
- [ ] Add downloadable resume PDF
- [ ] Integrate actual contact form backend (Formspree, Netlify Forms)
- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Create animated 3D space background (Three.js)
- [ ] Add project filtering by technology
- [ ] Implement search functionality

---

## 📞 Contact

For questions about this portfolio template or deployment:
- 📧 Email: contact@gareth.ai
- 🐙 GitHub: github.com/gareth-ai-explorer
- 🔗 LinkedIn: linkedin.com/in/gareth-ai

---

**✨ Welcome to the future. GARETH.AI is online. ✨**

*"Neural pathways across the cosmos" — 2089*