# React Boilerplate Project Documentation

## 🎯 Project Overview

This is production-ready React TS boilerplate designed for scalability, performance, and maintainability. It serves as a foundation for building enterprise-level applications with a clean, feature-based architecture.

---

## 🏗️ Architecture Philosophy

### Feature-Based Structure
The project follows a **Feature-Based Architecture** pattern where:
- Each feature is self-contained with its own components, API calls, hooks, types, and pages
- Features are isolated modules that can be developed, tested, and maintained independently
- Shared code is centralized to avoid duplication

### Design Principles
1. **Separation of Concerns**: App-level configuration vs. feature-specific logic vs. shared utilities
2. **Type Safety**: Strict TypeScript throughout
3. **Scalability**: Easy to add new features without affecting existing ones
4. **Code Reusability**: Shared components and hooks available globally

---

## 📦 Technology Stack

### Core Technologies
- **React 19**: Latest React with modern features
- **TypeScript**: Full type safety across the application
- **Vite**: Lightning-fast build tool and dev server

### UI & Styling
- **Tailwind CSS v4**: Utility-first CSS framework

### State Management & Data Fetching
- **Zustand**: Global client-side state management
- **TanStack Query (React Query)**: Server state management and data fetching
- **@tanstack/react-query-devtools**: Development tools for debugging queries

### Routing & Navigation
- **React Router v7**: Modern routing solution with data loading capabilities

### Internationalization (i18n)
- **i18next**: Internationalization framework
- **react-i18next**: React bindings for i18next
- **Supported Languages**: English (en), Arabic (ar)
- **Features**: Language persistence via localStorage, RTL support

### HTTP & API
- **Axios**: Promise-based HTTP client

---

## 📂 Project Structure Deep Dive

```
excellence/
├── src/
│   ├── app/                    # 🔧 Global Application Configuration
│   │   ├── config/             # Environment, Axios, QueryClient setup
│   │   │   ├── axios.ts        # Axios instance with interceptors
│   │   │   ├── env.ts          # Environment variables
│   │   │   └── queryClient.ts  # React Query client configuration
│   │   ├── providers/          # Global context providers
│   │   │   ├── AppProviders.tsx    # Wraps all global providers
│   │   │   └── QueryProvider.tsx   # React Query provider
│   │   ├── routes/             # Route definitions
│   │   │   └── index.tsx       # Router configuration with React Router v7
│   │   └── store/              # Global Zustand stores
│   │       └── ui.store.ts     # UI state (e.g., sidebar, modals)
│   │
│   ├── features/               # 🎨 Feature Modules (Self-Contained)
│   │   └── dashboard/          # Example feature
│   │       ├── api/            # API calls specific to dashboard
│   │       ├── components/     # Dashboard-specific components
│   │       ├── hooks/          # Custom hooks for dashboard
│   │       ├── pages/          # Page components
│   │       │   └── DashboardPage.tsx
│   │       └── types/          # TypeScript interfaces for dashboard
│   │
│   ├── shared/                 # 🌐 Shared/Reusable Code
│   │   ├── components/         # Shared UI components
│   │   │   ├── fallback/       # Error boundaries, 404 pages
│   │   │   │   ├── ErrorPage.tsx
│   │   │   │   └── NotFoundPage.tsx
│   │   │   ├── global/         # Global components
│   │   │   │   └── LanguageSwitcher.tsx
│   │   │   └── layout/         # Layout components
│   │   │       └── Layout.tsx
│   │   ├── hooks/              # Shared custom hooks
│   │   ├── lib/                # Third-party library configurations
│   │   │   └── i18n.ts         # i18next configuration
│   │   ├── locales/            # Translation files
│   │   │   ├── en.json         # English translations
│   │   │   └── ar.json         # Arabic translations
│   │   ├── types/              # Shared TypeScript types/interfaces
│   │   └── utils/              # Shared utility functions
│   ├── assets/                 # 📁 Static Assets
│   ├── index.css               # Global CSS entry point
│   └── main.tsx                # Application entry point
│
├── public/                     # Static files served as-is
├── .env                        # Environment variables
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

---

## 🔄 Application Flow

### 1. Entry Point (`main.tsx`)
```
User visits app → main.tsx renders:
  ├── React.StrictMode (development checks)
  └── AppProviders (global providers)
       └── RouterProvider (React Router v7)
```

### 2. Providers Composition (`app/providers/AppProviders.tsx`)
```
AppProviders wraps:
  ├── QueryProvider (TanStack Query)
  └── i18n initialization (auto-imported from shared/lib/i18n.ts)
```

### 3. Routing (`app/routes/index.tsx`)
```
React Router v7 configuration:
├── Error boundary: ErrorPage
└── Routes:
    ├── "/" → Layout → DashboardPage
    └── "*" → Layout → NotFound
