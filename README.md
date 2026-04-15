
# 🚀 Mohamad Doli - Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.23.24-0055FF?style=for-the-badge&logo=framer" alt="Framer Motion" />
</div>

<div align="center">
  <h3>✨ Crafting Premium Digital Experiences ✨</h3>
  <p>A modern, responsive portfolio website showcasing frontend development skills with smooth animations and professional design.</p>
</div>

---

## 🌟 **Live Demo**

<div align="center">
  <a href="https://mohamad-doli-portfolio.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/moh4558/portfolio" target="_blank">
    <img src="https://img.shields.io/badge/GitHub_Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
  </a>
</div>

---

## 📋 **Table of Contents**

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [🔧 Development](#-development)
- [📦 Build & Deployment](#-build--deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

---

## ✨ **Features**

### 🎯 **Core Features**
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - GPU-accelerated animations using Framer Motion
- **Dark Theme** - Modern dark theme with gold accent colors
- **Performance Optimized** - Fast loading with optimized assets
- **SEO Friendly** - Proper meta tags and semantic HTML

### 🎨 **UI Components**
- **Hero Section** - Full-screen hero with parallax effects and wave overlay
- **Projects Showcase** - Interactive project cards with hover effects
- **Skills Section** - Animated marquee with technical skills
- **Contact Form** - Professional contact information display
- **Audio Controls** - Background music player with volume control

### 🚀 **Technical Features**
- **TypeScript** - Type-safe development
- **Component Architecture** - Modular, reusable components
- **Modern Build Tools** - Vite for fast development and building
- **CSS Framework** - Tailwind CSS with custom design system
- **Animation Library** - Framer Motion for smooth interactions

---

## 🛠️ **Tech Stack**

### **Frontend Framework**
- ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=flat&logo=typescript&logoColor=white)

### **Build & Development**
- ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-9.15.0-4B32C3?style=flat&logo=eslint&logoColor=white)

### **Styling & Animation**
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-0055FF?style=flat&logo=framer&logoColor=white)
- ![PostCSS](https://img.shields.io/badge/PostCSS-DD3735?style=flat&logo=postcss&logoColor=white)

### **UI Components**
- ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcn/ui&logoColor=white)
- ![Lucide React](https://img.shields.io/badge/Lucide-000000?style=flat&logo=lucide&logoColor=white)

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/moh4558/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5174
   ```

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

---

## 📁 **Project Structure**

```
portfolio/
├── public/                    # Static assets
│   ├── background-music.mp3   # Background music file
│   └── ...
├── src/
│   ├── app/
│   │   ├── components/        # React components
│   │   │   ├── ui/           # Reusable UI components (shadcn/ui)
│   │   │   ├── AudioControl.tsx
│   │   │   ├── ContactItem.tsx
│   │   │   ├── DynamicBackground.tsx
│   │   │   ├── MarqueeRow.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ...
│   │   └── App.tsx           # Main application component
│   ├── styles/               # Global styles and themes
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   ├── 38.jpg               # Hero background image
│   └── main.tsx             # Application entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
└── README.md               # Project documentation
```

---

## 🎨 **Design System**

### **Color Palette**
- **Primary**: `#d4af37` (Gold)
- **Background**: `#0d1525` (Dark Navy)
- **Text**: `#eaecf0` (Light Gray)
- **Accent**: `#7a8294` (Medium Gray)

### **Typography**
- **Primary Font**: 'Sora' (Headings)
- **Secondary Font**: 'Inter' (Body text)
- **Monospace**: System default

### **Animation Principles**
- **Easing**: Custom cubic-bezier curves
- **Duration**: 0.6s - 1.0s for major transitions
- **GPU Acceleration**: Transform and opacity properties
- **Staggered Animations**: Sequential element reveals

---

## 🔧 **Development**

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### **Code Quality**
- **ESLint** - Code linting and formatting
- **TypeScript** - Type checking
- **Prettier** - Code formatting (via ESLint)

### **Performance**
- **Vite** - Fast development and optimized builds
- **Code Splitting** - Automatic chunk splitting
- **Asset Optimization** - Image and font optimization
- **Lazy Loading** - Component and route lazy loading

---

## 📦 **Build & Deployment**

### **Deploy to Vercel**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### **Deploy to Netlify**
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### **Deploy to GitHub Pages**
1. Enable GitHub Pages in repository settings
2. Set source to `GitHub Actions`
3. Use the provided workflow or create custom deployment

---

## 🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use semantic commit messages
- Test on multiple devices and browsers
- Maintain consistent code style
- Update documentation as needed

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 **Contact**

**Mohamad Doli**

- **Email**: geez.car.1234@gmail.com
- **GitHub**: [@moh4558](https://github.com/moh4558)
- **Instagram**: [@MOHAMAD.DOLE](https://instagram.com/MOHAMAD.DOLE)
- **Phone**: +963 992 253 825

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ by Mohamad Doli</p>
</div>
  