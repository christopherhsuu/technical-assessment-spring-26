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
      color: 'from-amber-500 to-orange-600',
    },
    {
      path: '/offense',
      title: 'Offensive Metrics',
      subtitle: 'wOBA & wRC+',
      description: 'Why batting average doesn\'t tell the whole story',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      path: '/pitching',
      title: 'Pitching Metrics',
      subtitle: 'FIP & xFIP',
      description: 'Predicting future performance better than ERA',
      color: 'from-rose-500 to-pink-600',
    },
    {
      path: '/defense',
      title: 'Defensive Metrics',
      subtitle: 'DRS, UZR & OAA',
      description: 'Measuring defense beyond errors',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      path: '/statcast',
      title: 'Statcast Revolution',
      subtitle: 'Exit Velo & Launch Angle',
      description: 'The cutting edge of baseball analytics',
      color: 'from-violet-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full backdrop-blur-sm">
              <span className="text-teal-300 font-medium text-sm">Advanced Baseball Analytics</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Master Baseball Analytics
            <span className="block mt-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Like the Pros
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Learn the advanced metrics that MLB teams use to evaluate players and make million-dollar decisions
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">
              Why Traditional Stats Fall Short
            </h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                For over a century, baseball relied on simple stats: batting average, ERA, and errors.
                But these metrics have a critical flaw — <strong className="text-slate-900">they don't measure what actually wins games</strong>.
              </p>
              <p>
                The analytics revolution, popularized by "Moneyball," changed everything. Teams discovered
                that a .250 hitter could be more valuable than a .300 hitter, and that defensive "errors"
                tell almost nothing about true defensive ability.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 p-8 rounded-2xl shadow-sm">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-teal-900">
                  The New Standard
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Today, every MLB team employs data scientists who use advanced metrics to
                  evaluate players, inform million-dollar contracts, and optimize game strategy.
                  Learn to think like them.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Topics Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20 bg-slate-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-slate-900">
              Explore the Metrics
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Dive deep into the statistics that revolutionized baseball
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicCards.map((card, index) => (
              <motion.div
                key={card.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link to={card.path}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-teal-300 transition-all h-full"
                  >
                    {/* Gradient Bar */}
                    <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>

                    {/* Card Body */}
                    <div className="p-8">
                      <h3 className="text-2xl font-display font-bold mb-2 text-slate-900">
                        {card.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 mb-4">{card.subtitle}</p>
                      <p className="text-slate-600 leading-relaxed mb-6">{card.description}</p>

                      <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-1 transition-transform">
                        Learn More
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-600 py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Each page includes interactive quizzes and discussions. Master the metrics that define modern baseball.
          </p>

          <Link
            to="/war"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-700 text-lg font-bold rounded-xl hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Learning
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
