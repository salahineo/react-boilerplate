# React Boilerplate

A modern, production-ready React boilerplate built with Vite, TypeScript, and Tailwind CSS. Designed for scalability and performance.

## 🚀 Tech Stack

-   **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
-   **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
-   **Routing**: [React Router v7](https://reactrouter.com/)
-   **Internationalization**: [i18next](https://www.i18next.com/)
-   **HTTP Client**: [Axios](https://axios-http.com/)
-   **Mocking**: [JSON Server](https://github.com/typicode/json-server)

## 🛠️ Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

## 📦 Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ft-react-boilerplate
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Mock Server (for API simulation):**
    ```bash
    npm run server
    ```
    *Runs on port 8080*

4.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    *Runs on port 5173*

## 📂 Project Structure

The project follows a **Feature-Based Architecture**:

```
src/
├── app/                 # Global app configuration
│   ├── config/          # Env, Axios, QueryClient setup
│   ├── providers/       # Global providers (Query, Router, etc.)
│   └── routes/          # Route definitions
├── features/            # Feature-specific modules
│   └── users/           # Example feature: Users
│       ├── api/         # API calls
│       ├── components/  # Feature-specific components
│       ├── hooks/       # Custom hooks (e.g., useUsers)
│       ├── pages/       # Page components
│       └── types/       # TypeScript interfaces
├── shared/              # Reusable shared code
│   ├── components/      # Shared UI components
│   ├── hooks/           # Shared hooks
│   ├── lib/             # Libraries (i18n, utils)
│   └── locales/         # Translation files (en, ar)
└── main.tsx             # Entry point
```

## ✨ Key Features

-   **Internationalization (i18n)**: Built-in support for multiple languages (English & Arabic).
-   **Mock API**: Integrated `json-server` for rapid prototyping.
-   **Type Safety**: Strict TypeScript configuration.
-   **Modern Styling**: Utility-first CSS with Tailwind.

## 📏 Extension Rules

1.  **New Features**: Create a new folder in `src/features/` (e.g., `src/features/products`).
2.  **Shared Components**: Place generic UI components in `src/shared/components`.
3.  **API Calls**: Define API functions in `features/<feature>/api/`.
4.  **State**: Use local state for UI, React Query for server state, and Zustand for global client state.
5.  **Translations**: Add new keys to `src/shared/locales/` and use the `useTranslation` hook.

## 📝 Scripts

-   `npm run dev`: Start dev server
-   `npm run build`: Build for production
-   `npm run preview`: Preview production build
-   `npm run server`: Start mock API server
-   `npm run lint`: Run ESLint
