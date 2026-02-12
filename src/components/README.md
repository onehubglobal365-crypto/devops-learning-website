# Component Structure Guide 🏗️

Welcome to the components library! We have organized the project files to make them easier to find and understand. Here is a quick guide to help you navigate.

## 📂 Folder Overview

### 1. `layout/` 📐
**What's inside:** Components that define the structure of pages.
**Examples:** Sidebars, Navigation Bars, Menus, and overall Page Layouts (`TechLayout`).
**When to use:** If you need to change the header, footer, or sidebar menu.

### 2. `common/` 🧩
**What's inside:** Generic UI elements used across multiple pages.
**Examples:** Buttons (`GlobalBackButton`), Search Bars, Theme Toggles, Copies.
**When to use:** If you need a reusable button or input field that looks the same everywhere.

### 3. `auth/` 🔐
**What's inside:** Everything related to User Authentication.
**Examples:** Login Modals, Sign-up Prompts, Profile management, and Access Guards.
**When to use:** If you are working on the login flow or user permissions.

### 4. `landing/` 🏠
**What's inside:** Components specific to the Home/Landing page.
**Examples:** Hero Sections, Alumni Galleries, Carousels.
**When to use:** If you are updating the main homepage marketing content.

### 5. `code/` 💻
**What's inside:** Interactive coding tools.
**Examples:** Code Editors, Terminals, Execution environments.
**When to use:** If you are modifying the "Try It Yourself" code widgets.

### 6. `video/` 🎬
**What's inside:** Video playback components.
**Examples:** Video Sections, Tutorial Players.
**When to use:** If you are changing how tutorial videos are displayed.

### 7. `seo/` 🔍
**What's inside:** Search Engine Optimization tools.
**Examples:** Metadata tags.
**When to use:** For improving Google search ranking settings.

---

## 💡 Tips for Contributors
- **Keep it clean:** Try to put new components in the most relevant folder.
- **Don't nest too deep:** We prefer flat structures inside these folders.
- **Check generic first:** Before building a new button, check `common/` to see if one exists!

Happy Coding! 🚀
