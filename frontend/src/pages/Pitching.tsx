// Pitching Metrics Page - FIP and xFIP
import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';

const Pitching: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-[#ff6b35] text-white py-20 px-4 overflow-hidden border-b-4 border-[#ffd23f]">
        {/* Background chart grid */}
        <div className="absolute inset-0 opacity-[0.1]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#0a1628] border-2 border-[#ffd23f]">
            <span className="font-mono text-sm tracking-widest text-[#ffd23f] font-bold">PITCHING ANALYTICS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-white">PITCHING</span>
            <br/>
            <span className="text-[#ffd23f]">METRICS</span>
          </h1>

          <p className="text-xl md:text-2xl text-white font-serif max-w-2xl">
            Predicting future performance better than ERA
          </p>
        </motion.div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">What is ERA?</h2>
            <p className="text-gray-700">
              <strong>ERA (Earned Run Average)</strong> is the traditional way to evaluate pitchers. It measures
              how many earned runs a pitcher allows per 9 innings. A 3.00 ERA means 3 earned runs per 9 innings.
              Lower is better.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">The ERA Problem</h2>
            <p className="text-gray-700">
              ERA has a fatal flaw: it's highly dependent on factors outside the pitcher's control - namely,
              <strong> team defense</strong>, <strong>ballpark</strong>, and <strong>luck on balls in play</strong>.
              A pitcher with great defense behind them will have a better ERA than their true talent level. A pitcher
              in a hitter-friendly park will suffer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">FIP: Fielding Independent Pitching</h2>
            <p className="text-gray-700 mb-4">
              <strong>FIP</strong> solves this by focusing only on what pitchers can control: strikeouts, walks,
              hit batters, and home runs. It ignores balls in play because defense plays a huge role there.
            </p>
            <p className="text-gray-700">
              FIP is scaled to look like ERA for easier comparison. A 3.50 FIP is equivalent to a 3.50 ERA in
              predictive value. But here's the key: <strong>FIP predicts future ERA better than current ERA does</strong>.
            </p>

            {/* FIP Scale */}
            <div className="bg-[#0a1628] border-4 border-[#ff6b35] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ff6b35] mb-4">
                <span className="font-mono text-xs text-white font-bold tracking-widest">FIP SCALE</span>
              </div>
              <p className="text-[#f5f1e8] mb-4 font-serif text-lg">
                FIP is scaled to ERA, so the same benchmarks apply:
              </p>
              <ul className="text-[#cbd5e0] space-y-2 mb-0 font-serif">
                <li>• <strong>Below 3.00</strong>: Excellent</li>
                <li>• <strong>3.00-3.75</strong>: Above average</li>
                <li>• <strong>3.75-4.25</strong>: Average</li>
                <li>• <strong>4.25-5.00</strong>: Below average</li>
                <li>• <strong>Above 5.00</strong>: Poor</li>
              </ul>
            </div>

            {/* FIP Calculation */}
            <div className="bg-white border-2 border-[#cbd5e0] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ffd23f] mb-6">
                <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">THE CALCULATION</span>
              </div>

              <h3 className="text-2xl font-display font-black mb-4 text-[#0a1628]">How to Calculate FIP</h3>

              <div className="space-y-6">
                <div className="bg-[#fef5e7] p-6 border-l-4 border-[#ff6b35]">
                  <h4 className="font-mono font-bold text-sm text-[#ff6b35] mb-3 tracking-widest">FORMULA</h4>
                  <p className="font-mono text-base mb-4 text-gray-800 break-words">
                    FIP = ((13×HR + 3×BB + 3×HBP - 2×K) / IP) + FIP Constant
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg mb-3 text-[#0a1628]">What Each Component Means:</h4>
                  <ul className="space-y-3 text-gray-700 font-serif">
                    <li><strong>HR:</strong> Home Runs allowed - heavily weighted (×13) as they're guaranteed runs</li>
                    <li><strong>BB:</strong> Walks allowed - weighted ×3 (bad for pitcher)</li>
                    <li><strong>HBP:</strong> Hit By Pitch - weighted ×3 (same as walks)</li>
                    <li><strong>K:</strong> Strikeouts - weighted ×2 and subtracted (good for pitcher)</li>
                    <li><strong>IP:</strong> Innings Pitched - normalizes the rate</li>
                    <li><strong>FIP Constant:</strong> Typically ~3.10-3.20, scales FIP to match ERA average</li>
                  </ul>
                </div>

                <div className="bg-[#fef5e7] p-6 border-l-4 border-[#ff6b35]">
                  <h4 className="font-mono font-bold text-sm text-[#ff6b35] mb-3 tracking-widest">WHY THESE SPECIFIC WEIGHTS?</h4>
                  <p className="text-gray-700 font-serif mb-3">
                    The weights in FIP (13, 3, 3, -2) aren't arbitrary—they're based on decades of run expectancy research.
                    Statisticians analyzed millions of plate appearances to determine how much each outcome affects run scoring:
                  </p>
                  <ul className="space-y-2 text-gray-700 font-serif text-sm">
                    <li>
                      <strong>×13 for HR:</strong> Home runs guarantee at least one run and often more with runners on. They're catastrophic
                      for pitchers, so they get the heaviest penalty.
                    </li>
                    <li>
                      <strong>×3 for BB/HBP:</strong> Walks and hit batters put runners on base for free, significantly increasing run probability.
                      They're roughly 3x as damaging as a strikeout is helpful.
                    </li>
                    <li>
                      <strong>-2 for K:</strong> Strikeouts are guaranteed outs with zero chance of advancing runners or errors.
                      They're valuable but not as impactful as the negative events, hence the smaller magnitude.
                    </li>
                  </ul>
                  <p className="text-gray-700 font-serif mt-3">
                    These weights reflect <em>true run value</em>, not arbitrary scoring. That's why FIP predicts future ERA so accurately—it's
                    measuring what actually matters for preventing runs.
                  </p>
                </div>

                <div className="bg-[#f0fff4] p-6 border-l-4 border-[#00d9ff]">
                  <h4 className="font-mono font-bold text-sm text-[#00d9ff] mb-3 tracking-widest">EXAMPLE CALCULATION</h4>
                  <p className="font-serif text-gray-800 mb-3">
                    Pitcher over 200 IP: 25 HR, 60 BB, 5 HBP, 220 K. Using FIP constant = 3.13
                  </p>
                  <div className="space-y-2 font-mono text-sm text-gray-900">
                    <p>Numerator = (13×25) + (3×60) + (3×5) - (2×220)</p>
                    <p>= 325 + 180 + 15 - 440 = <strong>80</strong></p>
                    <p>Per 9 innings = 80 / 200 = <strong>0.40</strong></p>
                    <p className="text-lg mt-2">FIP = 0.40 + 3.13 = <strong className="text-[#00d9ff]">3.53</strong> (Above average!)</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 font-serif italic">
                  <strong>Note:</strong> The FIP constant changes yearly to align league-average FIP with league-average ERA. FanGraphs calculates and publishes this constant each season.
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Example: Regression Candidate</h2>
            <p className="text-gray-700">
              Imagine a pitcher with a 3.00 ERA but a 4.50 FIP. This pitcher is likely getting lucky - maybe their
              defense is making great plays, or batters are hitting lots of weak contact that defenders catch. Over
              time, their ERA will likely rise toward their FIP. They're a <strong>regression candidate</strong>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">K-BB%: Strikeout Minus Walk Rate</h2>
            <p className="text-gray-700 mb-4">
              <strong>K-BB% (Strikeout Rate minus Walk Rate)</strong> is one of the simplest and most predictive pitching metrics.
              It measures a pitcher's ability to miss bats while avoiding walks. The formula:
            </p>

            <div className="bg-white border-2 border-[#cbd5e0] p-6 my-6">
              <p className="font-mono text-lg text-gray-800 mb-3">
                K-BB% = (K / PA) - (BB / PA) × 100
              </p>
              <p className="text-sm text-gray-600 font-serif mb-3">
                Or simply: K% minus BB%
              </p>
              <ul className="text-sm text-gray-700 font-serif space-y-1">
                <li>• <strong>Below 10%:</strong> Poor control or stuff</li>
                <li>• <strong>10-15%:</strong> Average pitcher</li>
                <li>• <strong>15-20%:</strong> Above average, quality starter</li>
                <li>• <strong>20%+:</strong> Elite, Cy Young caliber</li>
              </ul>
            </div>

            <p className="text-gray-700">
              A pitcher with 28% K rate and 8% BB rate has 20% K-BB%, indicating elite stuff and command. This metric is highly
              stable year-to-year and correlates strongly with future ERA.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">CSW%: Called Strike + Whiff Rate</h2>
            <p className="text-gray-700 mb-4">
              <strong>CSW% (Called Strike plus Whiff percentage)</strong> is a newer metric that measures how often a pitcher gets
              strikes without the ball being put in play. It's the percentage of pitches that are either called strikes or swinging strikes (whiffs).
            </p>

            <div className="bg-[#0a1628] border-4 border-[#ff6b35] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ff6b35] mb-4">
                <span className="font-mono text-xs text-white font-bold tracking-widest">CSW% SCALE</span>
              </div>
              <p className="text-[#f5f1e8] mb-4 font-serif text-lg">
                Higher CSW% means better control and stuff:
              </p>
              <ul className="text-[#cbd5e0] space-y-2 mb-0 font-serif">
                <li>• <strong>Below 25%:</strong> Poor command or weak stuff</li>
                <li>• <strong>25-28%:</strong> Average</li>
                <li>• <strong>28-30%:</strong> Above average</li>
                <li>• <strong>30-32%:</strong> Excellent</li>
                <li>• <strong>32%+:</strong> Elite (top 10% of pitchers)</li>
              </ul>
            </div>

            <p className="text-gray-700">
              CSW% is predictive because it's entirely within the pitcher's control—no defense or batted ball luck involved.
              Pitchers with high CSW% consistently outperform their ERA over time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Stuff+: Rating Pitch Quality</h2>
            <p className="text-gray-700 mb-4">
              <strong>Stuff+</strong> is a cutting-edge metric that uses Statcast data (spin rate, velocity, movement) to rate
              the quality of a pitcher's pitches. It's scaled like OPS+ and wRC+, where <strong>100 is average</strong>.
            </p>

            <div className="bg-white border-2 border-[#cbd5e0] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#0a1628]">Stuff+ Explained:</h4>
              <ul className="space-y-3 text-gray-700 font-serif">
                <li>
                  <strong>What it measures:</strong> Raw "stuff" based on velocity, spin rate, and movement characteristics.
                  Answers "How nasty are this pitcher's pitches?"
                </li>
                <li>
                  <strong>How it's calculated:</strong> Machine learning model trained on thousands of pitches to predict swing-and-miss
                  and contact quality based purely on pitch characteristics.
                </li>
                <li>
                  <strong>Scale:</strong> 100 = average. 110 = 10% better stuff than average. 90 = 10% worse than average.
                </li>
                <li>
                  <strong>Elite threshold:</strong> 115+ Stuff+ indicates top-tier pitch quality (Spencer Strider, Gerrit Cole level).
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              Stuff+ is valuable because it separates pitch quality from execution and luck. A pitcher with great Stuff+ but poor results
              may just need better command or sequencing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">WHIP: Walks + Hits Per Inning</h2>
            <p className="text-gray-700 mb-4">
              <strong>WHIP (Walks plus Hits per Inning Pitched)</strong> is a simple but effective measure of how many baserunners
              a pitcher allows. Lower is better.
            </p>

            <div className="bg-white border-2 border-[#cbd5e0] p-6 my-6">
              <p className="font-mono text-lg text-gray-800 mb-2">
                WHIP = (BB + H) / IP
              </p>
              <ul className="text-sm text-gray-700 font-serif space-y-1 mt-3">
                <li>• <strong>Below 1.00:</strong> Elite (few pitchers achieve this)</li>
                <li>• <strong>1.00-1.20:</strong> Excellent</li>
                <li>• <strong>1.20-1.30:</strong> Above average</li>
                <li>• <strong>1.30-1.40:</strong> Average</li>
                <li>• <strong>Above 1.40:</strong> Below average</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">xFIP: Expected FIP</h2>
            <p className="text-gray-700 mb-4">
              <strong>xFIP (Expected Fielding Independent Pitching)</strong> takes FIP one step further by normalizing home run rate.
              It assumes a league-average home run per fly ball rate (~10-11%), removing home run luck from the equation.
            </p>

            <p className="text-gray-700">
              If a pitcher has FIP of 3.50 but xFIP of 4.00, they're likely getting lucky with fewer home runs than expected based on
              fly ball rate. Over time, expect regression toward xFIP. This helps identify pitchers due for positive or negative changes.
            </p>
          </section>
        </motion.div>

        <Quiz
          quizId="pitching"
          question="Which stat better predicts future pitching performance?"
          options={[
            'ERA (Earned Run Average)',
            'FIP (Fielding Independent Pitching)',
            'Wins',
            'Strikeouts'
          ]}
          correctAnswer={1}
        />

        <Comments pageRoute="/pitching" />
      </article>
    </div>
  );
};

export default Pitching;
