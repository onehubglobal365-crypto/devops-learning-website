# 📘 OHG 365 - Exhaustive Technical Documentation & Project Report

## 1. Overall Project Architecture
*   **Project Type**: **Next.js 16 (React 19)** Full-Stack application.
*   **Architecture Pattern**: **Component-Based Modular Architecture** using the Next.js App Router (v13+ standard).
*   **State Management**: 
    *   **UI State**: React `useState` and `useReducer`.
    *   **Global Persistence**: `localStorage` (Auth tokens, user profile).
    *   **Theme State**: `next-themes` (Dark/Light mode).
*   **Routing**: Folder-based routing defined in `src/app`.
*   **Build Tools**: `npm`, `Webpack`/`Turbopack`, `Tailwind CSS 4`.

---

## 2. Folder Structure Explanation

| Folder | Purpose | Connection | Reusability |
| :--- | :--- | :--- | :--- |
| **`src/app`** | **Routing Engine** | The skeleton. Every folder is a URL path (e.g., `/java`). | Feature-Specific |
| **`src/components`** | **UI Library** | Visual blocks (Buttons, Navbars, Cards) used everywhere. | **Highly Reusable** |
| **`src/hooks`** | **Logic Hooks** | Extracts logic (e.g., `useTheme`) from UI components. | **Highly Reusable** |
| **`src/data`** | **Content Store** | Centralized static data for courses and videos. | Shared Data |
| **`src/config`** | **System Config** | Feature toggles and environment constants. | Global |
| **`src/lib`** | **Infrastructure** | Backend connections (MongoDB) and shared helpers. | Core Utility |
| **`public`** | **Assets** | High-res images, logos, and favicons served directly. | Shared Assets |

---

## 3. File-Level Analysis (Key Files)

*   **`src/app/layout.tsx`**: The **Root Layout**. Wraps the entire app in fonts (Geist, Orbitron) and the `AuthGuard` provider.
*   **`src/app/globals.css`**: The **Styling Master**. Contains Tailwind 4 directives and premium Glassmorphism utilities (`.glass`, `.glass-card`).
*   **`src/app/theme-variables.css`**: The **Color Control Room**. Defines all CSS color tokens for Dark/Light mode.
*   **`src/lib/mongodb.ts`**: The **Database Bridge**. Manages connections to the MongoDB cluster.
*   **`next.config.ts`**: The **App Optimizer**. Sets image domains and experimental features.

---

## 4. Routing System
The project uses **Next.js App Router**:
*   **Route Setup**: Defined by folder names in `src/app/`.
*   **Hierarchy**: Supports nested paths (e.g., `/challenges/[language]/badge`).
*   **Public Routes**: Homepage, Tutorial Hubs (SQL, Python, etc.).
*   **Private/Protected Routes**: Dashboard and Admin sections (token-dependent).
*   **Dynamic Routes**: Used for challenges (e.g., `[language]`) to serve multiple technologies with one template.

---

## 5. Layout Ecosystem
Layouts provide a consistent "frame" for content:
*   **Root Layout**: Global (Header, SEO, Metadata).
*   **Tech Layout (`tech-layout.tsx`)**: Specialized for tutorials; includes a sticky sidebar and progress tracking for Java, SQL, Python, and more.
*   **Conditional Navigation**: The `ConditionalNav` component automatically swaps headers based on whether a user is on a landing page or a tutorial.

---

## 6. Page-by-Page Breakdown
*   **Home (`/`)**: Main entry. Features `HeroWithNav`, `CompactCourses`, and `Gallery`.
*   **Login/Signup (`/login`, `/signup`)**: Sliding-transition auth pages with heavy Framer Motion animations.
*   **Technology Hubs (`/sql`, `/java`, etc.)**: Educational centers. Active content updates via `activeSection` state without page refreshes.
*   **Dashboard (`/dashboard`)**: Student profile management with `FileReader` for avatar uploads.

---

## 7. Component Strategy
*   **Shared Components**: `SharedNav`, `Footer`, `Sidebar`.
*   **UI Components**: `lucide-react` icons and glassmorphism cards.
*   **Smart Components**: `Gallery.tsx` (manages lightbox state).
*   **Dumb Components**: `VideoSection.tsx` (renders video based on props).

---

## 8. API & Services Layer
*   **Framework**: Internal Next.js API Routes (`src/app/api`).
*   **Auth Endpoints**: `/api/auth/login` and `/api/auth/signup`.
*   **Data Integrity**: Uses `bcryptjs` for security and `jsonwebtoken` (JWT) for session signing.

---

## 9. Authentication Flow
1.  **Submit**: Frontend sends JSON to `/api/auth/login`.
2.  **Verify**: Server queries MongoDB, hashes input password with `bcrypt`, and validates.
3.  **Sign**: Server generates a JWT.
4.  **Save**: Frontend stores token in `localStorage`.
5.  **Guard**: `AuthGuard` component (client-side) prevents unauthorized access to sensitive pages.

---

## 10. Styling & Aesthetics
*   **Technology**: Tailwind CSS 4 & Vanilla CSS.
*   **Design Language**: **Premium Glassmorphism**.
*   **Dark Mode**: Supported via class-based theme switching.
*   **Animations**: Extensive use of `framer-motion` for smooth hover states and entry reveals.

---

## 11. Environment & Config
*   **`.env`**: Stores `MONGODB_URI` and `JWT_SECRET`.
*   **`authStatus.ts`**: Allows admins to pause the auth system for maintenance by setting `AUTH_SYSTEM_AVAILABLE = false`.

---

## 12. Future Suggestions (For Junior Developers)
*   **Code Splitting**: Continue using `dynamic()` imports for large components (like Gallery) to keep page speed high.
*   **Service Layer**: Consider moving API calls into a dedicated `services/` folder to separate logic from UI.
*   **Standardization**: Ensure all folders use `kabob-case` for consistent Linux/Windows compatibility.

---
*Created by Antigravity AI for OneHub Global (2026)*
