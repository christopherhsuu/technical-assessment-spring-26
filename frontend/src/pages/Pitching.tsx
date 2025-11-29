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
