# AI Tools Explorer Pro

<div align="center">
<img width="1200" height="475" alt="AI Tools Explorer Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<p align="center">
  <strong>Discover the most powerful AI productivity tools. Curated, tested, and trusted by professionals worldwide.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

---

## 🚀 Features

### ✨ Core Functionality

- **Comprehensive AI Tools Directory** - Explore 1000+ curated AI tools across multiple categories
- **Real-time Search** - Find tools instantly with our powerful search functionality
- **Category Filtering** - Filter tools by categories like Language Models, Image Generation, ML Frameworks, etc.
- **Responsive Design** - Fully mobile-first responsive design that works perfectly on all devices
- **Dark/Light Theme** - Toggle between dark and light themes for comfortable viewing
- **Tool Details Modal** - Click on any tool card to view detailed information

### 🎨 User Experience

- **Modern UI/UX** - Built with Tailwind CSS and Radix UI components for a polished experience
- **Smooth Animations** - Subtle animations and transitions for enhanced interactivity
- **Mobile-First Design** - Optimized for mobile devices with touch-friendly interfaces
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized** - Fast loading with Vite build system and optimized assets

### 🛠️ Technical Features

- **TypeScript** - Full type safety with TypeScript
- **Component Architecture** - Modular, reusable React components
- **State Management** - Efficient state management with React hooks
- **SEO Friendly** - Server-side rendering ready with Next.js compatibility
- **PWA Ready** - Progressive Web App capabilities for offline usage

---

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 6.2.0** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful icon library
- **Tailwind Animate** - CSS animation utilities

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Key Dependencies

- **@google/genai** - Google Gemini AI integration
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Next Themes** - Theme management
- **Sonner** - Toast notifications

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sisovin/ai-tools-explorer.git
cd ai-tools-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add your API keys:

```env
# Google Gemini API Key (required for AI features)
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Other environment variables
NODE_ENV=development
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
ai-tools-explorer/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   └── ...
├── src/
│   ├── components/        # Reusable React components
│   │   ├── ui/           # Radix UI components
│   │   ├── ToolCard.tsx  # Tool card component
│   │   └── ...
│   ├── constants.ts       # Application constants and data
│   ├── types.ts          # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── ...
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # Project documentation
```

### Key Files Explained

- **`App.tsx`** - Main application component with header, search, filters, and tool grid
- **`constants.ts`** - Contains the TOOLS array and CATEGORIES for the application
- **`types.ts`** - TypeScript interfaces and types
- **`components/ToolCard.tsx`** - Individual tool card component
- **`components/ToolDetailModal.tsx`** - Modal for displaying tool details

---

## 🎯 Usage

### Searching for Tools

1. Use the search bar at the top to search for tools by name
2. Results update in real-time as you type

### Filtering by Category

1. Click on category chips below the search bar
2. Select "All" to show all tools or choose a specific category
3. Multiple category selection is not supported (single selection only)

### Viewing Tool Details

1. Click on any tool card to open the detail modal
2. View comprehensive information about the tool
3. Close the modal by clicking outside or the close button

### Theme Switching

1. Click the theme toggle button in the header
2. Switch between light and dark modes
3. Your preference is maintained during the session

### Mobile Navigation

1. On mobile devices, use the hamburger menu (☰) in the header
2. Access navigation links and authentication options
3. The menu slides in from the right with smooth animations

---

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

### Code Style

This project follows modern React and TypeScript conventions:

- Use functional components with hooks
- Prefer TypeScript interfaces over types
- Follow the single responsibility principle
- Use meaningful component and variable names
- Keep components small and focused

### Component Guidelines

- All components are written in TypeScript
- Use Tailwind CSS for styling
- Follow mobile-first responsive design principles
- Implement proper accessibility attributes
- Use React hooks for state management

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** and ensure they follow our coding standards
4. **Test your changes** thoroughly
5. **Commit your changes**: `git commit -m 'Add some feature'`
6. **Push to the branch**: `git push origin feature/your-feature-name`
7. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, concise commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google AI** - For providing the Gemini API and AI tools data
- **Vercel** - For hosting and deployment platform
- **Tailwind CSS** - For the amazing utility-first CSS framework
- **Radix UI** - For accessible, unstyled UI components
- **Lucide** - For beautiful, consistent icons

---

## 📞 Support

If you have any questions or need help:

- **Issues**: [GitHub Issues](https://github.com/sisovin/ai-tools-explorer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/sisovin/ai-tools-explorer/discussions)
- **Email**: [Sisovin Chieng](sisovin@outlook.com)

---

<div align="center">
  <p><strong>Built with ❤️ for the AI community</strong></p>
  <p>
    <a href="#ai-tools-explorer-pro">Back to top</a>
  </p>
</div>
