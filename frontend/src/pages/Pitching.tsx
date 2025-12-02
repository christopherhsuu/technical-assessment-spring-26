// Pitching Metrics Page
// Comprehensive explanation of modern pitching evaluation beyond ERA

import { motion } from 'framer-motion';
import { Activity, Target, Zap, TrendingDown, BarChart3, Crosshair } from 'lucide-react';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import StatCard from '../components/StatCard';

const Pitching: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#3b82f6] text-white py-20 px-4 overflow-hidden border-b-4 border-[#22d3ee]">
        {/* Background chart grid */}
        <div className="absolute inset-0 opacity-[0.1]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#0f172a] border-2 border-[#22d3ee]">
            <span className="font-mono text-sm tracking-widest text-[#22d3ee] font-bold">PITCHING ANALYTICS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-white">PITCHING</span>
            <br/>
            <span className="text-[#22d3ee]">METRICS</span>
          </h1>

          <p className="text-xl md:text-2xl text-white font-sans max-w-2xl">
            Separating skill from luck: How modern metrics predict pitching performance better than ERA
          </p>
        </motion.div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="prose prose-lg max-w-none">

          {/* Core Question */}
          <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
            <p className="text-[#f8fafc] text-2xl font-sans leading-relaxed mb-0">
              <strong className="text-[#22d3ee]">"How good is this pitcher's true talent, independent of defense, ballpark, and luck?"</strong>
            </p>
            <p className="text-[#e2e8f0] mt-4 mb-0 font-sans">
              For decades, ERA (Earned Run Average) was the gold standard for evaluating pitchers. But ERA conflates skill with circumstances—
              a great pitcher with bad defense will have a worse ERA than their true talent. Modern metrics finally separate what pitchers control
              from what they don't.
            </p>
          </div>

          {/* The ERA Problem */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">The ERA Problem: Defense, Luck, and Context</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              <strong>ERA (Earned Run Average)</strong> measures runs allowed per 9 innings. It's intuitive—lower ERA means fewer runs.
              But ERA depends on factors completely outside the pitcher's control:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#fef2f2] border-2 border-[#3b82f6] p-6">
                <div className="font-display font-black text-2xl text-[#3b82f6] mb-2">DEFENSE</div>
                <div className="text-sm text-gray-700 font-sans">
                  Great defense saves ERAs. Weak defense inflates them. Same pitcher, different results.
                </div>
              </div>
              <div className="bg-[#fef2f2] border-2 border-[#3b82f6] p-6">
                <div className="font-display font-black text-2xl text-[#3b82f6] mb-2">BALLPARK</div>
                <div className="text-sm text-gray-700 font-sans">
                  Coors Field (hitter-friendly) vs Oracle Park (pitcher-friendly) creates 0.50+ ERA swings.
                </div>
              </div>
              <div className="bg-[#fef2f2] border-2 border-[#3b82f6] p-6">
                <div className="font-display font-black text-2xl text-[#3b82f6] mb-2">BABIP LUCK</div>
                <div className="text-sm text-gray-700 font-sans">
                  Batting Average on Balls In Play varies wildly year-to-year. Lucky seasons = low ERA.
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] border-l-4 border-[#3b82f6] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#3b82f6]">The Regression Trap</h4>
              <p className="text-gray-700 font-sans mb-3">
                A pitcher with a 2.80 ERA but poor strikeout rates, high walk rates, and elite team defense is likely getting lucky.
                Their "true talent" might be closer to 4.00 ERA. Next season, when defense regresses and luck normalizes, their ERA will spike—
                and teams who signed them to a big contract based on ERA will regret it.
              </p>
              <p className="text-gray-700 font-sans mb-0">
                This is why scouts and front offices now prioritize <strong>"fielding-independent" metrics</strong> that measure
                what pitchers actually control.
              </p>
            </div>
          </section>

          {/* FIP: The Revolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">FIP: Fielding Independent Pitching</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              <strong>FIP (Fielding Independent Pitching)</strong> revolutionized pitcher evaluation by focusing exclusively on outcomes
              the pitcher controls: <strong>strikeouts</strong>, <strong>walks</strong>, <strong>hit batters</strong>, and <strong>home runs</strong>.
              Everything else—singles, doubles, triples—involves defense and batted ball luck, so FIP ignores them.
            </p>

            <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#22d3ee] mb-4">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">THE BREAKTHROUGH</span>
              </div>
              <p className="text-[#f8fafc] text-xl font-sans leading-relaxed mb-0">
                <strong className="text-[#22d3ee]">FIP predicts future ERA better than current ERA does.</strong> A pitcher with
                3.80 ERA but 3.20 FIP is likely to improve next year. A pitcher with 3.00 ERA but 4.50 FIP is due for regression.
                FIP reveals true talent hidden by temporary circumstances.
              </p>
            </div>

            {/* FIP Calculation */}
            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#22d3ee] mb-6">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">THE CALCULATION</span>
              </div>

              <h3 className="text-2xl font-display font-black mb-4 text-[#0f172a]">How FIP Works</h3>

              <div className="bg-[#f8fafc] p-6 border-l-4 border-[#3b82f6] mb-6">
                <h4 className="font-mono font-bold text-sm text-[#3b82f6] mb-3 tracking-widest">FORMULA</h4>
                <p className="font-mono text-base md:text-lg text-gray-800 break-words">
                  FIP = ((13×HR + 3×BB + 3×HBP - 2×K) / IP) + FIP Constant
                </p>
                <p className="text-sm text-gray-600 font-sans mt-3">
                  FIP Constant (typically ~3.10-3.20) scales FIP to match ERA's league average
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="font-display font-bold text-lg text-[#0f172a]">Component Weights Explained:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#fef2f2] p-4 border-l-4 border-[#3b82f6]">
                    <div className="font-mono font-bold text-[#3b82f6] mb-1">13 × HR</div>
                    <div className="text-sm text-gray-700 font-sans">
                      Home runs are catastrophic—guaranteed runs with zero defensive help. Heaviest penalty.
                    </div>
                  </div>
                  <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                    <div className="font-mono font-bold text-[#06b6d4] mb-1">3 × BB</div>
                    <div className="text-sm text-gray-700 font-sans">
                      Walks put runners on for free. Significantly increase run probability.
                    </div>
                  </div>
                  <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                    <div className="font-mono font-bold text-[#06b6d4] mb-1">3 × HBP</div>
                    <div className="text-sm text-gray-700 font-sans">
                      Hit-by-pitch same as walk—free baserunner.
                    </div>
                  </div>
                  <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                    <div className="font-mono font-bold text-[#06b6d4] mb-1">-2 × K</div>
                    <div className="text-sm text-gray-700 font-sans">
                      Strikeouts are guaranteed outs. Valuable, but less impactful than negative events.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#ecfdf3] border-2 border-[#06b6d4] p-6">
                <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-3 tracking-widest">EXAMPLE CALCULATION</h4>
                <p className="font-sans text-gray-800 mb-3">
                  Pitcher over 200 IP: 25 HR, 60 BB, 5 HBP, 220 K. FIP constant = 3.13
                </p>
                <div className="space-y-2 font-mono text-xs md:text-sm text-gray-900 mb-4">
                  <p>Numerator = (13×25) + (3×60) + (3×5) - (2×220)</p>
                  <p className="ml-4">= 325 + 180 + 15 - 440</p>
                  <p className="ml-4">= <strong className="text-[#06b6d4]">80</strong></p>
                  <p className="mt-2">Per 9 innings = 80 / 200 = <strong>0.40</strong></p>
                  <p className="text-base md:text-lg mt-3 text-[#3b82f6]">FIP = 0.40 + 3.13 = <strong>3.53</strong> (Above average!)</p>
                </div>
              </div>
            </div>

            {/* FIP Scale */}
            <div className="bg-[#0f172a] border-4 border-[#3b82f6] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#3b82f6] mb-4">
                <span className="font-mono text-xs text-white font-bold tracking-widest">FIP SCALE</span>
              </div>
              <p className="text-[#e2e8f0] mb-4 font-sans">
                FIP is scaled to ERA for easy comparison:
              </p>
              <table className="w-full">
                <tbody className="divide-y divide-[#3b82f6]">
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">Below 3.00</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Excellent, Cy Young caliber</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">3.00 - 3.75</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Above average, quality starter</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">3.75 - 4.25</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">4.25 - 5.00</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Below average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">Above 5.00</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Poor, replacement level</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Modern Metrics Suite */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">The Modern Pitching Metrics Suite</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              Beyond FIP, modern analysis uses several complementary metrics to build a complete picture of pitcher skill:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <StatCard
                title="K-BB%"
                value="Command"
                description="Strikeout minus walk rate—pure skill indicator"
                icon={<Target size={32} strokeWidth={2.5} />}
                color="blue"
              />
              <StatCard
                title="CSW%"
                value="Strikes"
                description="Called strikes + whiffs—pitch effectiveness"
                icon={<Crosshair size={32} strokeWidth={2.5} />}
                color="green"
              />
              <StatCard
                title="xFIP"
                value="Expected"
                description="FIP with normalized HR rate"
                icon={<TrendingDown size={32} strokeWidth={2.5} />}
                color="red"
              />
              <StatCard
                title="Stuff+"
                value="Quality"
                description="Pitch quality based on Statcast data"
                icon={<Zap size={32} strokeWidth={2.5} />}
                color="blue"
              />
              <StatCard
                title="WHIP"
                value="Baserunners"
                description="Walks + Hits per Inning Pitched"
                icon={<BarChart3 size={32} strokeWidth={2.5} />}
                color="gray"
              />
              <StatCard
                title="SwStr%"
                value="Whiffs"
                description="Swinging strike rate—bat-missing ability"
                icon={<Activity size={32} strokeWidth={2.5} />}
                color="red"
              />
            </div>
          </section>

          {/* K-BB% */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">K-BB%: The Skill Indicator</h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              <strong>K-BB% (Strikeout Rate minus Walk Rate)</strong> is one of the simplest and most predictive pitching metrics.
              It directly measures two fundamental skills: <strong>missing bats</strong> (strikeouts) and <strong>throwing strikes</strong> (avoiding walks).
            </p>

            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-6">
              <p className="font-mono text-lg text-gray-800 mb-3">
                K-BB% = (K / PA) - (BB / PA) × 100
              </p>
              <p className="text-sm text-gray-600 font-sans mb-4">
                Or simply: K% minus BB%
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-display font-bold mb-2 text-[#0f172a]">Scale:</h4>
                  <div className="space-y-2 text-sm text-gray-700 font-sans">
                    <p>• <strong>Below 10%:</strong> Poor stuff or control</p>
                    <p>• <strong>10-15%:</strong> Average pitcher</p>
                    <p>• <strong>15-20%:</strong> Above avg, quality starter</p>
                    <p>• <strong>20%+:</strong> Elite, Cy Young caliber</p>
                  </div>
                </div>
                <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-4">
                  <h4 className="font-display font-bold text-sm mb-2 text-[#06b6d4]">EXAMPLE</h4>
                  <p className="text-sm text-gray-700 font-sans mb-2">
                    Pitcher: 28% K-rate, 8% BB-rate
                  </p>
                  <p className="text-sm text-gray-700 font-sans">
                    K-BB% = 28% - 8% = <strong className="text-[#06b6d4]">20%</strong> (Elite!)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] border-l-4 border-[#06b6d4] p-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">Why It Matters</h4>
              <p className="text-gray-700 font-sans mb-0">
                K-BB% is highly stable year-to-year and correlates strongly with future ERA. A pitcher with excellent K-BB% but
                poor current ERA is likely getting unlucky—expect improvement. It's pure skill, no luck involved.
              </p>
            </div>
          </section>

          {/* CSW% */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">CSW%: Called Strikes + Whiffs</h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              <strong>CSW% (Called Strike plus Whiff percentage)</strong> measures how often a pitcher gets strikes without the ball
              being put in play. It's the percentage of pitches that are either <strong>called strikes</strong> or <strong>swinging strikes</strong> (whiffs).
            </p>

            <div className="bg-[#0f172a] border-4 border-[#3b82f6] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#3b82f6] mb-4">
                <span className="font-mono text-xs text-white font-bold tracking-widest">CSW% SCALE</span>
              </div>
              <table className="w-full">
                <tbody className="divide-y divide-[#3b82f6]">
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">Below 25%</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Poor command or weak stuff</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">25-28%</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">28-30%</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Above average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">30-32%</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Excellent</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">32%+</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Elite (top 10% of pitchers)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 font-sans">
              CSW% is predictive because it's entirely within the pitcher's control—no defense or batted ball luck involved.
              Pitchers with high CSW% consistently outperform their ERA over time.
            </p>
          </section>

          {/* Stuff+ */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">Stuff+: Rating Pitch Quality</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              <strong>Stuff+</strong> is a cutting-edge metric that uses Statcast data (velocity, spin rate, movement) to rate
              the quality of a pitcher's pitches. It's scaled like wRC+ and OPS+, where <strong>100 is average</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#ecfdf3] border-2 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">What It Measures</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Raw "stuff" based on velocity, spin rate, and movement. Answers: "How nasty are this pitcher's pitches?"
                  Uses machine learning trained on thousands of pitches to predict swing-and-miss and contact quality.
                </p>
              </div>
              <div className="bg-[#fef2f2] border-2 border-[#3b82f6] p-6">
                <h4 className="font-display font-bold text-lg mb-3 text-[#3b82f6]">The Scale</h4>
                <div className="space-y-2 text-sm text-gray-700 font-sans">
                  <p>• <strong>100:</strong> League average</p>
                  <p>• <strong>110:</strong> 10% better than average</p>
                  <p>• <strong>115+:</strong> Elite (Gerrit Cole level)</p>
                  <p>• <strong>90:</strong> 10% worse than average</p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fafc] border-l-4 border-[#06b6d4] p-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">Why It's Valuable</h4>
              <p className="text-gray-700 font-sans mb-0">
                Stuff+ separates pitch quality from execution and luck. A pitcher with great Stuff+ but poor results may just need
                better command or sequencing. Conversely, a pitcher with low Stuff+ overperforming likely won't sustain it.
              </p>
            </div>
          </section>

          {/* xFIP & WHIP */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">xFIP & WHIP: Additional Context</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#e2e8f0] p-6">
                <h3 className="text-xl font-display font-black mb-3 text-[#0f172a]">xFIP: Expected FIP</h3>
                <p className="text-gray-700 font-sans mb-3 text-sm">
                  xFIP takes FIP one step further by normalizing home run rate. Assumes league-average HR per fly ball rate (~10-11%),
                  removing home run luck.
                </p>
                <div className="bg-[#f8fafc] border-l-4 border-[#3b82f6] p-4">
                  <p className="text-gray-700 font-sans text-sm mb-0">
                    <strong>Example:</strong> Pitcher with FIP 3.50 but xFIP 4.00 is likely getting lucky with fewer HRs than expected.
                    Expect regression toward xFIP.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#e2e8f0] p-6">
                <h3 className="text-xl font-display font-black mb-3 text-[#0f172a]">WHIP: Baserunner Rate</h3>
                <p className="text-gray-700 font-sans mb-3 text-sm">
                  WHIP (Walks plus Hits per Inning Pitched) measures how many baserunners a pitcher allows. Simple but effective.
                </p>
                <p className="font-mono text-base text-gray-800 mb-3">WHIP = (BB + H) / IP</p>
                <div className="space-y-1 text-xs text-gray-700 font-sans">
                  <p>• <strong>Below 1.00:</strong> Elite</p>
                  <p>• <strong>1.00-1.20:</strong> Excellent</p>
                  <p>• <strong>1.30-1.40:</strong> Average</p>
                  <p>• <strong>Above 1.40:</strong> Below average</p>
                </div>
              </div>
            </div>
          </section>

          {/* How Teams Use This */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">How MLB Teams Use These Metrics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Free Agent Valuation</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Teams identify pitchers with low ERA but poor FIP/K-BB% as regression candidates to avoid in free agency.
                  Conversely, pitchers with high ERA but excellent peripherals are undervalued buys.
                </p>
              </div>
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Trade Decisions</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Sell high on pitchers with excellent ERA but poor FIP (likely lucky). Buy low on pitchers with poor ERA
                  but strong FIP/Stuff+ (unlucky, due for rebound).
                </p>
              </div>
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Development Focus</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Young pitchers with elite Stuff+ but high walk rates focus on command development. Pitchers with good
                  control but low Stuff+ work on velocity/spin optimization.
                </p>
              </div>
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">In-Season Management</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Monitor CSW% and SwStr% to detect early signs of fatigue or injury. Declining whiff rates often
                  precede velocity drops and injuries by weeks.
                </p>
              </div>
            </div>
          </section>

          {/* Real-World Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">Real-World Example: Identifying Regression</h2>

            <div className="bg-white border-2 border-[#e2e8f0] p-8">
              <div className="inline-block px-3 py-1 bg-[#0f172a] mb-6">
                <span className="font-mono text-xs text-[#22d3ee] font-bold tracking-widest">TALE OF TWO PITCHERS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-center p-6 bg-[#ecfdf3] border-2 border-[#06b6d4]">
                  <div className="font-display font-black text-3xl text-[#0f172a] mb-4">Pitcher A</div>
                  <div className="space-y-2 mb-4">
                    <div className="font-mono text-2xl text-[#1e293b]">2.80 ERA</div>
                    <div className="text-sm text-gray-600 font-sans">Looks elite!</div>
                  </div>
                  <div className="border-t-2 border-[#e2e8f0] pt-4 space-y-2">
                    <div className="text-sm text-gray-700 font-sans">4.50 FIP</div>
                    <div className="text-sm text-gray-700 font-sans">12% K-BB%</div>
                    <div className="text-sm text-gray-700 font-sans">95 Stuff+</div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-[#fef2f2] border-2 border-[#3b82f6]">
                    <span className="text-sm text-[#3b82f6] font-bold font-mono">REGRESSION RISK</span>
                  </div>
                </div>

                <div className="text-center p-6 bg-[#fef2f2] border-2 border-[#3b82f6]">
                  <div className="font-display font-black text-3xl text-[#0f172a] mb-4">Pitcher B</div>
                  <div className="space-y-2 mb-4">
                    <div className="font-mono text-2xl text-[#1e293b]">4.20 ERA</div>
                    <div className="text-sm text-gray-600 font-sans">Looks mediocre</div>
                  </div>
                  <div className="border-t-2 border-[#e2e8f0] pt-4 space-y-2">
                    <div className="text-sm text-gray-700 font-sans">3.20 FIP</div>
                    <div className="text-sm text-gray-700 font-sans">22% K-BB%</div>
                    <div className="text-sm text-gray-700 font-sans">118 Stuff+</div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-[#ecfdf3] border-2 border-[#06b6d4]">
                    <span className="text-sm text-[#06b6d4] font-bold font-mono">IMPROVEMENT DUE</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fafc] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">The Verdict</h4>
                <p className="text-gray-800 font-sans mb-3">
                  Pitcher A has a great ERA (2.80) but terrible peripherals. They're likely getting lucky with excellent defense
                  and low BABIP. <strong className="text-[#3b82f6]">Next year, expect 4.00+ ERA</strong>. Bad long-term investment.
                </p>
                <p className="text-gray-700 font-sans mb-0">
                  Pitcher B has a mediocre ERA (4.20) but elite peripherals. They're getting unlucky with weak defense and high BABIP.
                  <strong className="text-[#06b6d4]"> Next year, expect 3.20-3.50 ERA</strong>. Excellent buy-low candidate.
                </p>
              </div>
            </div>
          </section>

        </motion.div>

        <Quiz
          quizId="pitching"
          question="Pitcher has 3.00 ERA but 4.50 FIP, poor K-BB%, and weak Stuff+. What's likely to happen?"
          options={[
            'ERA will stay at 3.00 (sustained excellence)',
            'ERA will regress toward 4.50 (getting lucky)',
            'FIP will improve to match ERA',
            'Both metrics are equally predictive'
          ]}
          correctAnswer={1}
        />

        <Quiz
          quizId="pitching-2"
          question="Why does FIP ignore singles, doubles, and triples?"
          options={[
            'They don\'t matter for run prevention',
            'They\'re too hard to track',
            'They involve defense and batted ball luck outside pitcher control',
            'FIP only measures home runs'
          ]}
          correctAnswer={2}
        />

        <Quiz
          quizId="pitching-3"
          question="A pitcher with 22% K-BB% is considered:"
          options={[
            'Below average',
            'Average',
            'Above average',
            'Elite, Cy Young caliber'
          ]}
          correctAnswer={3}
        />

        <Comments pageRoute="/pitching" />
      </article>
    </div>
  );
};

export default Pitching;
