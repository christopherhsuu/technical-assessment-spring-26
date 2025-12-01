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
      description: 'Combines hitting, fielding, and baserunning into one number that shows total player value',
      stat: 'What is WAR?',
      statLabel: 'Start Here',
    },
    {
      path: '/offense',
      title: 'Hitting Stats',
      subtitle: 'wOBA & wRC+',
      description: 'Learn why a walk can be as valuable as a hit, and why batting average is misleading',
      stat: 'Better than AVG',
      statLabel: 'Hitting Explained',
    },
    {
      path: '/pitching',
      title: 'Pitching Stats',
      subtitle: 'FIP & xFIP',
      description: 'Understand what pitchers actually control and how to predict future performance',
      stat: 'Beyond ERA',
      statLabel: 'Pitching Explained',
    },
    {
      path: '/defense',
      title: 'Fielding Stats',
      subtitle: 'DRS, UZR & OAA',
      description: 'Discover how modern stats measure defensive range and value, not just errors',
      stat: 'Beyond Errors',
      statLabel: 'Defense Explained',
    },
    {
      path: '/statcast',
      title: 'Statcast Data',
      subtitle: 'Exit Velo & Launch Angle',
      description: 'See how cameras and radar track every movement on the field to measure performance',
      stat: 'Camera Tech',
      statLabel: 'Technology Explained',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced Visual Design */}
      <section className="relative bg-[#0a1628] text-[#f5f1e8] py-32 px-4 overflow-hidden">
        {/* Animated baseball diamond pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`diamond-${i}`}
              initial={{ rotate: 45, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 45, scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="absolute w-32 h-32 border-2 border-[#ffd23f]"
              style={{
                top: `${15 + i * 20}%`,
                left: `${5 + i * 15}%`,
              }}
            ></motion.div>
          ))}
        </div>

        {/* Floating stat symbols */}
        <div className="absolute inset-0">
          {[
            { symbol: 'WAR', top: '15%', left: '10%', delay: 0.5 },
            { symbol: 'wOBA', top: '25%', right: '15%', delay: 0.7 },
            { symbol: 'FIP', top: '60%', left: '85%', delay: 0.9 },
            { symbol: 'OPS+', top: '70%', left: '12%', delay: 1.1 },
            { symbol: 'wRC+', top: '40%', right: '8%', delay: 1.3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                y: [0, -10, 0]
              }}
              transition={{
                delay: item.delay,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute font-mono font-bold text-2xl text-[#00d9ff]"
              style={{ top: item.top, left: item.left, right: item.right }}
            >
              {item.symbol}
            </motion.div>
          ))}
        </div>

        {/* Chart bars in background */}
        <div className="absolute inset-0 flex items-end justify-center gap-8 opacity-[0.05] pb-20">
          {[60, 80, 95, 70, 85, 75, 90].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              className="w-8 bg-[#ffd23f]"
            ></motion.div>
          ))}
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
              <span className="font-mono font-bold text-[#ffd23f] text-sm tracking-[0.2em]">UNDERSTANDING BASEBALL ANALYTICS</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.95] tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-[#f5f1e8]"
            >
              SABERMETRICS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block text-[#ffd23f] mt-2"
            >
              MADE SIMPLE
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-[#cbd5e0] max-w-3xl mx-auto font-serif leading-relaxed"
          >
            New to baseball stats? No problem. Learn how numbers reveal the true story of player performance, with clear explanations and step-by-step examples.
          </motion.p>
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a2a47] to-transparent"></div>
      </section>

      {/* Introduction: What IS Sabermetrics? */}
      <section className="bg-white py-20 px-4 border-b-4 border-[#ffd23f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#ff6b35] border-2 border-[#0a1628] mb-6">
              <span className="font-mono text-xs text-white font-bold tracking-widest">WHAT IS SABERMETRICS?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 text-[#0a1628]">
              The Search for Objective Knowledge About Baseball
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Definition */}
            <div className="bg-[#0a1628] border-4 border-[#ffd23f] p-8 my-8">
              <p className="text-[#f5f1e8] text-2xl font-serif leading-relaxed mb-0">
                Sabermetrics is <strong className="text-[#ffd23f]">"the search for objective knowledge about baseball"</strong> — a systematic
                approach to understanding the game through <strong className="text-[#00d9ff]">empirical research</strong> and
                <strong className="text-[#00d9ff]"> quantifiable evidence</strong> rather than tradition, gut feelings, or "the way it's always been done."
              </p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-serif">
              At its core, sabermetrics asks fundamental questions: <em>What actually wins baseball games? Which skills matter most?
              How do we measure defensive value? Can we predict future performance?</em> Then it answers these questions with data,
              not hunches.
            </p>

            {/* Where the name comes from */}
            <div className="bg-[#fef5e7] border-2 border-[#e8e2d5] p-6 my-8">
              <h3 className="font-display font-bold text-xl mb-3 text-[#0a1628]">Where Does the Name Come From?</h3>
              <p className="text-gray-700 font-serif mb-3">
                The term <strong>"sabermetrics"</strong> was coined by Bill James in the early 1980s, derived from <strong>SABR</strong>
                — the Society for American Baseball Research, founded in 1971. James pioneered the modern analytical movement with his
                annual <em>Baseball Abstract</em> publications, which challenged conventional wisdom about how to evaluate players.
              </p>
              <p className="text-gray-700 font-serif mb-0">
                Though the term is modern, the practice isn't new. Henry Chadwick published statistical lines in the 1860s,
                and Branch Rickey hired an internal statistician for the Brooklyn Dodgers in the 1940s. What changed in the 1970s-2000s
                was the <em>systematic, scientific</em> approach to answering baseball questions with data.
              </p>
            </div>

            <div className="bg-[#f0fff4] border-l-4 border-[#00d9ff] p-6 my-8">
              <h3 className="font-display font-bold text-2xl mb-4 text-[#0a1628]">The Problem: Players Are Multifaceted</h3>
              <p className="text-gray-700 font-serif mb-4">
                Baseball players are incredibly complex. A single player might:
              </p>
              <ul className="space-y-2 text-gray-700 font-serif">
                <li>• Hit for power but strike out frequently</li>
                <li>• Get on base often with walks despite a low batting average</li>
                <li>• Play Gold Glove defense but contribute little offense</li>
                <li>• Excel at one position but struggle defensively at another</li>
                <li>• Perform differently in hitter-friendly vs. pitcher-friendly ballparks</li>
              </ul>
              <p className="text-gray-700 font-serif mt-4">
                <strong>How do you compare two players with completely different skill sets?</strong> How do you value a great-fielding shortstop
                with a .250 average against a poor-fielding first baseman hitting .300? Traditional stats can't answer this—they're too one-dimensional.
                Modern sabermetrics provides <em>nuanced, multifaceted ways</em> to describe and compare players across all their skills.
              </p>
            </div>

            {/* The Moneyball Revolution */}
            <h3 className="text-3xl font-display font-bold mb-6 mt-12 text-[#0a1628]">The Moneyball Revolution: From Fringe to Mainstream</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
              For decades, baseball decision-makers <strong>ignored</strong> sabermetrics. Scouts and executives relied on "the eye test,"
              traditional statistics, and conventional wisdom. Bill James's groundbreaking research was dismissed as the work of basement-dwelling
              number-crunchers who "didn't understand the game."
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
              Everything changed in <strong>2002</strong>. The Oakland Athletics, working with one of the smallest payrolls in baseball
              (about $40 million compared to the Yankees' $125 million), won <strong>103 games</strong> and made the playoffs. Their secret?
              GM Billy Beane and analyst Paul DePodesta used sabermetric principles to find <em>undervalued</em> players — guys who got on base
              frequently despite low batting averages, pitchers with excellent strikeout-to-walk ratios despite mediocre win-loss records.
            </p>

            <div className="bg-[#0a1628] border-4 border-[#ff6b35] p-8 my-8">
              <h4 className="font-display font-bold text-2xl mb-4 text-[#ffd23f]">The Oakland A's Discovery</h4>
              <p className="text-[#f5f1e8] text-lg font-serif mb-4">
                The Athletics realized that <strong className="text-[#00d9ff]">on-base percentage</strong> (OBP) was vastly more important
                than batting average for scoring runs, yet the market <em>undervalued</em> it. Players with high OBP but low batting averages
                were cheap. They also discovered that traditional pitcher wins were nearly meaningless — what mattered was
                <strong className="text-[#00d9ff]"> strikeouts, walks, and home runs allowed</strong>.
              </p>
              <p className="text-[#cbd5e0] font-serif mb-0">
                By exploiting these market inefficiencies, Oakland competed with teams spending 3x more money. When Michael Lewis published
                <em className="text-[#ffd23f]"> Moneyball</em> in 2003, the cat was out of the bag.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
              The Boston Red Sox hired Bill James himself in 2003 and won two World Series titles by decade's end. The Chicago Cubs hired
              Theo Epstein (who learned from the Red Sox model) and ended their 108-year championship drought in 2016.
              <strong> Today, every single MLB team employs data analysts</strong>, and sabermetrics is no longer fringe — it's fundamental.
            </p>

            {/* Modern Sabermetrics */}
            <h3 className="text-3xl font-display font-bold mb-6 mt-12 text-[#0a1628]">Modern Sabermetrics: Beyond the Numbers</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
              Sabermetrics has evolved far beyond Bill James's original work. In 2015, MLB introduced <strong>Statcast</strong> — a system using
              high-speed cameras and radar to track every movement on the field. This measures pitch velocity, spin rates, exit velocity off the bat,
              sprint speed, arm strength, and even reaction time.
            </p>

            <div className="bg-[#fef5e7] border-l-4 border-[#ff6b35] p-6 my-8">
              <h3 className="font-display font-bold text-2xl mb-4 text-[#0a1628]">How Teams Use Sabermetrics Today</h3>
              <ul className="space-y-4 text-gray-700 font-serif">
                <li>
                  <strong>Player Acquisition:</strong> Identify undervalued free agents, trade targets, and draft prospects based on advanced metrics
                  rather than traditional scouting alone. Teams look for players whose skills don't show up in traditional stats.
                </li>
                <li>
                  <strong>Player Development:</strong> Use biomechanical data and Statcast metrics to optimize swings, pitching mechanics, and
                  defensive positioning. Pitchers can see exactly how their spin rate compares to elite arms and adjust accordingly.
                </li>
                <li>
                  <strong>In-Game Strategy:</strong> Deploy defensive shifts based on batted ball data. Decide when to bunt, steal bases, or
                  intentionally walk batters using win probability models. Everything is quantified.
                </li>
                <li>
                  <strong>Predicting Performance:</strong> Separate lucky seasons from sustainable talent using metrics like FIP (Fielding Independent
                  Pitching) and xwOBA (expected weighted on-base average). This helps avoid overpaying aging players or selling low on breakout candidates.
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
              The field now includes <strong>biomechanics</strong> (studying player movements), <strong>sports psychology</strong> (mental performance),
              and <strong>machine learning</strong> (predicting injuries, forecasting breakouts). What started as Bill James counting stats in his
              basement has become a multi-billion dollar industry reshaping how baseball is played, coached, and understood.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              This site breaks down the most important modern stats in plain language. No math degree required—just curiosity about what
              really makes players great. Let's dive in.
            </p>
          </motion.div>
        </div>
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
              Old Stats vs. New Stats
            </h2>
            <div className="w-32 h-1 bg-[#ff6b35] mx-auto mb-6"></div>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto font-serif">
              Understanding why baseball changed how it measures player performance
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
                Learn the Basics
              </h2>
              <div className="w-32 h-1 bg-[#a14a3a] mx-auto mb-6"></div>
              <p className="text-xl text-[#3a3f3e] max-w-2xl mx-auto font-serif">
                Each stat is explained step-by-step with examples and calculations
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
              READY TO<br/>
              <span className="text-[#ffd23f]">
                GET STARTED?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#cbd5e0] mb-12 max-w-3xl mx-auto font-serif leading-relaxed">
              No baseball knowledge required. Learn at your own pace with interactive quizzes and real examples.
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
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
