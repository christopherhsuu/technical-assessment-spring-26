# IdeaCon Sabermetrics App - Development Guide

## 🎯 Project Overview

An educational web app teaching advanced baseball analytics (sabermetrics) built for Hack4Impact's technical assessment.

**Tech Stack:**
- Frontend: React + TypeScript + Vite + TailwindCSS + Socket.io-client
- Backend: Node.js + Express (JavaScript) + Socket.io + MongoDB
- Real-time Features: Socket.io for instant quiz updates

## 📁 Project Structure

```
technical-assessment-spring-26/
├── frontend/              # React TypeScript app
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom hooks
│   │   ├── services/     # API calls
│   │   ├── types/        # TypeScript types
│   │   └── App.tsx       # Main app with routing
├── backend/              # Express JavaScript API
│   ├── src/
│   │   ├── models/       # MongoDB models
│   │   ├── routes/       # API routes
│   │   ├── socket/       # Socket.io handlers
│   │   ├── config/       # DB configuration
│   │   ├── seed/         # Quiz seed data
│   │   └── server.js     # Main server
└── README.md
```

## 🚀 Running Locally

### Prerequisites
- Node.js v22.21.0+ installed
- MongoDB installed locally OR MongoDB Atlas account

### Step 1: Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Step 2: Set Up MongoDB

**Option A: Local MongoDB**
1. Install MongoDB Community Edition
2. Start MongoDB: `mongod`
3. Backend `.env` is already configured for local MongoDB

**Option B: MongoDB Atlas (Recommended)**
1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster (free M0 tier)
3. Create database user and password
4. Get connection string
5. Update `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sabermetrics-app?retryWrites=true&w=majority
   ```

### Step 3: Seed Quiz Data

```bash
cd backend
npm run seed
```

You should see: "✅ Quiz data seeded successfully! Inserted 5 quizzes"

### Step 4: Start Backend Server

```bash
cd backend
npm run dev
```

Server runs on http://localhost:5000
You should see:
- 🚀 Server running on port 5000
- 📡 Socket.io enabled
- 🗄️ MongoDB connection established

### Step 5: Start Frontend

In a new terminal:

```bash
cd frontend
npm run dev
```

Frontend runs on http://localhost:5173

### Step 6: Test the App

