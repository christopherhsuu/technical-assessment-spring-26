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
      <section className="relative bg-[#0f172a] text-[#f8fafc] py-32 px-4 overflow-hidden">
        {/* Animated baseball diamond pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`diamond-${i}`}
              initial={{ rotate: 45, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 45, scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="absolute w-32 h-32 border-2 border-[#22d3ee]"
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
              className="absolute font-mono font-bold text-2xl text-[#06b6d4]"
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
              className="w-8 bg-[#22d3ee]"
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
            <div className="px-6 py-3 bg-[#1e293b] border-2 border-[#22d3ee]">
              <span className="font-mono font-bold text-[#22d3ee] text-sm tracking-[0.2em]">UNDERSTANDING BASEBALL ANALYTICS</span>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.95] tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-[#f8fafc]"
            >
              SABERMETRICS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block text-[#22d3ee] mt-2"
            >
              MADE SIMPLE
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-[#e2e8f0] max-w-3xl mx-auto font-sans leading-relaxed"
          >
            New to baseball stats? No problem. Learn how numbers reveal the true story of player performance, with clear explanations and step-by-step examples.
          </motion.p>
        </motion.div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e293b] to-transparent"></div>
      </section>

      {/* Introduction: What IS Sabermetrics? */}
      <section className="bg-white py-20 px-4 border-b-4 border-[#22d3ee]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#3b82f6] border-2 border-[#0f172a] mb-6">
              <span className="font-mono text-xs text-white font-bold tracking-widest">WHAT IS SABERMETRICS?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 text-[#0f172a]">
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
            <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
              <p className="text-[#f8fafc] text-2xl font-sans leading-relaxed mb-0">
                Sabermetrics is <strong className="text-[#22d3ee]">"the search for objective knowledge about baseball"</strong> — a systematic
                approach to understanding the game through <strong className="text-[#06b6d4]">empirical research</strong> and
                <strong className="text-[#06b6d4]"> quantifiable evidence</strong> rather than tradition, gut feelings, or "the way it's always been done."
              </p>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-sans">
              At its core, sabermetrics asks fundamental questions: <em>What actually wins baseball games? Which skills matter most?
              How do we measure defensive value? Can we predict future performance?</em> Then it answers these questions with data,
              not hunches.
            </p>

            {/* Where the name comes from */}
            <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] p-6 my-8">
              <h3 className="font-display font-bold text-xl mb-3 text-[#0f172a]">Where Does the Name Come From?</h3>
              <p className="text-gray-700 font-sans mb-3">
                The term <strong>"sabermetrics"</strong> was coined by Bill James in the early 1980s, derived from <strong>SABR</strong>
                — the Society for American Baseball Research, founded in 1971. James pioneered the modern analytical movement with his
                annual <em>Baseball Abstract</em> publications, which challenged conventional wisdom about how to evaluate players.
              </p>
              <p className="text-gray-700 font-sans mb-0">
                Though the term is modern, the practice isn't new. Henry Chadwick published statistical lines in the 1860s,
                and Branch Rickey hired an internal statistician for the Brooklyn Dodgers in the 1940s. What changed in the 1970s-2000s
                was the <em>systematic, scientific</em> approach to answering baseball questions with data.
              </p>
            </div>

            <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6 my-8">
              <h3 className="font-display font-bold text-2xl mb-4 text-[#0f172a]">The Problem: Players Are Multifaceted</h3>
              <p className="text-gray-700 font-sans mb-4">
                Baseball players are incredibly complex. A single player might:
              </p>
              <ul className="space-y-2 text-gray-700 font-sans">
                <li>• Hit for power but strike out frequently</li>
                <li>• Get on base often with walks despite a low batting average</li>
                <li>• Play Gold Glove defense but contribute little offense</li>
                <li>• Excel at one position but struggle defensively at another</li>
                <li>• Perform differently in hitter-friendly vs. pitcher-friendly ballparks</li>
              </ul>
              <p className="text-gray-700 font-sans mt-4">
                <strong>How do you compare two players with completely different skill sets?</strong> How do you value a great-fielding shortstop
                with a .250 average against a poor-fielding first baseman hitting .300? Traditional stats can't answer this—they're too one-dimensional.
                Modern sabermetrics provides <em>nuanced, multifaceted ways</em> to describe and compare players across all their skills.
              </p>
            </div>

            {/* The Moneyball Revolution */}
            <h3 className="text-3xl font-display font-bold mb-6 mt-12 text-[#0f172a]">The Moneyball Revolution: From Fringe to Mainstream</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
              For decades, baseball decision-makers <strong>ignored</strong> sabermetrics. Scouts and executives relied on "the eye test,"
              traditional statistics, and conventional wisdom. Bill James's groundbreaking research was dismissed as the work of basement-dwelling
              number-crunchers who "didn't understand the game."
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
              Everything changed in <strong>2002</strong>. The Oakland Athletics, working with one of the smallest payrolls in baseball
              (about $40 million compared to the Yankees' $125 million), won <strong>103 games</strong> and made the playoffs. Their secret?
              GM Billy Beane and analyst Paul DePodesta used sabermetric principles to find <em>undervalued</em> players — guys who got on base
              frequently despite low batting averages, pitchers with excellent strikeout-to-walk ratios despite mediocre win-loss records.
            </p>

            <div className="bg-[#0f172a] border-4 border-[#3b82f6] p-8 my-8">
              <h4 className="font-display font-bold text-2xl mb-4 text-[#22d3ee]">The Oakland A's Discovery</h4>
              <p className="text-[#f8fafc] text-lg font-sans mb-4">
                The Athletics realized that <strong className="text-[#06b6d4]">on-base percentage</strong> (OBP) was vastly more important
                than batting average for scoring runs, yet the market <em>undervalued</em> it. Players with high OBP but low batting averages
                were cheap. They also discovered that traditional pitcher wins were nearly meaningless — what mattered was
                <strong className="text-[#06b6d4]"> strikeouts, walks, and home runs allowed</strong>.
              </p>
              <p className="text-[#e2e8f0] font-sans mb-0">
                By exploiting these market inefficiencies, Oakland competed with teams spending 3x more money. When Michael Lewis published
                <em className="text-[#22d3ee]"> Moneyball</em> in 2003, the cat was out of the bag.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
              The Boston Red Sox hired Bill James himself in 2003 and won two World Series titles by decade's end. The Chicago Cubs hired
              Theo Epstein (who learned from the Red Sox model) and ended their 108-year championship drought in 2016.
              <strong> Today, every single MLB team employs data analysts</strong>, and sabermetrics is no longer fringe — it's fundamental.
            </p>

            {/* Modern Sabermetrics */}
            <h3 className="text-3xl font-display font-bold mb-6 mt-12 text-[#0f172a]">Modern Sabermetrics: Beyond the Numbers</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
              Sabermetrics has evolved far beyond Bill James's original work. In 2015, MLB introduced <strong>Statcast</strong> — a system using
              high-speed cameras and radar to track every movement on the field. This measures pitch velocity, spin rates, exit velocity off the bat,
              sprint speed, arm strength, and even reaction time.
            </p>

            <div className="bg-[#f8fafc] border-l-4 border-[#3b82f6] p-6 my-8">
              <h3 className="font-display font-bold text-2xl mb-4 text-[#0f172a]">How Teams Use Sabermetrics Today</h3>
              <ul className="space-y-4 text-gray-700 font-sans">
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

            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
              The field now includes <strong>biomechanics</strong> (studying player movements), <strong>sports psychology</strong> (mental performance),
              and <strong>machine learning</strong> (predicting injuries, forecasting breakouts). What started as Bill James counting stats in his
              basement has become a multi-billion dollar industry reshaping how baseball is played, coached, and understood.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              This site breaks down the most important modern stats in plain language. No math degree required—just curiosity about what
              really makes players great. Let's dive in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story - Old vs New */}
      <section className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-[#0f172a]">
              Old Stats vs. New Stats
            </h2>
            <div className="w-32 h-1 bg-[#3b82f6] mx-auto mb-6"></div>
            <p className="text-xl text-[#4a5568] max-w-3xl mx-auto font-sans">
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
              className="bg-[#1e293b] p-8 md:p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl opacity-10">📊</div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-[#1e293b] mb-6">
                  <span className="font-mono text-sm tracking-wider text-[#22d3ee]">1871 - 2002</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-black mb-6 text-[#22d3ee]">
                  THE OLD GUARD
                </h3>

                <div className="space-y-5 text-base md:text-lg leading-relaxed font-sans">
                  <p>
                    For over 130 years, baseball evaluated players the same way: <strong>batting average, RBIs, and pitcher wins</strong>. These stats were easy to calculate with pencil and paper, and they told a simple story.
                  </p>
                  <p>
                    A .300 hitter was elite. 100 RBIs meant you drove in runs. 20 wins made you an ace. Scouts watched players with their eyes—looking for the "5 tools"—and trusted their decades of experience over any spreadsheet.
                  </p>
                  <p className="text-[#e2e8f0] italic">
                    The problem? These stats were <strong className="text-white not-italic">fundamentally flawed</strong>. Batting average treats a single the same as a home run. RBIs depend entirely on your teammates getting on base before you. Pitcher wins rely on run support and bullpen performance.
                  </p>
                  <p>
                    But tradition is powerful. "This is how we've always done it" was gospel. When Bill James started publishing his Baseball Abstract in 1977, introducing revolutionary concepts like OPS and Win Shares, most dismissed him as a stat nerd who'd never played the game.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#4a6fa5]">
                  <div className="font-mono text-sm text-[#94a3b8]">
                    <span className="text-[#3b82f6]">BATTING AVG</span> • <span className="text-[#3b82f6]">RBI</span> • <span className="text-[#3b82f6]">WINS</span>
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
              className="bg-[#0f172a] p-8 md:p-10 text-white relative overflow-hidden border-4 border-[#3b82f6]"
            >
              <div className="absolute top-4 right-4 text-6xl opacity-10">🚀</div>

              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-[#3b82f6] mb-6">
                  <span className="font-mono text-sm tracking-wider text-[#0f172a] font-bold">2003 - TODAY</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-black mb-6 text-[#22d3ee]">
                  THE REVOLUTION
                </h3>

                <div className="space-y-5 text-base md:text-lg leading-relaxed font-sans">
                  <p>
                    Everything changed when the <strong>2002 Oakland Athletics</strong> won 103 games with the third-lowest payroll in baseball. GM Billy Beane, working with advisor Paul DePodesta, didn't just use new stats—they <strong className="text-[#22d3ee]">exploited market inefficiencies</strong>.
                  </p>
                  <p>
                    While other teams overpaid for batting average and stolen bases, Oakland identified undervalued skills: <strong className="text-[#3b82f6]">on-base percentage</strong> and <strong className="text-[#3b82f6]">slugging</strong>. They realized a walk was almost as valuable as a single. They found that clutch hitting was a myth—performance in "pressure" situations was statistically random.
                  </p>
                  <p className="text-[#e2e8f0]">
                    The turning point? <em>Moneyball</em>, Michael Lewis's 2003 book, revealed Oakland's methods to the world. Within years, every team hired analytics departments. By 2015, the average MLB team employed more data scientists than scouts.
                  </p>
                  <p className="text-lg">
                    Today's front offices make <strong className="text-[#06b6d4]">$200+ million payroll decisions</strong> based on metrics like WAR (Wins Above Replacement), wOBA (weighted On-Base Average), and xwOBA (expected stats from Statcast). The eye test didn't disappear—but now it's supplemented by terabytes of data.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#1e293b]">
                  <div className="font-mono text-sm text-[#94a3b8]">
                    <span className="text-[#22d3ee]">WAR</span> • <span className="text-[#22d3ee]">wOBA</span> • <span className="text-[#22d3ee]">FIP</span> • <span className="text-[#22d3ee]">xwOBA</span> • <span className="text-[#22d3ee]">DRS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Grid - Modern Cards */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-[#0f172a]">
                Learn the Basics
              </h2>
              <div className="w-24 h-1 bg-[#22d3ee] mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-sans">
                Each stat is explained step-by-step with clean visuals and examples
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topicCards.map((card, index) => (
                <motion.div
                  key={card.path}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                >
                  <Link to={card.path}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      whileTap={{ scale: 0.98 }}
                      className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-xs font-mono font-semibold text-[#06b6d4] tracking-[0.2em] uppercase">
                            {card.subtitle}
                          </p>
                          <h3 className="text-2xl font-display font-bold text-[#0f172a] mt-2">
                            {card.title}
                          </h3>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-[#ecfdf3] border border-[#d1fae5] text-[#10b981] flex items-center justify-center font-mono text-xs">
                          →
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-6 font-sans text-sm">
                        {card.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="font-mono text-xs text-[#06b6d4] tracking-[0.18em]">
                          {card.statLabel.toUpperCase()}
                        </span>
                        <span className="font-mono text-xs text-[#94a3b8]">
                          {card.stat}
                        </span>
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
      <section className="relative bg-[#0f172a] py-32 px-4 overflow-hidden">
        {/* Chart grid background */}
        <div className="absolute inset-0 opacity-[0.02]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#06b6d4]" style={{ top: `${i * 16.67}%` }}></div>
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
            <div className="inline-block px-6 py-2 bg-[#3b82f6] mb-8">
              <span className="font-mono font-black text-[#0f172a] text-sm tracking-[0.3em]">
                START LEARNING
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-[#f8fafc] leading-tight">
              READY TO<br/>
              <span className="text-[#22d3ee]">
                GET STARTED?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#e2e8f0] mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
              No baseball knowledge required. Learn at your own pace with interactive quizzes and real examples.
            </p>
          </div>

          <Link to="/war">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="group relative inline-flex items-center px-12 py-6 bg-[#3b82f6] border-4 border-[#22d3ee] shadow-[8px_8px_0px_rgba(255,210,63,0.3)] hover:shadow-[12px_12px_0px_rgba(255,210,63,0.5)] transition-all"
            >
              <span className="font-display font-black text-2xl text-white tracking-tight mr-4">
                BEGIN WITH WAR
              </span>
              <div className="w-10 h-10 bg-[#22d3ee] flex items-center justify-center group-hover:animate-[float_1s_ease-in-out_infinite]">
                <svg className="w-6 h-6 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
