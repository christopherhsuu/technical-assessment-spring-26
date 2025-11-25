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
      icon: '⭐',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      path: '/offense',
      title: 'Offensive Metrics',
      subtitle: 'wOBA & wRC+',
      description: 'Why batting average doesn\'t tell the whole story',
      icon: '🏏',
      color: 'from-blue-400 to-blue-600',
    },
    {
      path: '/pitching',
      title: 'Pitching Metrics',
      subtitle: 'FIP & xFIP',
      description: 'Predicting future performance better than ERA',
      icon: '⚡',
      color: 'from-red-400 to-pink-600',
    },
    {
      path: '/defense',
      title: 'Defensive Metrics',
      subtitle: 'DRS, UZR & OAA',
      description: 'Measuring defense beyond errors',
      icon: '🛡️',
      color: 'from-green-400 to-green-600',
    },
    {
      path: '/statcast',
      title: 'Statcast Revolution',
      subtitle: 'Exit Velo & Launch Angle',
      description: 'The cutting edge of baseball analytics',
      icon: '🚀',
      color: 'from-purple-400 to-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-baseball-green via-green-700 to-green-900 text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-7xl mb-6"
          >
            ⚾
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            The Sabermetrics Revolution
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-green-100">
            Beyond Batting Average: Modern Baseball Analytics
          </p>

          <p className="text-lg text-green-200 max-w-3xl mx-auto">
            Welcome to your comprehensive guide to advanced baseball statistics.
            Learn why traditional stats like batting average and ERA don't tell the full story,
            and discover the metrics that MLB teams actually use to evaluate players.
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
            The Problem with Traditional Stats
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              For over a century, baseball fans evaluated players using simple statistics:
              batting average for hitters, ERA for pitchers, and errors for fielders.
              These stats are easy to understand but have a critical flaw - <strong>they don't
              actually measure what matters most: winning games</strong>.
            </p>

            <p>
              The <strong>sabermetrics revolution</strong>, popularized by the 2003 book
              "Moneyball" and the Oakland Athletics, changed everything. By using advanced
              statistics and data analysis, teams discovered that many traditional beliefs
              about baseball were wrong.
            </p>

            <div className="bg-baseball-green bg-opacity-10 border-l-4 border-baseball-green p-6 rounded my-8">
              <h3 className="font-display font-bold text-lg mb-2 text-baseball-green">
                💡 Key Insight
              </h3>
              <p className="text-gray-800 mb-0">
                A player with a .250 batting average might actually be more valuable than
                one hitting .300. A pitcher with a 3.50 ERA could be worse than one with a 4.00 ERA.
                Defensive players who make zero errors might cost their team more runs than
                "error-prone" players. <strong>Modern statistics reveal the truth</strong>.
              </p>
            </div>

            <p>
              Today, every MLB team employs data scientists and analysts. They use
              advanced metrics to evaluate players, make lineup decisions, and inform
              multi-million dollar contracts. Understanding these statistics gives you
              a deeper appreciation of the game and lets you evaluate players like the pros do.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Topics Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-display font-bold mb-4 text-gray-900 text-center">
            Explore Advanced Metrics
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Click any topic below to dive deep into the statistics that changed baseball forever
          </p>

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
                    whileHover={{ scale: 1.05, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow h-full"
                  >
                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                      <div className="text-5xl mb-3">{card.icon}</div>
                      <h3 className="text-2xl font-display font-bold mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm opacity-90">{card.subtitle}</p>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <p className="text-gray-700">{card.description}</p>

                      <div className="mt-4 flex items-center text-baseball-green font-semibold">
                        Learn More
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
      <section className="bg-gray-50 py-16 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-display font-bold mb-4 text-gray-900">
            Ready to Think Like an Analyst?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Each page includes interactive quizzes to test your knowledge and
            a discussion section to share your thoughts. Let's dive in!
          </p>

          <Link
            to="/war"
            className="inline-block px-8 py-4 bg-baseball-green text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Start with WAR →
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
