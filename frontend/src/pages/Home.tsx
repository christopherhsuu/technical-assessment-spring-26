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
      {/* Hero Section - Data Visualization Theme */}
      <section className="relative bg-[#0a1628] text-[#f5f1e8] py-32 px-4 overflow-hidden">
        {/* Animated chart grid lines - subtle data viz aesthetic */}
        <div className="absolute inset-0 opacity-[0.03]">
          {/* Horizontal lines */}
          {[...Array(8)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#00d9ff]" style={{ top: `${i * 12.5}%` }}></div>
          ))}
          {/* Vertical lines */}
          {[...Array(12)].map((_, i) => (
            <div key={`v-${i}`} className="absolute top-0 bottom-0 w-px bg-[#00d9ff]" style={{ left: `${i * 8.33}%` }}></div>
          ))}
        </div>

        {/* Data points - representing key stats */}
        <div className="absolute inset-0">
          {/* WAR stat point */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-[20%] left-[15%] w-3 h-3 bg-[#ffd23f] rounded-full shadow-[0_0_20px_rgba(255,210,63,0.6)]"
          ></motion.div>
          {/* wOBA stat point */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-[35%] right-[25%] w-3 h-3 bg-[#ff6b35] rounded-full shadow-[0_0_20px_rgba(255,107,53,0.6)]"
          ></motion.div>
          {/* FIP stat point */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-[30%] left-[70%] w-3 h-3 bg-[#00d9ff] rounded-full shadow-[0_0_20px_rgba(0,217,255,0.6)]"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            className="inline-block mb-8"
          >
            <div className="px-6 py-3 bg-[#1a2a47] border-2 border-[#ffd23f]">
              <span className="font-mono font-bold text-[#ffd23f] text-sm tracking-[0.2em]">SABERMETRICS • 1971-PRESENT</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.95] tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-[#f5f1e8]"
            >
              THE DATA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block text-[#ff6b35] mt-2"
            >
              REVOLUTION
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-[#cbd5e0] max-w-3xl mx-auto font-serif leading-relaxed"
          >
            How advanced statistics transformed baseball from gut feelings to evidence-based decisions worth hundreds of millions
          </motion.p>

          {/* Key Stats - Relevant to sabermetrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center gap-8 md:gap-16 flex-wrap"
          >
            {[
              { num: '.366', label: 'TED WILLIAMS OBP', desc: 'The stat that started it all' },
              { num: '10.5', label: 'MIKE TROUT WAR', desc: '2012-2019 average' },
              { num: '$8M', label: 'PER WIN', desc: 'Free agent market value' },
            ].map((item, i) => (
              <div key={i} className="text-center max-w-[200px]">
                <div className="scoreboard-num text-4xl md:text-5xl text-[#ffd23f] mb-2">
                  {item.num}
                </div>
                <div className="font-mono text-xs text-[#ff6b35] tracking-widest mb-1">
                  {item.label}
                </div>
                <div className="font-serif text-xs text-[#94a3b8] italic">
                  {item.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a2a47] to-transparent"></div>
      </section>

      {/* The Story - Old vs New */}
      <section className="bg-gradient-to-br from-[#f5f1e8] to-[#e8e2d5] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-[#0a1628]">
              The Paradigm Shift
            </h2>
            <div className="w-32 h-1 bg-[#ff6b35] mx-auto mb-6"></div>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto font-serif italic">
              How baseball went from tradition to analytics—and why it took so long
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* OLD WAY */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#2d4a7c] p-8 md:p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl opacity-10">📊</div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-[#1a2a47] mb-6">
                  <span className="font-mono text-sm tracking-wider text-[#ffd23f]">1871 - 2002</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-black mb-6 text-[#ffd23f]">
                  THE OLD GUARD
                </h3>

                <div className="space-y-5 text-base md:text-lg leading-relaxed font-serif">
                  <p>
                    For over 130 years, baseball evaluated players the same way: <strong>batting average, RBIs, and pitcher wins</strong>. These stats were easy to calculate with pencil and paper, and they told a simple story.
                  </p>
                  <p>
                    A .300 hitter was elite. 100 RBIs meant you drove in runs. 20 wins made you an ace. Scouts watched players with their eyes—looking for the "5 tools"—and trusted their decades of experience over any spreadsheet.
                  </p>
                  <p className="text-[#cbd5e0] italic">
                    The problem? These stats were <strong className="text-white not-italic">fundamentally flawed</strong>. Batting average treats a single the same as a home run. RBIs depend entirely on your teammates getting on base before you. Pitcher wins rely on run support and bullpen performance.
                  </p>
                  <p>
                    But tradition is powerful. "This is how we've always done it" was gospel. When Bill James started publishing his Baseball Abstract in 1977, introducing revolutionary concepts like OPS and Win Shares, most dismissed him as a stat nerd who'd never played the game.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#4a6fa5]">
                  <div className="font-mono text-sm text-[#94a3b8]">
                    <span className="text-[#ff6b35]">BATTING AVG</span> • <span className="text-[#ff6b35]">RBI</span> • <span className="text-[#ff6b35]">WINS</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* NEW WAY */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0a1628] p-8 md:p-10 text-white relative overflow-hidden border-4 border-[#ff6b35]"
            >
              <div className="absolute top-4 right-4 text-6xl opacity-10">🚀</div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-[#ff6b35] mb-6">
                  <span className="font-mono text-sm tracking-wider text-[#0a1628] font-bold">2003 - TODAY</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-black mb-6 text-[#ffd23f]">
                  THE REVOLUTION
                </h3>

                <div className="space-y-5 text-base md:text-lg leading-relaxed font-serif">
                  <p>
                    Everything changed when the <strong>2002 Oakland Athletics</strong> won 103 games with the third-lowest payroll in baseball. GM Billy Beane, working with advisor Paul DePodesta, didn't just use new stats—they <strong className="text-[#ffd23f]">exploited market inefficiencies</strong>.
                  </p>
                  <p>
                    While other teams overpaid for batting average and stolen bases, Oakland identified undervalued skills: <strong className="text-[#ff6b35]">on-base percentage</strong> and <strong className="text-[#ff6b35]">slugging</strong>. They realized a walk was almost as valuable as a single. They found that clutch hitting was a myth—performance in "pressure" situations was statistically random.
                  </p>
                  <p className="text-[#cbd5e0]">
                    The turning point? <em>Moneyball</em>, Michael Lewis's 2003 book, revealed Oakland's methods to the world. Within years, every team hired analytics departments. By 2015, the average MLB team employed more data scientists than scouts.
                  </p>
                  <p className="text-lg">
                    Today's front offices make <strong className="text-[#00d9ff]">$200+ million payroll decisions</strong> based on metrics like WAR (Wins Above Replacement), wOBA (weighted On-Base Average), and xwOBA (expected stats from Statcast). The eye test didn't disappear—but now it's supplemented by terabytes of data.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1a2a47]">
                  <div className="font-mono text-sm text-[#94a3b8]">
                    <span className="text-[#ffd23f]">WAR</span> • <span className="text-[#ffd23f]">wOBA</span> • <span className="text-[#ffd23f]">FIP</span> • <span className="text-[#ffd23f]">xwOBA</span> • <span className="text-[#ffd23f]">DRS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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

      {/* Call to Action */}
      <section className="relative bg-[#0a1628] py-32 px-4 overflow-hidden">
        {/* Chart grid background */}
        <div className="absolute inset-0 opacity-[0.02]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#00d9ff]" style={{ top: `${i * 16.67}%` }}></div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <div className="mb-10">
            <div className="inline-block px-6 py-2 bg-[#ff6b35] mb-8">
              <span className="font-mono font-black text-[#0a1628] text-sm tracking-[0.3em]">
                START LEARNING
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-[#f5f1e8] leading-tight">
              MASTER THE<br/>
              <span className="text-[#ffd23f]">
                NUMBERS GAME
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#cbd5e0] mb-12 max-w-3xl mx-auto font-serif leading-relaxed">
              Interactive quizzes. Real examples. Community discussions.<br/>
              Everything you need to think like an MLB front office.
            </p>
          </div>

          <Link to="/war">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group relative inline-flex items-center px-12 py-6 bg-[#ff6b35] border-4 border-[#ffd23f] shadow-[8px_8px_0px_rgba(255,210,63,0.3)] hover:shadow-[12px_12px_0px_rgba(255,210,63,0.5)] transition-all"
            >
              <span className="font-display font-black text-2xl text-white tracking-tight mr-4">
                BEGIN WITH WAR
              </span>
              <div className="w-10 h-10 bg-[#ffd23f] flex items-center justify-center group-hover:animate-[float_1s_ease-in-out_infinite]">
                <svg className="w-6 h-6 text-[#0a1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.button>
          </Link>

          <p className="mt-8 font-mono text-sm text-[#ff6b35] tracking-wider">
            NO SIGNUP REQUIRED • FREE FOREVER
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
