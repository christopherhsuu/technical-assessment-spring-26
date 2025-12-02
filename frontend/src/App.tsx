// Main App Component
// Sets up React Router for navigation between pages
// Includes Navigation component on all pages

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import WAR from './pages/WAR';
import Offense from './pages/Offense';
import Pitching from './pages/Pitching';
import Defense from './pages/Defense';
import Statcast from './pages/Statcast';
import Glossary from './pages/Glossary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8fafc]">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/war" element={<WAR />} />
          <Route path="/offense" element={<Offense />} />
          <Route path="/pitching" element={<Pitching />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/statcast" element={<Statcast />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
