# 📚 Sabermetrics Made Simple - Setup Instructions

## 🎯 Project Overview

An interactive educational website teaching baseball sabermetrics (advanced analytics) to complete beginners. Features real-time quizzes with Socket.io, comment system, and comprehensive explanations of modern baseball statistics.

**Topic**: Baseball Sabermetrics & Analytics
**Tech Stack**: React, TypeScript, Framer Motion, Socket.io, MongoDB, Express, Tailwind CSS

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (free tier) OR local MongoDB
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd technical-assessment-spring-26
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5001
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

**Get MongoDB Atlas URI**:
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Get connection string (replace `<password>` with your password)
4. Add `/sabermetrics-app` at the end

Seed the database:
```bash
npm run seed
```

Start backend server:
```bash
npm run dev
```

Backend runs on `http://localhost:5001`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:5001
```

Start frontend:
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## ✨ Features Implemented

### ✅ Required Features
- **Beautiful Responsive Design**: Custom colors, fonts, animations with Framer Motion
- **Home Page**: Comprehensive intro to sabermetrics with animated visuals
- **6 Detail Pages**: WAR, Offense, Pitching, Defense, Statcast, Glossary
- **Interactive Quizzes**: 5 quizzes with real-time voting, correct/incorrect feedback, voter names
- **Comment System**: On all pages (except Home per requirements)
- **Username System**: localStorage with modal prompt
- **Database**: MongoDB Atlas with quiz votes and comments
- **Deployment Ready**: Vercel config files included

### 🌟 Advanced Features
- **Socket.io**: Real-time quiz vote synchronization
- **TypeScript**: Full type safety
- **Custom Hooks**: useUsername, useSocket
- **Lucide Icons**: Professional SVG icons (no emojis)
- **Mobile Responsive**: Works on all screen sizes
- **SEO Optimized**: Meta tags and descriptions

---

## 📱 Testing the Application

### Test Quiz Feature:
1. Go to any page with a quiz (WAR, Offense, Pitching, Defense, Statcast)
2. Click an answer → prompted for username
3. Submit → see results with checkmark/X
4. Click "Show X voters" → see all usernames who voted
5. Click different answer → vote changes instantly
6. Open in another browser window → see real-time updates

### Test Comment Feature:
1. Go to any detail page
2. Type comment → click POST COMMENT
3. Enter username if prompted
4. See comment appear with avatar and timestamp

### Test Responsiveness:
1. Resize browser window
2. Check mobile menu (hamburger icon)
3. Verify cards stack on mobile

---

## 🏗️ Project Structure

```
technical-assessment-spring-26/
├── backend/
│   ├── src/
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API routes
│   │   ├── seed/            # Database seeding
│   │   └── server.js        # Express + Socket.io server
│   ├── .env.example
│   ├── vercel.json          # Deployment config
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Quiz.tsx     # Interactive quiz with Socket.io
│   │   │   ├── Comments.tsx # Comment system
│   │   │   ├── Navigation.tsx
│   │   │   └── ...
│   │   ├── pages/           # Route pages
│   │   │   ├── Home.tsx
│   │   │   ├── WAR.tsx
│   │   │   ├── Offense.tsx
│   │   │   └── ...
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API calls
│   │   └── types/           # TypeScript types
│   ├── .env.example
│   ├── vercel.json
│   └── package.json
│
└── README.md
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

**Backend:**
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import repository → select `backend` folder
4. Add environment variables from `.env`
5. Deploy

**Frontend:**
1. In Vercel, import repository again
2. Select `frontend` folder
3. Add `VITE_API_URL=your-backend-url`
4. Deploy

Update `FRONTEND_URL` in backend environment to deployed frontend URL.

---

## 🐛 Troubleshooting

**Quiz shows "Reconnecting..."**:
- Check backend is running on port 5001
- Check MongoDB connection string is correct
- Check CORS settings allow frontend URL

**Comments not appearing**:
- Check MongoDB connection
- Check backend API routes working (`http://localhost:5001/api/comments`)
- Check browser console for errors

**Build errors**:
```bash
# Frontend
cd frontend
rm -rf node_modules dist
npm install
npm run build

# Backend
cd backend
rm -rf node_modules
npm install
```

---

## 📊 API Endpoints

### Quizzes
- `GET /api/quizzes/:quizId` - Get quiz data
- `POST /api/quizzes/:quizId/vote` - Submit vote
- `PUT /api/quizzes/:quizId/vote` - Change vote

### Comments
- `GET /api/comments?pageRoute=<route>` - Get comments for page
- `POST /api/comments` - Create comment

### WebSocket Events
- `vote:submitted` - Broadcast new vote
- `vote:changed` - Broadcast vote change
- `quiz:update` - Send updated quiz data

---

## 💡 Key Technologies

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React (SVG icons)
- **Real-time**: Socket.io Client
- **Routing**: React Router v6
- **Backend**: Express 5, Socket.io Server
- **Database**: MongoDB with Mongoose
- **Deployment**: Vercel

---

## 🎓 Educational Content

The website teaches:
1. **WAR** - Wins Above Replacement (comprehensive player value)
2. **Offense** - OBP, SLG, OPS, OPS+, wOBA, wRC+
3. **Pitching** - FIP, xFIP, K-BB%, CSW%, Stuff+, WHIP
4. **Defense** - DRS, UZR, OAA, FRV, reaction time
5. **Statcast** - Exit velocity, barrels, spin rate, bat tracking
6. **Glossary** - 60+ searchable baseball terms

Each stat includes:
- Clear explanation for beginners
- Why it's better than traditional stats
- Formula breakdowns with examples
- Scales and benchmarks
- Real-world applications

---

## 📝 Notes for Interview

**Technologies I learned for this project**:
- Socket.io for real-time communication
- Framer Motion for complex animations
- TypeScript with React (type-safe hooks)
- MongoDB aggregation pipelines
- Vercel deployment configuration

**Design decisions**:
- Used Lucide React instead of emojis for professional appearance
- Implemented real-time updates for better UX
- Added weight explanations to help beginners understand formulas
- Glossary page has comments for user questions about terms
- Mobile-first responsive design

**Challenges overcome**:
- MongoDB Atlas connection issues in local dev
- Real-time vote synchronization with Socket.io
- TypeScript type safety with React hooks
- Responsive design with Tailwind breakpoints

---

## ✅ Requirements Checklist

- ✅ Beautiful responsive frontend design
- ✅ Catchy title and professional styling
- ✅ Home page with comprehensive summary
- ✅ 6+ detail pages with in-depth content
- ✅ Intuitive navigation (sticky nav, mobile menu)
- ✅ Interactive quizzes with all required features:
  - ✅ Show correct/incorrect
  - ✅ Live vote counts with percentages
  - ✅ Voter names displayed
  - ✅ Ability to change votes
- ✅ Comment system on all non-home pages
- ✅ Username prompt with localStorage
- ✅ MongoDB database storage
- ✅ Deployment configuration
- ✅ Advanced tech beyond workshops

---

## 🎉 Ready for Submission!

This project is **complete and ready** for the technical assessment. All required features are implemented and working. The educational content is comprehensive, engaging, and perfect for teaching sabermetrics to complete beginners.

Good luck with your submission! 🚀⚾
