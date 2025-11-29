// Home Page
// Landing page introducing sabermetrics revolution
// No quiz or comments (per requirements)

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const topicCards = [
    {
      path: '/war',
      title: 'WAR',
      subtitle: 'Wins Above Replacement',
      description: 'The ultimate all-in-one metric for measuring player value',
      stat: '8.5',
      statLabel: 'Elite Season',
    },
    {
      path: '/offense',
      title: 'Offensive Metrics',
      subtitle: 'wOBA & wRC+',
      description: 'Why batting average doesn\'t tell the whole story',
      stat: '.400',
      statLabel: 'wOBA Benchmark',
    },
    {
      path: '/pitching',
      title: 'Pitching Metrics',
      subtitle: 'FIP & xFIP',
      description: 'Predicting future performance better than ERA',
      stat: '2.50',
      statLabel: 'Elite FIP',
    },
    {
      path: '/defense',
      title: 'Defensive Metrics',
      subtitle: 'DRS, UZR & OAA',
      description: 'Measuring defense beyond errors',
      stat: '+15',
      statLabel: 'Gold Glove DRS',
    },
    {
      path: '/statcast',
      title: 'Statcast Revolution',
      subtitle: 'Exit Velo & Launch Angle',
      description: 'The cutting edge of baseball analytics',
      stat: '110',
      statLabel: 'MPH Exit Velo',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Stadium Night Lights */}
      <section className="relative bg-[#0f2818] text-[#f5f1e8] py-32 px-4 overflow-hidden">
        {/* Stadium lights effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-neon-yellow)_0%,_transparent_50%)] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#f4e409] rounded-full blur-3xl opacity-20 animate-[glow_3s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-[#f4e409] rounded-full blur-3xl opacity-20 animate-[glow_3s_ease-in-out_infinite_0.5s]"></div>

        {/* Diamond pattern overlay */}
        <div className="absolute inset-0 bg-diamond-pattern opacity-30"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          {/* Scoreboard-style badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            className="inline-block mb-8"
          >
            <div className="px-6 py-3 bg-[#0a0e0d] border-4 border-[#f4e409] shadow-[0_0_30px_rgba(244,228,9,0.3)]">
              <span className="font-mono font-bold text-[#f4e409] text-sm tracking-[0.2em]">EST. 2003 • MONEYBALL ERA</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.95] tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-[#f5f1e8]"
            >
              BASEBALL
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block text-[#f4e409] mt-2 drop-shadow-[0_0_20px_rgba(244,228,9,0.5)]"
            >
              BY THE NUMBERS
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-[#e8e2d5] max-w-3xl mx-auto font-serif leading-relaxed"
          >
            Master the advanced analytics revolutionizing America's pastime—from Oakland's Moneyball to every front office in the majors
          </motion.p>

          {/* Animated stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center gap-8 md:gap-16 flex-wrap"
          >
            {[
              { num: '30', label: 'MLB TEAMS' },
              { num: '162', label: 'GAME SEASON' },
              { num: '∞', label: 'STATS TO LEARN' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="scoreboard-num text-5xl md:text-6xl text-[#f4e409] mb-1">
                  {item.num}
                </div>
                <div className="font-mono text-xs text-[#a14a3a] tracking-widest">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom clay-colored wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#a14a3a] to-transparent opacity-20"></div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-5xl font-display font-bold mb-8 text-[#0f2818] leading-tight">
              The Old Way<br/>
              <span className="text-[#a14a3a]">Is Dead</span>
            </h2>
            <div className="space-y-6 text-lg text-[#3a3f3e] leading-relaxed font-serif">
              <p>
                For a century, baseball worshipped batting average, RBIs, and pitcher wins. Scout with your eyes, trust your gut, play the percentages from 1952.
              </p>
              <p>
                Then Oakland's 2002 Athletics—<em>broke, desperate, brilliant</em>—proved the conventional wisdom spectacularly wrong. Billy Beane's Moneyball revolution wasn't just about wins: it was about <strong className="text-[#0f2818] font-bold">seeing the game differently</strong>.
              </p>
              <p className="text-[#a14a3a] font-bold italic">
                The numbers don't lie. Traditional stats do.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Vintage scoreboard card */}
            <div className="bg-[#0a0e0d] border-4 border-[#a14a3a] p-8 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f4e409] rounded-full blur-xl opacity-40"></div>

              <div className="border-b-2 border-[#3a3f3e] pb-4 mb-6">
                <h3 className="font-mono font-black text-2xl text-[#f4e409] tracking-wider">
                  THE NEW ERA
                </h3>
              </div>

              <div className="space-y-4 text-[#f5f1e8] font-serif leading-relaxed">
                <p>
                  Every MLB team now employs statisticians, data scientists, and analysts. They're not just crunching numbers—they're <strong className="text-[#f4e409]">finding market inefficiencies</strong> worth millions.
                </p>
                <p className="text-sm text-[#e8e2d5]">
                  WAR. wOBA. FIP. xwOBA. Barrel%. These aren't just acronyms—they're the language of modern baseball dominance.
                </p>
              </div>

              {/* Decorative stitching */}
              <div className="mt-6 pt-6 border-t-2 border-dashed border-[#a14a3a]">
                <div className="font-mono text-xs text-[#a14a3a] tracking-[0.3em]">
                  MONEYBALL • 2003-PRESENT
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Topics Grid - Baseball Card Style */}
      <section className="bg-gradient-to-br from-[#e8e2d5] to-[#d4cdc1] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-20">
              <h2 className="text-6xl font-display font-bold mb-6 text-[#0f2818]">
                THE METRICS
              </h2>
              <div className="w-32 h-1 bg-[#a14a3a] mx-auto mb-6"></div>
              <p className="text-xl text-[#3a3f3e] max-w-2xl mx-auto font-serif italic">
                Five revolutionary statistics that changed the game forever
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topicCards.map((card, index) => (
                <motion.div
                  key={card.path}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link to={card.path}>
                    <motion.div
                      whileHover={{ y: -12, rotateY: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative h-full"
                      style={{ perspective: "1000px" }}
                    >
                      {/* Baseball card design */}
                      <div className="relative bg-[#fdfbf7] border-8 border-[#3a3f3e] shadow-[8px_8px_0px_rgba(161,74,58,0.3)] hover:shadow-[12px_12px_0px_rgba(161,74,58,0.4)] transition-all">
                        {/* Top banner with stat */}
                        <div className="bg-[#0a0e0d] p-4 border-b-4 border-[#a14a3a]">
                          <div className="flex justify-between items-center">
                            <div className="font-mono text-xs text-[#f4e409] tracking-widest">
                              {card.statLabel.toUpperCase()}
                            </div>
                            <div className="scoreboard-num text-3xl text-[#f4e409]">
                              {card.stat}
                            </div>
                          </div>
                        </div>

                        {/* Card content */}
                        <div className="p-6">
                          <h3 className="text-3xl font-display font-black mb-2 text-[#0f2818] tracking-tight">
                            {card.title}
                          </h3>
                          <p className="text-sm font-mono font-bold text-[#a14a3a] mb-4 tracking-wide">
                            {card.subtitle}
                          </p>
                          <p className="text-[#3a3f3e] leading-relaxed mb-6 font-serif text-sm">
                            {card.description}
                          </p>

                          {/* Bottom action */}
                          <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-[#d4cdc1]">
                            <span className="font-mono text-xs text-[#3a3f3e] tracking-wider">
                              LEARN MORE
                            </span>
                            <div className="w-8 h-8 bg-[#a14a3a] flex items-center justify-center group-hover:bg-[#c85a47] transition-colors">
                              <svg className="w-5 h-5 text-[#fdfbf7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Corner decoration */}
                        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#a14a3a]"></div>
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#a14a3a]"></div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Dugout Style */}
      <section className="relative bg-[#1a4d2e] py-32 px-4 overflow-hidden">
        {/* Field lines pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white"></div>
        </div>

        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(15,40,24,0.8)_100%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <div className="mb-10">
            <div className="inline-block px-6 py-2 bg-[#f4e409] mb-8">
              <span className="font-mono font-black text-[#0a0e0d] text-sm tracking-[0.3em]">
                STEP UP TO THE PLATE
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-[#f5f1e8] leading-tight">
              START YOUR<br/>
              <span className="text-[#f4e409] drop-shadow-[0_0_30px_rgba(244,228,9,0.5)]">
                ANALYTICS JOURNEY
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#e8e2d5] mb-12 max-w-3xl mx-auto font-serif leading-relaxed">
              Interactive quizzes. Real examples. Community discussions.<br/>
              Everything you need to master modern baseball analytics.
            </p>
          </div>

          <Link to="/war">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group relative inline-flex items-center px-12 py-6 bg-[#a14a3a] border-4 border-[#fdfbf7] shadow-[8px_8px_0px_rgba(244,228,9,0.4)] hover:shadow-[12px_12px_0px_rgba(244,228,9,0.6)] transition-all"
            >
              <span className="font-display font-black text-2xl text-[#fdfbf7] tracking-tight mr-4">
                BEGIN WITH WAR
              </span>
              <div className="w-10 h-10 bg-[#f4e409] flex items-center justify-center group-hover:animate-[float_1s_ease-in-out_infinite]">
                <svg className="w-6 h-6 text-[#0a0e0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.button>
          </Link>

          <p className="mt-8 font-mono text-sm text-[#a14a3a] tracking-wider">
            NO SIGNUP REQUIRED • FREE FOREVER
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
