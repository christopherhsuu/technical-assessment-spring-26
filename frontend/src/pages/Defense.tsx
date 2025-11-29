// Defensive Metrics Page
import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';

const Defense: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-[#1a2a47] text-white py-20 px-4 overflow-hidden border-b-4 border-[#00d9ff]">
        {/* Background chart grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#00d9ff]" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00d9ff] border-2 border-[#ffd23f]">
            <span className="font-mono text-sm tracking-widest text-[#0a1628] font-bold">DEFENSIVE ANALYTICS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-[#f5f1e8]">DEFENSIVE</span>
            <br/>
            <span className="text-[#00d9ff]">METRICS</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#cbd5e0] font-serif max-w-2xl">
            Measuring defense beyond errors
          </p>
        </motion.div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Traditional Defense: Errors</h2>
            <p className="text-gray-700">
              Historically, defense was measured by <strong>errors</strong> and <strong>fielding percentage</strong>.
              Fewer errors = better defense, right? Wrong!
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Why Errors Don't Work</h2>
            <p className="text-gray-700">
              Errors have a fatal flaw: <strong>they don't measure range</strong>. A slow, limited defender can have
              zero errors simply because they never get to balls. They only make plays on balls hit right at them.
              Meanwhile, a fast, aggressive defender with great range might make more errors but gets to far more balls,
              saving many more runs overall.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Modern Defensive Stats</h2>
            <p className="text-gray-700 mb-4">
              Modern metrics like <strong>DRS (Defensive Runs Saved)</strong>, <strong>UZR (Ultimate Zone Rating)</strong>,
              and <strong>OAA (Outs Above Average)</strong> actually measure how many runs a defender saves compared to average.
            </p>
            <p className="text-gray-700">
              These stats account for range, arm strength, and positioning. A +10 DRS means a player saved 10 more runs
              than an average defender at their position. That's huge!
            </p>

            {/* DRS Scale */}
            <div className="bg-[#0a1628] border-4 border-[#00d9ff] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#00d9ff] mb-4">
                <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">DRS SCALE</span>
              </div>
              <p className="text-[#f5f1e8] mb-4 font-serif text-lg">
                DRS measures runs saved above/below average. Zero is league average:
              </p>
              <ul className="text-[#cbd5e0] space-y-2 mb-0 font-serif">
                <li>• <strong>+15 or better</strong>: Gold Glove caliber (elite)</li>
                <li>• <strong>+10 to +15</strong>: Excellent defender</li>
                <li>• <strong>+5 to +10</strong>: Above average</li>
                <li>• <strong>-5 to +5</strong>: Average range</li>
                <li>• <strong>-10 to -5</strong>: Below average</li>
                <li>• <strong>-10 or worse</strong>: Poor defender (liability)</li>
              </ul>
            </div>

            {/* DRS Calculation */}
            <div className="bg-white border-2 border-[#cbd5e0] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ffd23f] mb-6">
                <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">THE CALCULATION</span>
              </div>

              <h3 className="text-2xl font-display font-black mb-4 text-[#0a1628]">How DRS is Calculated</h3>

              <div className="space-y-6">
                <div className="bg-[#fef5e7] p-6 border-l-4 border-[#ff6b35]">
                  <h4 className="font-mono font-bold text-sm text-[#ff6b35] mb-3 tracking-widest">CORE CONCEPT</h4>
                  <p className="font-serif text-base text-gray-800">
                    DRS = Range Runs + Error Runs + Arm Runs + Double Play Runs (for infielders)
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg mb-3 text-[#0a1628]">What Each Component Measures:</h4>
                  <ul className="space-y-3 text-gray-700 font-serif">
                    <li><strong>Range Runs:</strong> Compares balls fielded vs. expected based on location, trajectory, and speed. Getting to balls others can't = positive runs saved</li>
                    <li><strong>Error Runs:</strong> Runs lost due to errors compared to average error rate. Not just error count—considers difficulty of play</li>
                    <li><strong>Arm Runs (OF):</strong> For outfielders, measures throwing effectiveness—preventing extra bases, getting runners out</li>
                    <li><strong>Double Play Runs (IF):</strong> For infielders, measures ability to turn double plays vs. average</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg mb-3 text-[#0a1628]">How Range is Calculated:</h4>
                  <p className="text-gray-700 font-serif mb-3">
                    The field is divided into zones. For each batted ball, the system calculates:
                  </p>
                  <ol className="space-y-2 list-decimal list-inside text-gray-700 font-serif">
                    <li>What percentage of fielders historically make this play (based on ball location, speed, trajectory)</li>
                    <li>Whether the fielder made the play or not</li>
                    <li>The run value difference between an out and allowing a hit</li>
                    <li>Sum up all plays over the season to get total runs saved/cost</li>
                  </ol>
                </div>

                <div className="bg-[#f0fff4] p-6 border-l-4 border-[#00d9ff]">
                  <h4 className="font-mono font-bold text-sm text-[#00d9ff] mb-3 tracking-widest">EXAMPLE SCENARIO</h4>
                  <p className="font-serif text-gray-800 mb-3">
                    A ball is hit to shallow right field. Based on batted ball data, only 40% of right fielders make this catch.
                  </p>
                  <div className="space-y-2 font-serif text-gray-800">
                    <p><strong>Expected outs:</strong> 0.40 (40% conversion rate)</p>
                    <p><strong>Actual result:</strong> Fielder makes the catch = 1 out</p>
                    <p><strong>Plays above average:</strong> 1.0 - 0.40 = 0.60 plays</p>
                    <p><strong>Run value of an out vs. single:</strong> ~0.8 runs</p>
                    <p className="text-lg mt-2">Runs saved on this play = 0.60 × 0.8 = <strong className="text-[#00d9ff]">+0.48 runs</strong></p>
                    <p className="text-sm italic mt-3">Over a full season, hundreds of these plays add up to the final DRS total.</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 font-serif italic">
                  <strong>Note:</strong> DRS is calculated by Sports Info Solutions (SIS) using proprietary data from video review of every play. UZR and OAA are similar metrics from different sources with slightly different methodologies.
                </div>
              </div>
            </div>
          </section>
        </motion.div>

        <Quiz
          quizId="defense"
          question="What's the biggest problem with using errors to evaluate defense?"
          options={[
            'Too many errors',
            'Doesn\'t measure range',
            'Errors are rare',
            'Too subjective'
          ]}
          correctAnswer={1}
        />

        <Comments pageRoute="/defense" />
      </article>
    </div>
  );
};

export default Defense;
