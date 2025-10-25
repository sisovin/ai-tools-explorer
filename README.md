# AI Tools Explorer Workspace

🧠 **AI Tools Explorer** - A comprehensive suite of AI productivity tools across multiple platforms.

This monorepo contains three interconnected projects that provide AI tool discovery and exploration capabilities:

## 📁 Projects Overview

### 🤖 aitools-app

**Location:** `aitools-app/`  
**Platform:** React Native (Expo)  
**Description:** A mobile application for exploring AI tools with form-based interactions. Built with React Native Paper for Material Design components and Zod for form validation.

**Key Features:**

- Cross-platform mobile app (iOS/Android)
- Form handling with React Hook Form
- Material Design UI components
- Expo development environment

### 📱 aitools-explorer

**Location:** `aitools-explorer/`  
**Platform:** React Native (Expo) + Web (Vite)  
**Description:** The flagship mobile application featuring AI tool discovery, categorization, and Gemini AI integration for detailed tool information.

**Key Features:**

- Comprehensive AI tools database
- Category-based tool organization
- Gemini AI-powered tool details and recommendations
- Cross-platform mobile deployment
- Web preview capabilities
- Modern React Native with TypeScript

### 🌐 web

**Location:** `web/`  
**Platform:** Next.js (React)  
**Description:** A responsive web application showcasing AI productivity tools with advanced UI components and comprehensive documentation.

**Key Features:**

- Server-side rendered React application
- Responsive design for all devices
- Advanced UI component library (Radix UI)
- Blog and documentation system
- Authentication and user management
- Error handling and monitoring
- SEO optimized

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Expo CLI** for React Native development
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **Git** for version control

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sisovin/ai-tools-explorer.git
   cd ai-tools-explorer
   ```

2. **Install dependencies for all projects:**

   **For aitools-app:**

   ```bash
   cd aitools-app
   npm install
   cd ..
   ```

   **For aitools-explorer:**

   ```bash
   cd aitools-explorer
   npm install
   cd ..
   ```

   **For web:**

   ```bash
   cd web
   npm install
   cd ..
   ```

### Development

#### Running the Mobile Apps

**aitools-app:**

```bash
cd aitools-app
npm start
# or
npm run android  # for Android
npm run ios      # for iOS
```

**aitools-explorer:**

```bash
cd aitools-explorer
npm start
# or
npm run android  # for Android
npm run ios      # for iOS
npm run web      # for web preview
```

#### Running the Web Application

```bash
cd web
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the web application.

### Building for Production

#### Mobile Apps (EAS Build)

```bash
cd aitools-explorer  # or aitools-app
npx eas build --platform android
npx eas build --platform ios
```

#### Web Application

```bash
cd web
npm run build
npm start
```

## 🏗️ Architecture

This workspace follows a monorepo structure with:

- **Shared Components:** Common UI components and utilities
- **Cross-Platform Code:** Business logic shared between mobile and web
- **Platform-Specific Features:** Native capabilities for mobile apps
- **AI Integration:** Gemini AI for enhanced tool recommendations

## 🛠️ Tech Stack

### Mobile Apps (React Native)

- **Framework:** Expo SDK 54
- **Language:** TypeScript
- **UI Libraries:** React Native Paper, Radix UI
- **State Management:** React hooks
- **Forms:** React Hook Form + Zod validation
- **AI:** Google Generative AI (Gemini)

### Web Application (Next.js)

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI primitives
- **Deployment:** Vercel-ready

### Development Tools

- **Build:** EAS Build (Expo)
- **Linting:** ESLint
- **Version Control:** Git
- **Package Management:** npm

## 📱 Features

### Core Functionality

- **AI Tools Database:** Curated collection of productivity tools
- **Category Organization:** Tools grouped by function and use case
- **Search & Filter:** Find tools by name, category, or features
- **Tool Details:** Comprehensive information with AI-powered insights
- **Responsive Design:** Optimized for mobile, tablet, and desktop

### Advanced Features

- **Cross-Platform Sync:** Consistent experience across devices
- **Offline Support:** Core functionality works without internet
- **Performance Optimized:** Fast loading and smooth interactions
- **Accessibility:** WCAG compliant design and navigation

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test across all platforms
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Guidelines

- **Code Style:** Follow TypeScript and ESLint rules
- **Testing:** Test on both iOS and Android for mobile apps
- **Documentation:** Update READMEs for any new features
- **Commits:** Use conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Repository:** [GitHub](https://github.com/sisovin/ai-tools-explorer)
- **Issues:** [Report bugs or request features](https://github.com/sisovin/ai-tools-explorer/issues)

## 🙏 Acknowledgments

- Google Generative AI for AI-powered features
- Expo team for the amazing React Native development experience
- Open source community for the incredible tools and libraries

---

**Made with ❤️ for AI enthusiasts and productivity seekers worldwide.**
