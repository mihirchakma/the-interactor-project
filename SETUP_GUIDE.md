# 🚀 Quick Setup Guide - The Interactor

## Step-by-Step Installation

### 1. Install Node.js (if not already installed)
- Download from: https://nodejs.org/
- Choose LTS version (recommended)
- Verify installation:

  ```bash
  node --version
  npm --version
  ```

### 2. Install Project Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

This will install:
- React 19.2
- React DOM 19.2
- Vite 7.1 (build tool)
- All required development dependencies

### 3. Start Development Server

```bash
npm run dev
```

Expected output:

```
  VITE v7.1.12  ready in 1765 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 4. Open in Browser
- Click the link or navigate to: `http://localhost:5173`
- The app will automatically reload when you make changes

---

## 🎯 Testing the Application

### Test Post Creation (Task 1)
1. Type text in "What's on your mind?" field (minimum 5 characters)
2. (Optional) Add image URL like: `https://picsum.photos/600/400`
3. Click "📤 Post" button
4. Your post appears at the top of the feed

### Test API Integration (Task 3)
- On page load, 10 posts are automatically fetched from JSONPlaceholder API
- Loading spinner shows during fetch
- Posts display with user avatars and content

### Test Interactivity (Task 2 & 4)
- Click "🤍 Like" button on any post
- Watch it change to "❤️ Like" with red styling
- Like count increases by 1
- Click again to unlike

### Test Responsive Design
- Resize browser window
- Check mobile view (< 768px)
- Check tablet view (768px - 968px)
- Check desktop view (> 968px)

---

## 📱 Sample Image URLs for Testing

Use these URLs in the Image URL field:
- `https://picsum.photos/600/400`
- `https://picsum.photos/800/600`
- `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800`

---

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing

Clear cache and retry:

```bash
npm cache clean --force

npm install
```

### API Not Loading
- Check internet connection
- JSONPlaceholder API might be temporarily down
- Your created posts will still work

---

## 📦 Build for Production

When ready to deploy:
```bash
npm run build
```

Output folder: `dist/`

Preview production build:
```bash
npm run preview
```

---

## ✅ Assignment Checklist

- [ ] Post Creator Form works (text + image URL)
- [ ] Form validation (required field, min length)
- [ ] New posts appear at top of feed
- [ ] SocialPost component displays all data
- [ ] API fetches 10 posts from JSONPlaceholder
- [ ] Like button is functional
- [ ] Comment count displays
- [ ] User avatars show with colors
- [ ] Timestamps are relative (e.g., "5m ago")
- [ ] Responsive on mobile, tablet, desktop
- [ ] Clean, modern UI design

---

## 🎓 Demonstrating Learning Outcomes

### LO1: Front-end Technologies
- **Show**: React components (`PostCreator.jsx`, `Comment.jsx`, `SocialPost.jsx`, `App.jsx`)
  - **Explain**: How JSX, props, and component composition work

### LO2: Design Principles
- **Show**: Reusable `SocialPost` component used for all posts
  - **Explain**: Component accepts props, maintains consistent design pattern

### LO3: Platform Independence
- **Show**: Browser-based app, API integration in `App.jsx` (lines with `fetch`)
  - **Explain**: Runs on any device with browser, fetches data from external API

---

## 📸 Features to Highlight in Presentation

1. **Form Validation**: Try submitting empty form
2. **Image Preview**: Paste image URL and see preview
3. **Real-time Updates**: Create post, see it appear instantly
4. **Like Animation**: Click like button, watch animation
5. **Responsive Design**: Show on different screen sizes
6. **API Integration**: Show network tab with API call
7. **State Management**: Explain useState and useEffect in code

---

## 💡 Pro Tips

- Use DevTools (F12) to show React components
- Open Network tab to show API requests
- Demonstrate responsive design with device toolbar (Ctrl+Shift+M)
- Show the code structure to explain component architecture

---

**Need Help?**

- Check README.md for detailed documentation
- Review component files for inline comments
- All requirements from project brief are implemented

Thank You, Happy Coding! 🌟

---

