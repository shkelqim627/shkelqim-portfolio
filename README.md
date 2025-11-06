# Portfolio Project Structure

This document explains the refactored modular structure of the portfolio website.

## 📁 Project Structure

src/
├── components/ # Reusable UI components
│ ├── Navbar.tsx # Navigation bar with routing & dark mode toggle
│ ├── Hero.tsx # Hero section with profile image
│ ├── Skills.tsx # Skills section with categories
│ ├── Projects.tsx # Projects grid component
│ ├── Education.tsx # Education & Experience section
│ ├── Contact.tsx # Contact section with EmailJS form
│ └── Footer.tsx # Footer component
│
├── pages/ # Page components
│ ├── Home.tsx # Home page (all sections)
│ ├── ProjectsPage.tsx # All projects page
│ └── ProjectDetail.tsx# Individual project details
│
├── data/ # Data files
│ └── projects.ts # Project data with interfaces
│
├── assets/ # Images and static files
│ └── 2.jpeg # Profile image
│
├── App.tsx # Main app with routing
└── main.tsx # Entry point



## 🎯 Key Benefits

### Before Refactoring
- 491 lines in a single App.tsx file  
- Hard to maintain and navigate  
- No routing or deep linking  
- Difficult to reuse components  

### After Refactoring
- 68 lines in App.tsx (86% reduction)  
- Clean, modular components  
- React Router for navigation  
- Separate /projects page  
- Individual project detail pages  
- Easy to maintain and extend  

## 🛣️ Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with all sections |
| `/projects` | All projects page |
| `/projects/:id` | Individual project detail page |

## 🔧 Components Overview

### Navbar.tsx
- Fixed navigation bar  
- Dark/light mode toggle with sun/moon icons  
- Active section highlighting  
- React Router integration  

### Hero.tsx
- Profile image with animated gradient glow  
- Introduction text  
- Social media links  
- Scroll to skills button  

### Skills.tsx
- Frontend/Backend categories  
- Skills grid with emoji icons  
- Responsive layout  

### Projects.tsx
- Reusable project grid  
- Configurable limit (show 3 on home, all on projects page)  
- Links to project detail pages  

### Education.tsx
- Education timeline  
- Work experience cards  

### Contact.tsx
- Social media links  
- EmailJS contact form to send messages directly  
- Displays success and error notifications  

### Footer.tsx
- Copyright notice  
- Responsive design  

## 📄 Pages

### Home.tsx
- Combines all components  
- Handles scroll tracking  
- Updates active navigation section  

### ProjectsPage.tsx
- Shows all projects  
- Grid layout  
- Links to individual projects  

### ProjectDetail.tsx
- Full project information  
- Technologies, features, impact  
- Live site and GitHub links  
- Back navigation  

## 💾 Data Management

### projects.ts
- Centralized project data  
- TypeScript interfaces  
- Easy to add or update projects  
- Single source of truth  

Example project structure:
```typescript
{
  id: 'project-id',
  title: 'Project Name',
  category: 'Category',
  technologies: ['Tech1', 'Tech2'],
  description: 'Short description',
  fullDescription: 'Detailed description',
  impact: 'Project impact',
  features: ['Feature 1', 'Feature 2'],
  gradient: 'from-color to-color',
  icon: 'SVG path',
  liveUrl: 'https://...',
  githubUrl: 'https://...'
}

🎨 Styling

Tailwind CSS for all styling

Dark mode support throughout

Consistent color scheme (yellow/orange accents)

Responsive design (mobile-first)

📱 Responsive Breakpoints

Mobile: < 768px

Tablet: 768px - 1024px

Desktop: > 1024px

🔄 State Management

Dark mode state in App.tsx

Passed down via props

Persisted in DOM classes

No external state library needed


🧪 Development

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build


📝 Notes

Old monolithic code deleted

All routes work with React Router

Deep linking supported

SEO-friendly structure