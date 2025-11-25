// WAR (Wins Above Replacement) Page
// Explains what WAR is, its components, and how to interpret it
// Includes quiz and comments section

import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import StatCard from '../components/StatCard';

const WAR: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-6xl mb-4">⭐</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            WAR: Wins Above Replacement
          </h1>
          <p className="text-xl text-yellow-100">
            The ultimate all-in-one metric for measuring total player value
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              What is WAR?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>WAR (Wins Above Replacement)</strong> is baseball's most comprehensive statistic.
              It attempts to answer one simple question: <em>How many more wins is this player worth
              compared to a replacement-level player?</em>
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              A "replacement player" is defined as a minor league player who could be called up at any time -
              essentially a freely available talent. Think of WAR as measuring how much better a player is
              than the minimum viable option.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg my-6">
              <h3 className="font-display font-bold text-lg mb-2 text-yellow-800">
                📊 Example
              </h3>
              <p className="text-gray-800 mb-2">
                Mike Trout averaged 8.5 WAR per season from 2012-2019. This means he was worth
                approximately <strong>8.5 more wins per year</strong> than a replacement-level player.
                Over that 8-year span, he was worth about 68 wins to his team!
              </p>
              <p className="text-gray-700 text-sm italic mb-0">
                At a rough estimate of $8-10 million per win on the free agent market, Trout was
                providing $80+ million in value annually.
              </p>
            </div>
          </section>

          {/* Components */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Breaking Down WAR: The Components
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              WAR isn't just one stat - it's a comprehensive formula that combines multiple aspects
              of player performance. Here's what goes into calculating WAR:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <StatCard
                title="Batting"
                value="40-50%"
                description="Offensive production: hits, walks, home runs, etc."
                icon="🏏"
                color="blue"
              />
              <StatCard
                title="Baserunning"
                value="5-10%"
                description="Stolen bases, taking extra bases, avoiding double plays"
                icon="🏃"
                color="green"
              />
              <StatCard
                title="Fielding"
                value="20-30%"
                description="Defensive plays, range, and preventing runs"
                icon="🛡️"
                color="gray"
              />
              <StatCard
                title="Positional Adjustment"
                value="10-20%"
                description="Harder positions (catcher, shortstop) get extra credit"
                icon="📍"
                color="red"
              />
            </div>

            <p className="text-gray-700 leading-relaxed">
              All of these components are converted into <strong>runs</strong>, then divided by
              approximately 10 (since historically, 10 runs ≈ 1 win). Finally, a baseline is added
              to account for replacement level.
            </p>
          </section>

          {/* Interpreting WAR */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              The WAR Scale: What Do the Numbers Mean?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike batting average or ERA, WAR can be confusing at first. Here's a rough guide
              to interpreting WAR values for a full season:
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-display font-bold">WAR</th>
                    <th className="text-left py-3 font-display font-bold">Player Level</th>
                    <th className="text-left py-3 font-display font-bold">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 font-semibold text-red-600">0-1</td>
                    <td className="py-3">Replacement Level</td>
                    <td className="py-3 text-sm text-gray-600">Bench players, struggling starters</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">1-2</td>
                    <td className="py-3">Role Player</td>
                    <td className="py-3 text-sm text-gray-600">Useful bench piece, spot starter</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">2-3</td>
                    <td className="py-3">Solid Starter</td>
                    <td className="py-3 text-sm text-gray-600">Everyday player, good contributor</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-blue-600">3-4</td>
                    <td className="py-3">Good Player</td>
                    <td className="py-3 text-sm text-gray-600">Above average, valuable starter</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-green-600">4-6</td>
                    <td className="py-3">All-Star</td>
                    <td className="py-3 text-sm text-gray-600">Elite player, team cornerstone</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-yellow-600">6-8</td>
                    <td className="py-3">Superstar</td>
                    <td className="py-3 text-sm text-gray-600">MVP candidate, franchise player</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-purple-600">8+</td>
                    <td className="py-3">MVP/HOF Season</td>
                    <td className="py-3 text-sm text-gray-600">Historic performance, rare</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Real Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Real Player Example: Why WAR Matters
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Let's compare two hypothetical players from the 2023 season:
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h4 className="font-bold text-lg mb-4">Player A vs Player B</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="font-bold text-2xl text-gray-900">Player A</div>
                  <div className="text-gray-600 mt-2">
                    <div>.290 AVG</div>
                    <div>25 HR</div>
                    <div>95 RBI</div>
                    <div className="mt-2 text-sm text-gray-500">Traditional stats look great</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded">
                  <div className="font-bold text-2xl text-gray-900">Player B</div>
                  <div className="text-gray-600 mt-2">
                    <div>.265 AVG</div>
                    <div>22 HR</div>
                    <div>80 RBI</div>
                    <div className="mt-2 text-sm text-gray-500">Looks slightly worse</div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-4">
                <h5 className="font-bold mb-2">But check their WAR:</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded border-2 border-red-300">
                    <div className="text-3xl font-bold text-red-600">2.1 WAR</div>
                    <div className="text-sm text-gray-600 mt-1">Player A: Poor defense, slow on bases</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded border-2 border-green-500">
                    <div className="text-3xl font-bold text-green-600">5.2 WAR</div>
                    <div className="text-sm text-gray-600 mt-1">Player B: Gold Glove defense, plays premium position</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-4 text-sm">
                Player B is actually <strong>3.1 wins more valuable</strong> despite "worse" traditional stats.
                This is because WAR accounts for defense, baserunning, and positional value - not just hitting.
              </p>
            </div>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              WAR's Limitations
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              While WAR is incredibly useful, it's important to understand it's not perfect:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Different calculations exist</strong>: FanGraphs WAR (fWAR) and Baseball-Reference WAR (bWAR) use slightly different formulas, especially for pitchers and defense</li>
              <li><strong>Margin of error</strong>: A difference of 0.5-1.0 WAR isn't really significant - players that close are essentially equivalent</li>
              <li><strong>Context matters</strong>: WAR is park-adjusted and league-adjusted, but it doesn't account for clutch performance or team context</li>
              <li><strong>Defensive metrics are imperfect</strong>: Defense is harder to measure than offense, so defensive WAR has more uncertainty</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Despite these limitations, WAR remains the best single number for comparing players across
              positions and eras. It's an excellent starting point for analysis - just don't treat it as gospel.
            </p>
          </section>
        </motion.div>

        {/* Quiz */}
        <Quiz
          quizId="war"
          question="A player with 5.0 WAR is considered:"
          options={[
            'Below Average',
            'Average',
            'All-Star caliber',
            'MVP candidate'
          ]}
          correctAnswer={2}
        />

        {/* Comments */}
        <Comments pageRoute="/war" />
      </article>
    </div>
  );
};

export default WAR;
