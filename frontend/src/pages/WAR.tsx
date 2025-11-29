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
      <section className="relative bg-[#0a1628] text-white py-20 px-4 overflow-hidden border-b-4 border-[#ffd23f]">
        {/* Background chart grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#00d9ff]" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          {/* Icon and label */}
          <div className="inline-block mb-6 px-4 py-2 bg-[#ff6b35] border-2 border-[#ffd23f]">
            <span className="font-mono text-sm tracking-widest text-white font-bold">THE ONE-NUMBER METRIC</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-[#f5f1e8]">WAR:</span>
            <br/>
            <span className="text-[#ffd23f]">WINS ABOVE REPLACEMENT</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#cbd5e0] font-serif max-w-2xl">
            The ultimate all-in-one metric for measuring total player value
          </p>

          {/* Stat highlight */}
          <div className="mt-8 inline-block bg-[#1a2a47] border-l-4 border-[#ff6b35] p-6">
            <div className="flex items-baseline space-x-4">
              <span className="scoreboard-num text-5xl text-[#ffd23f]">8+</span>
              <div>
                <div className="font-mono text-xs text-[#ff6b35] tracking-widest">MVP SEASON</div>
                <div className="font-serif text-sm text-[#cbd5e0]">Historic performance territory</div>
              </div>
            </div>
          </div>
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

            <div className="bg-[#0a1628] border-4 border-[#ffd23f] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ff6b35] mb-4">
                <span className="font-mono text-xs text-white font-bold tracking-widest">REAL EXAMPLE</span>
              </div>
              <p className="text-[#f5f1e8] mb-4 font-serif text-lg">
                Mike Trout averaged <strong className="text-[#ffd23f]">8.5 WAR</strong> per season from 2012-2019. This means he was worth
                approximately <strong className="text-[#ffd23f]">8.5 more wins per year</strong> than a replacement-level player.
                Over that 8-year span, he was worth about <strong className="text-[#ff6b35]">68 wins</strong> to his team!
              </p>
              <p className="text-[#cbd5e0] text-sm italic mb-0 font-serif">
                At a rough estimate of $8-10 million per win on the free agent market, Trout was
                providing <strong className="text-[#00d9ff]">$80+ million</strong> in value annually.
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

            <div className="bg-white border-2 border-[#cbd5e0] p-6 mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-4 border-[#0a1628]">
                    <th className="text-left py-4 font-display font-black text-[#0a1628] text-lg">WAR</th>
                    <th className="text-left py-4 font-display font-black text-[#0a1628] text-lg">Player Level</th>
                    <th className="text-left py-4 font-display font-black text-[#0a1628] text-lg">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-[#e8e2d5]">
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#ff6b35]">0-1</td>
                    <td className="py-4 font-semibold text-gray-800">Replacement Level</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Bench players, struggling starters</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#2d4a7c]">1-2</td>
                    <td className="py-4 font-semibold text-gray-800">Role Player</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Useful bench piece, spot starter</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#2d4a7c]">2-3</td>
                    <td className="py-4 font-semibold text-gray-800">Solid Starter</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Everyday player, good contributor</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#00d9ff]">3-4</td>
                    <td className="py-4 font-semibold text-gray-800">Good Player</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Above average, valuable starter</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#00d9ff]">4-6</td>
                    <td className="py-4 font-semibold text-gray-800">All-Star</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Elite player, team cornerstone</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#ffd23f]">6-8</td>
                    <td className="py-4 font-semibold text-gray-800">Superstar</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">MVP candidate, franchise player</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#ffd23f]">8+</td>
                    <td className="py-4 font-semibold text-gray-800">MVP/HOF Season</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Historic performance, rare</td>
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

            <div className="bg-white border-2 border-[#cbd5e0] p-8 mb-6">
              <div className="inline-block px-3 py-1 bg-[#0a1628] mb-6">
                <span className="font-mono text-xs text-[#ffd23f] font-bold tracking-widest">COMPARISON</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-center p-6 bg-[#fef5e7] border-2 border-[#e8e2d5]">
                  <div className="font-display font-black text-3xl text-[#0a1628] mb-4">Player A</div>
                  <div className="space-y-2 font-mono text-lg">
                    <div className="text-[#2d4a7c]">.290 AVG</div>
                    <div className="text-[#2d4a7c]">25 HR</div>
                    <div className="text-[#2d4a7c]">95 RBI</div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 font-serif italic">Traditional stats look great</div>
                </div>
                <div className="text-center p-6 bg-[#fef5e7] border-2 border-[#e8e2d5]">
                  <div className="font-display font-black text-3xl text-[#0a1628] mb-4">Player B</div>
                  <div className="space-y-2 font-mono text-lg">
                    <div className="text-[#2d4a7c]">.265 AVG</div>
                    <div className="text-[#2d4a7c]">22 HR</div>
                    <div className="text-[#2d4a7c]">80 RBI</div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 font-serif italic">Looks slightly worse</div>
                </div>
              </div>

              <div className="border-t-4 border-[#0a1628] pt-6">
                <h5 className="font-display font-black text-xl mb-4 text-[#0a1628]">But check their WAR:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-[#fff5f0] border-4 border-[#ff6b35]">
                    <div className="scoreboard-num text-5xl text-[#ff6b35] mb-2">2.1</div>
                    <div className="font-mono text-xs text-[#ff6b35] tracking-widest mb-2">PLAYER A WAR</div>
                    <div className="text-sm text-gray-700 font-serif">Poor defense, slow on bases</div>
                  </div>
                  <div className="text-center p-6 bg-[#f0fff4] border-4 border-[#00d9ff]">
                    <div className="scoreboard-num text-5xl text-[#00d9ff] mb-2">5.2</div>
                    <div className="font-mono text-xs text-[#00d9ff] tracking-widest mb-2">PLAYER B WAR</div>
                    <div className="text-sm text-gray-700 font-serif">Gold Glove defense, plays premium position</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-800 mt-6 font-serif text-base">
                Player B is actually <strong className="text-[#00d9ff]">3.1 wins more valuable</strong> despite "worse" traditional stats.
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
