# Online Class Platform

A modern, responsive web application for managing online classes, providing courses, and issuing certificates. Built with React and Vite, this platform offers a seamless learning and administrative experience.

## 🚀 Key Features

- **Course Management**: Explore various courses with detailed information.
- **Admin Dashboard**: Comprehensive tools for administrators to add courses, manage schedules, and online classes.
- **User Profiles**: Personalized profiles for students to track their progress and achievements.
- **Certificates**: Automated certificate generation for course completion.
- **Blog & News**: Stay updated with the latest educational articles and announcements.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: Vanilla CSS (Mobile-first approach)
- **Icons**: React Icons (Inferred from components)

## 📁 Project Structure

```text
src/
├── assets/          # Static assets like images and videos
├── components/      # Reusable UI components
├── pages/           # Page-level components (Home, Courses, Dashboard, etc.)
│   └── admin/       # Administrative specific pages
├── App.jsx          # Main application component & routes
├── main.jsx         # Application entry point
├── index.css        # Global styles and design system
└── ...
```

## 🚥 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd intern2ndpro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally previews the production build.

## 📱 Responsive Design

The platform uses a mobile-first design strategy. Media queries are defined in `src/index.css` to ensure visual excellence across:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1024px
- **Mobile**: Up to 768px