1. Open http://localhost:5173
2. Navigate through pages using the navigation bar
3. Try voting on a quiz (you'll be prompted for your name)
4. Open another browser window to see real-time updates
5. Post a comment on any detail page

## 🧪 Testing Checklist

- [ ] Home page loads with all navigation cards
- [ ] Can navigate to all 5 detail pages (WAR, Offense, Pitching, Defense, Statcast)
- [ ] Username modal appears on first quiz interaction
- [ ] Can vote on quiz questions
- [ ] Vote counts update instantly
- [ ] Can change vote and see counts update
- [ ] "Show X voters" button appears after voting
- [ ] Can expand voter list to see usernames
- [ ] Can post comments on detail pages
- [ ] Comments display with username and timestamp
- [ ] Responsive design works on mobile (test with DevTools)
- [ ] Socket.io connection shows "🟢 Live updates enabled"

## 🎨 Expanding Content (Optional)

The detail pages (Pitching, Defense, Statcast) have simplified content. To expand:

1. Follow the pattern from `WAR.tsx` and `Offense.tsx`
2. Add more sections with detailed explanations
3. Include StatCard components for visual variety
4. Add examples and comparisons
5. Keep explanations beginner-friendly (assume zero baseball knowledge)

Example structure:
```tsx
<section className="mb-12">
  <h2>Section Title</h2>
  <p>Explanation...</p>
  <StatCard /> {/* Visual element */}
</section>
```

## 📊 Adding Charts (Optional Enhancement)

To add Recharts visualizations:

```tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Player A', value: 2.1 },
  { name: 'Player B', value: 5.2 },
];

<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#1a472a" />
  </BarChart>
</ResponsiveContainer>
```

## 🚢 Deployment

### Backend: Render

1. Push code to GitHub
2. Go to https://render.com
3. Create new "Web Service"
4. Connect GitHub repository
5. Configure:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment Variables**:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `NODE_ENV`: production
     - `FRONTEND_URL`: (will add after frontend deploy)
6. Deploy!
7. Copy the deployed URL (e.g., https://your-app.onrender.com)

### Frontend: Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Import GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: frontend
   - **Build Command**: `npm run build`
   - **Output Directory**: dist
   - **Environment Variables**:
     - `VITE_API_URL`: Your Render backend URL (e.g., https://your-app.onrender.com)
5. Deploy!

### Update Backend CORS

After frontend deploys, update backend `.env` on Render:
```
FRONTEND_URL=https://your-app.vercel.app
```

Redeploy backend to apply changes.

## 🐛 Common Issues

### "Cannot connect to MongoDB"
- Check MongoDB is running (`mongod` command)
- Verify connection string in `.env`
- Ensure IP address is whitelisted in MongoDB Atlas (use 0.0.0.0/0 for testing)

### "Socket.io not connecting"
- Check backend is running on port 5000
- Verify `VITE_API_URL` in frontend `.env` points to correct backend URL
- Check browser console for connection errors

### "Quiz not loading"
- Ensure you ran `npm run seed` in backend
- Check backend console for errors
- Verify MongoDB connection is successful

### "CORS errors"
- Update `FRONTEND_URL` in backend `.env`
- Restart backend server after changing `.env`

## 📝 Code Quality Tips

### TypeScript (Frontend)
- Use proper types for all props and state
- Avoid `any` type - use specific interfaces
- Export interfaces from `types/index.ts`

### JavaScript (Backend)
- Add descriptive comments
- Use async/await for database operations
- Handle errors with try/catch blocks

### Comments
- Explain WHY, not WHAT
- Add file-level comments describing purpose
- Document complex logic

## 🎓 Understanding the Code

### Real-time Quiz Updates Flow

1. User votes → Frontend calls `submitVote()` from `useSocket` hook
2. Socket.io sends event to backend → `socket/quizSocket.js` receives it
3. Backend updates MongoDB → Saves vote to database
4. Backend broadcasts update → `io.emit('quiz-updated', quiz)` to ALL clients
5. All frontends receive update → `onQuizUpdate()` callback fires
6. Quiz component re-renders → Shows updated vote counts

### Username Flow

1. User clicks quiz option without username → Modal appears
2. User enters name → Saved to `localStorage`
3. `useUsername` hook manages state → Persists across page refreshes
4. Username included in all API calls → For quiz votes and comments

### API Routes

- `GET /api/quizzes/:quizId` - Fetch quiz data
- `POST /api/quizzes/:quizId/vote` - Submit new vote
- `PUT /api/quizzes/:quizId/vote` - Change existing vote
- `GET /api/comments/:pageRoute` - Fetch comments for a page
- `POST /api/comments` - Create new comment

## 🎉 Next Steps

1. **Test thoroughly** - Try all features, test on mobile
2. **Deploy** - Follow deployment instructions above
3. **Screen recording** - Record walkthrough of app features
4. **Fill PR template** - Complete all checkboxes
5. **Submit** - Create PR to Hack4Impact repo

## 📚 Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [Socket.io Documentation](https://socket.io/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Atlas Getting Started](https://www.mongodb.com/docs/atlas/getting-started/)
- [Vercel Deployment](https://vercel.com/docs)
- [Render Deployment](https://render.com/docs)

## 💡 Tips for Interview

Be prepared to explain:
- Why you chose TypeScript for frontend and JavaScript for backend
- How Socket.io enables real-time updates
- How you structured components for reusability
- Trade-offs in your design decisions
- How you handled state management (hooks)
- Why sabermetrics is interesting to you!

Good luck! You've built something impressive. 🚀⚾