```

### 4. Layout Structure
All pages are wrapped in `Layout` component which typically includes:
- Header with LanguageSwitcher
- Sidebar navigation
- Main content area
- Footer

### 5. Data Fetching Pattern (for future API integration)
```
Component → Custom Hook (features/*/hooks/) → API Call (features/*/api/) → React Query → Axios → Backend
```

---

## 🎯 Key Features & Implementations

### Internationalization (i18n)
- **Setup**: `shared/lib/i18n.ts`
- **Translations**: `shared/locales/{en,ar}.json`
- **Language Switcher**: `shared/components/global/LanguageSwitcher.tsx`
- **Persistence**: Language preference saved in `localStorage`
- **RTL Support**: Automatic direction switching for Arabic

### State Management Strategy
1. **Local State**: `useState` for component-specific UI state
2. **Server State**: React Query for API data (caching, refetching)
3. **Global Client State**: Zustand for app-wide state (e.g., UI store)

### Axios Configuration
- **Base URL**: Configured via environment variables
- **Interceptors**: 
  - Response interceptor returns `response.data` directly
  - Error handling for failed requests
- **Instance**: `apiClient` exported from `app/config/axios.ts`

### React Query Setup
- **DevTools**: Enabled in development mode
- **Configuration**: Custom query client in `app/config/queryClient.ts`

---

## 📋 Development Guidelines

### Adding a New Feature
1. Create folder in `src/features/<feature-name>/`
2. Structure:
   ```
   features/<feature-name>/
   ├── api/              # API functions
   ├── components/       # Feature components
   ├── hooks/            # Custom hooks
   ├── pages/            # Page components
   └── types/            # TypeScript types
   ```
3. Add route in `app/routes/index.tsx`
4. Add translations in `shared/locales/{en,ar}.json`

### Creating Shared Components
- Place in `src/shared/components/`
- Use TypeScript interfaces
- Style with Tailwind CSS
- Make them feature-agnostic

### API Integration (Future)
1. Define API functions in `features/<feature>/api/`
2. Create custom hooks using React Query
3. Use the global `apiClient` from `app/config/axios.ts`

### Adding Translations
1. Add keys to both `en.json` and `ar.json`
2. Use `useTranslation` hook in components:
   ```tsx
   const { t } = useTranslation();
   return <h1>{t('key.path')}</h1>;
   ```

### Styling
- Use the Tailwind color variables listed on `index.css` file.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5173) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

---

## 🚀 Getting Started

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **Access app**: http://localhost:5173

---

## 🎨 UI

### Styling Approach
- **Primary**: Tailwind utility classes
- **Custom**: `index.css`

---

## 🔍 Important Configuration Files

### `vite.config.ts`
- React plugin
- Tailwind CSS plugin
- Path alias: `@` → `./src`

### `tsconfig.json`
- Strict mode enabled
- Path mappings for clean imports
- ES2020+ features

### `.env`
- Environment variables (e.g., `VITE_API_BASE_URL`)
- Access via `import.meta.env` in code

---

## 💡 Best Practices Reminder

1. **Always use TypeScript interfaces** for props and data structures
2. **Keep features isolated** - avoid cross-feature dependencies
3. **Use shared components** when logic is reusable across features
4. **Follow naming conventions**: PascalCase for components, camelCase for functions
5. **Leverage React Query** for all server data fetching
6. **Add translations** for all user-facing text
7. **Use Tailwind utilities** instead of custom CSS when possible
8. **Configure UntitledUI components** with react-aria-components for accessibility

---

## Comments and Documentation

- **Professional Only:** Write comments as if a Senior Engineer is leaving them for a Peer.
- **No Hand-Holding:** Do NOT write comments like *"Check if this path is correct"* or *"Remember to install this."* Assume the reader is competent.
- **Why > What:** Comment on *business logic* and *complexity*, not syntax.
  - *Bad:* `// Sets user to null`
  - *Good:* `// Resetting user state here prevents stale data on re-login.`
- Don't add too much comments. Just add comments when really needed to be noticed from other developers.

---

## Coding Style and Formatting

- **Indentation:** Use **2 spaces**. No tabs.
- **Semicolons:** Always use semicolons `;` at the end of statements.
- **Quotes:**
	- Use **Single Quotes** `'` for standard string literals in TS/JS.
	- Use **Double Quotes** `"` for JSX attributes and JSON.
	- Use **Backticks** `` ` `` for template literals/interpolation.
- **Trailing Commas:** Add trailing commas in objects, arrays, and function parameters (multiline) to minimize git diffs.
- **Exports:** Prefer **Named Exports** (`export const Button = ...`) over Default Exports (`export default Button`) to ensure consistent naming across imports.
- **Component Naming:** PascalCase (`UserProfile.tsx`).
- **Hook Naming:** camelCase, strictly prefixed with `use` (`useAuth.ts`).

---

## 🤖 Quick Reference for Gemini

When starting a new chat session, remember:
- This is a **feature-based architecture** - each feature is self-contained
- **Vite** is the bundler (fast dev server, HMR)
- All paths use the `@/` alias pointing to `src/`
- i18n is fully configured - always add translations for new features
- React Query handles all async data fetching
- Zustand manages global client state
