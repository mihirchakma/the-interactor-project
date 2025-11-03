# The Interactor: Social Post Prototype

A functional social media post builder and feed prototype built with React, demonstrating core social media application development principles.

## 📋 Project Overview
**Module**: CIT305 - Social Media Applications  
**Project Type**: Mini Project 
**Degree Program**: Bachelor of Applied Information Technology (BAIT)
**University**: Sri Lanka Technology Campus (SLTC)
**Technology Stack**: React, Vite, HTML5, CSS3, and JavaScript

---

## 👥 Team Members
- 22UG3-0235 - Mihir Chakma (Group Leader)
- 22UG3-0570 - Thavalampitiye Dhammika
- 22UG3-0912 - Pandigamage Saleela Kaushal
- 22UG3-0108 - Ruchira Vishvajith Dharma Shri
- 22UG3-0011 - Kasuni Sewwandi Rajapaksha
- 22UG3-0636 - Poojani Dewdoo Perera

---

## 🎯 Project Goals

This project demonstrates proficiency in:

1. **LO1 - Front-end Technologies**: Utilizing React framework to design social media content
2. **LO2 - Design Principles**: Implementing reusable components and timeline structure patterns
3. **LO3 - Platform Independence**: Building responsive, browser-based application with API integration

---

## ✨ Features

### Phase 1: Post Creator & Component Development

- **Post Creation Form**
  - Text content input (Required, minimum 5 characters)
  - Image URL input (Optional, with validation and preview)
  - Real-time character counter
  - Form validation with error messages
  - Success feedback on submission

- **Reusable Social Post Component**
  - User profile picture (generated with initials)
  - Username display
  - Relative timestamp (e.g., "5m ago", "2h ago")
  - Post content with text and optional images
  - Like button (functional with state management)
  - Comment count display
  - Share button (UI ready)
  - Responsive card design

### Phase 2: Interactivity & Data Integration

- **API Integration**
  - Fetches initial posts from JSONPlaceholder API
  - Displays first 10 posts in the feed
  - Loading state with spinner
  - Error handling for failed requests

- **State Management**
  - React Hooks (useState, useEffect)
  - New posts appear at top of feed
  - Like functionality with state persistence
  - Real-time UI updates

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The application will hot-reload on changes

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

---

## 📁 Project Structure

```
The Interactor/
├── src/
│   ├── components/
│   │   ├── Comment.css
│   │   ├── Comment.jsx
│   │   ├── PostCreator.jsx      # Task 1: Post creation form
│   │   ├── PostCreator.css
│   │   ├── SocialPost.jsx       # Task 2: Reusable post component
│   │   └── SocialPost.css
│   ├── App.jsx                  # Main app with state management
│   ├── App.css
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Design Principles

- **Component Reusability**: SocialPost component can be reused with different data
- **Separation of Concerns**: Clear distinction between form, post display, and state management
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI/UX**: 
  - Smooth animations and transitions
  - Gradient backgrounds and shadows
  - Intuitive interaction feedback
  - Accessible color contrast

---

## 🔧 Technical Implementation

### React Hooks Used

- **useState**: Managing posts array, form inputs, loading states, errors
- **useEffect**: Fetching data from API on component mount

### API Integration

- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com/posts)
- **Method**: fetch API
- **Data**: First 10 posts transformed to match component structure

### State Management Flow

1. App component maintains posts array in state
2. PostCreator submits new post data to App
3. App adds new post to beginning of array
4. Posts are rendered using map() over SocialPost components
5. Like interactions update specific post in state array

---

## 📱 Responsive Breakpoints

- **Desktop**: > 968px (Two-column layout)
- **Tablet**: 768px - 968px (Single-column layout)
- **Mobile**: < 768px (Optimized spacing and buttons)
- **Small Mobile**: < 480px (Compact UI)

---

## 🎓 Learning Outcomes Addressed

### LO1: Front-end Technologies
- React functional components
- JSX syntax and component composition
- Modern JavaScript (ES6+)
- CSS3 with animations and gradients

### LO2: Design Principles
- Reusable component architecture
- Props and data flow
- Timeline/feed structure
- Social media UI patterns

### LO3: Platform Independence
- Browser-based application (no native dependencies)
- External API integration
- Responsive design for multiple devices
- No database required (client-side state)

---

## 🌟 Future Enhancements

- Add comment functionality
- Implement user authentication
- Add image upload capability
- Include emoji picker
- Add search and filter features
- Implement infinite scroll
- Add dark mode toggle

---

## 📝 Notes

- No database required - all state is managed client-side
- API data is from JSONPlaceholder (test API)
- Images in posts require valid URLs
- Like and comment counts start at 0 for user-created posts

---

## 👨‍💻 Development

Built with modern web technologies:
- **React 18.2** - Component library
- **Vite 5.0** - Build tool and dev server
- **CSS3** - Styling with animations
- **JSONPlaceholder** - Mock API for testing

---

**Built for CIT305: Social Media Applications**  
*Demonstrating practical application of social media development principles*

---
