# Intro to Next.js

A full-stack learning project exploring core Next.js App Router concepts, dynamic routing, and component architecture.

## Technology Stack

- **Framework**: [Next.js 16.2.3](https://nextjs.org) - App Router with server/client component split
- **Runtime**: React 19.2.4
- **Styling**: TailwindCSS 4 + DaisyUI 5.5.19
- **Dev**: ESLint, TypeScript-ready

## Project Structure

```
src/
├── app/
│   ├── layout.js                 # Root layout with Navbar
│   ├── page.js                   # Home page
│   ├── globals.css
│   ├── posts/
│   │   ├── page.jsx              # All posts listing
│   │   ├── loading.jsx           # Loading UI
│   │   └── [post]/page.jsx       # Dynamic post detail
│   ├── users/
│   │   ├── page.jsx              # All users listing
│   │   ├── loading.jsx           # Loading UI
│   │   └── [user]/page.jsx       # Dynamic user detail
│   └── dashboard/
│       ├── layout.jsx            # Dashboard layout
│       ├── page.jsx              # Dashboard home
│       ├── profile/page.jsx      # User profile
│       └── hishab/page.jsx       # Hishab view
└── components/
    └── Navbar.jsx                # Active-link responsive navbar
```

## Key Concepts Demonstrated

### 1. Active Link Detection
The `Navbar` component uses the `usePathname()` hook to detect the current route and dynamically apply Tailwind styles:

```jsx
const pathname = usePathname();
<Link className={`${pathname === '/' ? 'text-purple-500' : ''}`} href="/">
  Home
</Link>
```

### 2. Client vs. Server Components
- `Navbar.jsx` uses `'use client'` to leverage browser APIs (`usePathname`)
- Root layout keeps server-rendering by default for optimal performance

### 3. Dynamic Routes
- `[post]` and `[user]` segments enable dynamic page generation
- Loading states with `loading.jsx` files for better UX

### 4. Nested Layouts
Dashboard section has its own layout structure, demonstrating layout composition patterns.

## Learning Focus

This project is part of a structured full-stack learning curriculum. Current focus areas:

- ✅ Next.js App Router fundamentals
- ✅ Dynamic routing with file-based conventions
- ✅ Component composition and layout patterns
- ✅ Active link styling with client-side hooks
- 🔄 Data fetching and loading states (in progress)
- 📋 Form handling and state management (upcoming)

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - Official docs for App Router, routing, and rendering
- [TailwindCSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind component library used for navbar styling
- [React Hooks](https://react.dev/reference/react) - `usePathname()`, component state, and effects

## Notes

- This is an educational project, not production code
- Component patterns prioritize clarity and learning over optimization
- Explore the dashboard and dynamic routes to see nested navigation in action

## Share Your Development Journey

Building in public accelerates growth. Connect and share your progress:

- 🔗 [LinkedIn](https://www.linkedin.com/in/mohammad-ardi/) - Professional network
- 📘 [Facebook](https://www.facebook.com/miftahulislamardi) - Community engagement

Let's build together and grow as developers!
