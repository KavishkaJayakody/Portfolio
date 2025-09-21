# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring an NVIDIA/SpaceDesk-inspired dark theme with smooth animations and interactive elements.

## Features

- 🎨 **Modern Design**: NVIDIA/SpaceDesk-inspired dark theme with green accent colors
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations**: Framer Motion animations for engaging user experience
- 🎯 **Interactive Elements**: Hover effects, scroll animations, and smooth transitions
- 📧 **Contact Form**: Functional contact form for easy communication
- 🚀 **GitHub Pages Ready**: Pre-configured for easy deployment

## Sections

- **Hero**: Eye-catching introduction with animated background
- **About**: Personal information and skills showcase
- **Projects**: Portfolio of work with interactive project cards
- **Experience**: Timeline of education and work experience
- **Contact**: Contact form and social media links

## Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **CSS3** - Custom styling with CSS variables
- **GitHub Pages** - Hosting platform

## Getting Started

### Prerequisites

- Node.js (v20.14.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kavishkaj/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Edit the `mockData` object in `src/App.jsx` to customize:

- Personal details (name, title, bio, contact info)
- Skills and proficiency levels
- Projects with descriptions and technologies
- Work experience and education
- Achievements and awards

### Styling

The website uses CSS custom properties for easy theming. Key variables are defined in `src/index.css`:

```css
:root {
  --nvidia-green: #76b900;
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
  /* ... more variables */
}
```

### Colors

- **Primary Green**: `#76b900` (NVIDIA green)
- **Background**: Dark theme with `#0a0a0a` primary
- **Text**: White and gray variations
- **Accents**: Blue, purple, and orange gradients

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Update the `homepage` field in `package.json` with your repository URL
3. Update the `base` field in `vite.config.js` to match your repository name
4. Run the deployment command:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

### Other Hosting Platforms

The built files in the `dist` directory can be deployed to any static hosting service:

- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## Project Structure

```
portfolio-website/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Component-specific styles
│   ├── index.css        # Global styles and theme
│   ├── main.jsx         # Application entry point
│   └── assets/
│       └── react.svg
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Name**: Kavishka Jayasuriya
- **Email**: kavishka.j@email.com
- **GitHub**: [@kavishka](https://github.com/kavishka)
- **LinkedIn**: [Kavishka Jayasuriya](https://linkedin.com/in/kavishka)

---

Made with ❤️ by Kavishka Jayasuriya