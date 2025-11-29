// Offensive Metrics Page
// Explains wOBA, wRC+, and why batting average is misleading

import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';

const Offense: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#2d4a7c] text-white py-20 px-4 overflow-hidden border-b-4 border-[#00d9ff]">
        {/* Background chart grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#00d9ff]" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00d9ff] border-2 border-[#ffd23f]">
            <span className="font-mono text-sm tracking-widest text-[#0a1628] font-bold">HITTING ANALYTICS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-[#f5f1e8]">OFFENSIVE</span>
            <br/>
            <span className="text-[#ffd23f]">METRICS</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#cbd5e0] font-serif max-w-2xl">
            Why batting average doesn't tell the whole story
          </p>
        </motion.div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="prose prose-lg max-w-none">

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">Traditional Offense: The Basics</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For over 100 years, baseball fans have judged hitters primarily by three stats: <strong>batting average (AVG)</strong>,
              <strong> home runs (HR)</strong>, and <strong>runs batted in (RBI)</strong>. A .300 hitter was always considered great,
              right? Not so fast.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These traditional stats have major flaws. Batting average treats all hits equally - a single counts the same as
              a double or triple. It completely ignores walks, even though getting on base via walk is just as valuable.
              RBIs are heavily dependent on opportunities (batting with runners on base) rather than individual skill.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">wOBA: Weighted On-Base Average</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>wOBA (weighted On-Base Average)</strong> fixes batting average's biggest problem: it properly values
              different types of hits. In wOBA, a double is worth roughly twice as much as a single, a triple more than a double,
              and a home run is the most valuable. Walks count too!
            </p>
            <div className="bg-[#0a1628] border-4 border-[#00d9ff] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#00d9ff] mb-4">
                <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">wOBA SCALE</span>
              </div>
              <p className="text-[#f5f1e8] mb-4 font-serif text-lg">
                wOBA is scaled to look like on-base percentage for easier interpretation:
              </p>
              <ul className="text-[#cbd5e0] space-y-2 mb-0 font-serif">
                <li>• <strong>.320 or below</strong>: Below average hitter</li>
                <li>• <strong>.320-.360</strong>: Average hitter</li>
                <li>• <strong>.360-.400</strong>: Good hitter</li>
                <li>• <strong>.400+</strong>: Elite hitter (All-Star level)</li>
              </ul>
            </div>

            {/* wOBA Calculation */}
            <div className="bg-white border-2 border-[#cbd5e0] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ffd23f] mb-6">
                <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">THE CALCULATION</span>
              </div>

              <h3 className="text-2xl font-display font-black mb-4 text-[#0a1628]">How to Calculate wOBA</h3>

              <div className="space-y-6">
                <div className="bg-[#fef5e7] p-6 border-l-4 border-[#ff6b35]">
                  <h4 className="font-mono font-bold text-sm text-[#ff6b35] mb-3 tracking-widest">FORMULA (2023 weights)</h4>
                  <p className="font-mono text-base mb-4 text-gray-800 break-words">
                    wOBA = (0.69×BB + 0.72×HBP + 0.88×1B + 1.24×2B + 1.56×3B + 1.95×HR) / (AB + BB - IBB + SF + HBP)
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg mb-3 text-[#0a1628]">What Each Component Means:</h4>
                  <ul className="space-y-3 text-gray-700 font-serif">
                    <li><strong>BB:</strong> Walks (unintentional) - worth 0.69 runs</li>
                    <li><strong>HBP:</strong> Hit By Pitch - worth 0.72 runs</li>
                    <li><strong>1B:</strong> Singles - worth 0.88 runs</li>
                    <li><strong>2B:</strong> Doubles - worth 1.24 runs (41% more valuable than singles!)</li>
                    <li><strong>3B:</strong> Triples - worth 1.56 runs</li>
                    <li><strong>HR:</strong> Home runs - worth 1.95 runs (most valuable)</li>
                  </ul>
                </div>

                <div className="bg-[#f0fff4] p-6 border-l-4 border-[#00d9ff]">
                  <h4 className="font-mono font-bold text-sm text-[#00d9ff] mb-3 tracking-widest">EXAMPLE CALCULATION</h4>
                  <p className="font-serif text-gray-800 mb-3">
                    Player with 600 PA: 80 BB, 5 HBP, 120 1B, 35 2B, 3 3B, 25 HR, 500 AB, 8 SF
                  </p>
                  <div className="space-y-2 font-mono text-sm text-gray-900">
                    <p>Numerator = (0.69×80) + (0.72×5) + (0.88×120) + (1.24×35) + (1.56×3) + (1.95×25)</p>
                    <p>= 55.2 + 3.6 + 105.6 + 43.4 + 4.68 + 48.75 = <strong>261.23</strong></p>
                    <p>Denominator = 500 + 80 - 0 + 8 + 5 = <strong>593</strong></p>
                    <p className="text-lg mt-2">wOBA = 261.23 / 593 = <strong className="text-[#00d9ff]">.440</strong> (Elite!)</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 font-serif italic">
                  <strong>Note:</strong> The weights change slightly each year based on the run environment. These are 2023 values.
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">wRC+: Park and League Adjusted</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>wRC+ (weighted Runs Created Plus)</strong> takes wOBA and adjusts it for ballpark and league context.
              Hitting at Coors Field in Colorado (high altitude, ball flies far) is easier than pitching at Oracle Park in
              San Francisco (large outfield, cool weather). wRC+ accounts for this.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              wRC+ is set so that <strong>100 is exactly average</strong>. A wRC+ of 130 means the player is 30% better than
              average. A wRC+ of 80 means 20% worse than average. This makes comparisons super easy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">Real Comparison: Why It Matters</h2>
            <div className="bg-white border-2 border-[#cbd5e0] p-8 mb-6">
              <div className="inline-block px-3 py-1 bg-[#0a1628] mb-6">
                <span className="font-mono text-xs text-[#ffd23f] font-bold tracking-widest">COMPARISON</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-[#fef5e7] border-2 border-[#e8e2d5]">
                  <div className="font-display font-black text-3xl text-[#0a1628] mb-4">Player A</div>
                  <div className="mt-3 space-y-2 font-mono text-lg text-[#2d4a7c]">
                    <div>.280 AVG</div>
                    <div>.320 wOBA</div>
                    <div>90 wRC+</div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-[#fff5f0] border-2 border-[#ff6b35]">
                    <span className="text-sm text-[#ff6b35] font-bold font-mono">BELOW AVERAGE</span>
                  </div>
                </div>
                <div className="text-center p-6 bg-[#fef5e7] border-2 border-[#e8e2d5]">
                  <div className="font-display font-black text-3xl text-[#0a1628] mb-4">Player B</div>
                  <div className="mt-3 space-y-2 font-mono text-lg text-[#2d4a7c]">
                    <div>.250 AVG</div>
                    <div>.380 wOBA</div>
                    <div>135 wRC+</div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-[#f0fff4] border-2 border-[#00d9ff]">
                    <span className="text-sm text-[#00d9ff] font-bold font-mono">ALL-STAR LEVEL</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 mt-6 font-serif text-base">
                Player A has a better batting average, but Player B is actually a much better hitter! Player B likely
                hits for more power and draws more walks, making them <strong className="text-[#00d9ff]">35% more productive than average</strong> despite a lower AVG.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">How Teams Use These Metrics</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Modern MLB front offices use wOBA and wRC+ extensively for player evaluation and contract negotiations.
              A player with a .260 AVG but .380 wOBA and 130 wRC+ will command a much higher salary than a .300 hitter
              with weak underlying metrics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These stats helped teams identify undervalued players during the Moneyball era. Players who drew lots of
              walks were historically undervalued because walks don't show up in batting average. Teams that recognized
              this gained a competitive advantage.
            </p>
          </section>

        </motion.div>

        <Quiz
          quizId="offense"
          question="Player A: .280 AVG, .320 wOBA | Player B: .250 AVG, .380 wOBA. Who's the better hitter?"
          options={[
            'Player A (higher batting average)',
            'Player B (higher wOBA)',
            'They\'re equal',
            'Cannot determine'
          ]}
          correctAnswer={1}
        />

        <Comments pageRoute="/offense" />
      </article>
    </div>
  );
};

export default Offense;
