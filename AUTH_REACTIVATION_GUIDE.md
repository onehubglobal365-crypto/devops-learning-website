# OneHubGlobal Authentication Reactivation Guide

This document provides step-by-step instructions on how to re-enable the authentication system that was paused to allow "Guest Mode" access.

## Quick Start (Central Toggle)

The most important step is to re-enable the global flag:
1. Open `src/config/authStatus.ts`
2. Change `export const AUTH_SYSTEM_AVAILABLE = false;` to `true`.
3. Uncomment `export const AUTH_SYSTEM_AVAILABLE = true;`.

---

## Detailed Reactivation Steps

To fully restore the authentication experience (including login buttons, redirects, and alerts), you must uncomment the logic in the following files. You can search for the comment marker `/* Original Authentication logic - Paused` to find these sections.

### 1. Root Layout Wrappers
**File:** `src/app/layout.tsx`
- Remove the `{/* */}` comments around `<AuthGuard>` and `<GlobalContinuePrompt />`.
- This re-enables session monitoring and the global "Continue with Account" popup.

### 2. Navigation Buttons
**Files:**
- `src/components/layout/shared-nav.tsx` (Desktop Navigation)
- `src/components/layout/mobile-menu.tsx` (Mobile Navigation)
- Uncomment the "Sign In", "Sign Up", and "Log Out" sections in both files to bring back the user authentication UI.

### 3. Feature Protection Logic
**Files:**
- `src/app/dashboard/page.tsx`: Restore the redirect to `/login` if no token is found.
- `src/app/roadmap/page.tsx`: Restore the enrollment check in `handleStartCourse`.
- `src/components/landing/unique-hero.tsx`: Re-enable the `handleAction` check that prompts for login before sliding into courses.
- `src/components/common/technology-card.tsx`: Re-enable the login requirement when clicking on course cards.

### 4. Tutorial Access (Redirects)
**Files:**
- `src/app/tutorials/page.tsx`
- `src/app/tutorials/programming/page.tsx`
- `src/app/tutorials/government-jobs/page.tsx`
- `src/app/tutorials/courses/page.tsx`
- In each of these files, uncomment the logic that redirects users to `/register` if they aren't logged in.

### 5. Guards and Prompts
**Files:**
- `src/components/auth/tutorial-auth-guard.tsx`: Restore the logic that blocks access to specific pathnames.
- `src/components/auth/global-continue-prompt.tsx`: Restore the `GlobalContinuePromptInner` logic to check for returning users.

### 6. Alert Messages (Popups)
**Files:**
- `src/app/roadmap/page.tsx`: Uncomment the "Restricted Access" alert.
- `src/app/dashboard/page.tsx`: Uncomment the "Profile updated successfully!" alert.

---

## Summary of Changes Made
- Central flag `AUTH_SYSTEM_AVAILABLE` set to `false`.
- All `alert()` messages were commented out for a silent experience.
- All "Sign In" / "User Menu" buttons were hidden.
- All automatic redirects to login/registration were bypassed.
- All enrollment checks for courses were disabled.
- Added `Suspense` boundaries to several pages (`/dashboard`, `/challenges/*`) to resolve "missing suspense" build errors on Vercel. These can remain in place even after authentication is re-enabled.

*Note: All original code is preserved in comments immediately below the new bypass logic.*
