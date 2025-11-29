// Statcast Revolution Page
import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';

const Statcast: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-[#0a1628] text-white py-20 px-4 overflow-hidden border-b-4 border-[#ffd23f]">
        {/* Background chart grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#ffd23f]" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#ffd23f] border-2 border-[#ff6b35]">
            <span className="font-mono text-sm tracking-widest text-[#0a1628] font-bold">CUTTING EDGE TECH</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-[#f5f1e8]">THE STATCAST</span>
            <br/>
            <span className="text-[#ffd23f]">REVOLUTION</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#cbd5e0] font-serif max-w-2xl">
            The cutting edge of baseball analytics
          </p>
        </motion.div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">What is Statcast?</h2>
            <p className="text-gray-700">
              In 2015, MLB installed high-speed cameras and radar equipment in every ballpark. This system,
              called <strong>Statcast</strong>, tracks every movement on the field: the ball's trajectory, player movements,
              bat speed, arm strength - everything. It's revolutionized how we understand the game.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Exit Velocity & Launch Angle</h2>
            <p className="text-gray-700 mb-4">
              <strong>Exit velocity</strong> measures how hard the ball comes off the bat (in mph). <strong>Launch angle</strong>
              measures the vertical angle of the ball's trajectory. Together, they predict outcomes better than ever before.
            </p>
            <p className="text-gray-700">
              The sweet spot? An exit velocity of 95+ mph combined with a launch angle of 25-35 degrees. This is called
              a <strong>"barrel"</strong> - the perfect combination for maximum damage.
            </p>

            {/* Barrel Scale */}
            <div className="bg-[#0a1628] border-4 border-[#ffd23f] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ffd23f] mb-4">
                <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">BARREL CRITERIA</span>
              </div>
              <p className="text-[#f5f1e8] mb-4 font-serif text-lg">
                A "barrel" requires both high exit velocity AND optimal launch angle:
              </p>
              <ul className="text-[#cbd5e0] space-y-2 mb-0 font-serif">
                <li>• <strong>Exit Velocity:</strong> Minimum 98 mph (higher is better)</li>
                <li>• <strong>Launch Angle:</strong> 26-30° optimal range</li>
                <li>• <strong>Barrel Rate:</strong> % of batted balls that are barreled</li>
                <li>• <strong>Elite barrel rate:</strong> 15%+ (top tier hitters)</li>
                <li>• <strong>Average barrel rate:</strong> 6-8%</li>
              </ul>
            </div>

            {/* Barrel & Expected Stats Calculation */}
            <div className="bg-white border-2 border-[#cbd5e0] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ffd23f] mb-6">
                <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">THE CALCULATION</span>
              </div>

              <h3 className="text-2xl font-display font-black mb-4 text-[#0a1628]">How Statcast Metrics Work</h3>

              <div className="space-y-6">
                <div className="bg-[#fef5e7] p-6 border-l-4 border-[#ff6b35]">
                  <h4 className="font-mono font-bold text-sm text-[#ff6b35] mb-3 tracking-widest">BARREL DEFINITION</h4>
                  <p className="font-serif text-base text-gray-800 mb-3">
                    A batted ball must meet BOTH criteria to be classified as a barrel:
                  </p>
                  <ul className="space-y-2 font-serif text-gray-800">
                    <li><strong>1. Exit Velocity ≥ 98 mph</strong></li>
                    <li><strong>2. Launch Angle between 26-30°</strong></li>
                  </ul>
                  <p className="font-serif text-sm text-gray-700 mt-3 italic">
                    Note: The acceptable launch angle range expands slightly as exit velocity increases (up to 50° at 116+ mph)
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg mb-3 text-[#0a1628]">Key Statcast Metrics:</h4>
                  <ul className="space-y-3 text-gray-700 font-serif">
                    <li><strong>Exit Velocity (EV):</strong> Measured by radar tracking the ball immediately off the bat. League average ~88 mph</li>
                    <li><strong>Launch Angle (LA):</strong> Measured by cameras tracking ball trajectory. 0° = line drive, +45° = pop-up, -45° = grounder</li>
                    <li><strong>Barrel Rate:</strong> (# of Barrels / # of Batted Ball Events) × 100</li>
                    <li><strong>Hard Hit Rate:</strong> Percentage of batted balls with EV ≥ 95 mph</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg mb-3 text-[#0a1628]">Expected Batting Average (xBA):</h4>
                  <p className="text-gray-700 font-serif mb-3">
                    Statcast compares each batted ball's exit velocity and launch angle to thousands of similar balls in the database:
                  </p>
                  <ol className="space-y-2 list-decimal list-inside text-gray-700 font-serif">
                    <li>Record the EV and LA for a batted ball (e.g., 102 mph at 18°)</li>
                    <li>Find all historical balls with similar EV/LA combinations</li>
                    <li>Calculate what % became hits (e.g., 75% became hits)</li>
                    <li>That probability is the xBA for this batted ball (.750 xBA)</li>
                    <li>Average all batted balls over a season to get player's xBA</li>
                  </ol>
                </div>

                <div className="bg-[#f0fff4] p-6 border-l-4 border-[#00d9ff]">
                  <h4 className="font-mono font-bold text-sm text-[#00d9ff] mb-3 tracking-widest">EXAMPLE CALCULATION</h4>
                  <p className="font-serif text-gray-800 mb-3">
                    Player has 400 batted ball events over a season with the following breakdown:
                  </p>
                  <div className="space-y-2 font-serif text-gray-800">
                    <p><strong>Barrels:</strong> 48 barrels (98+ mph, 26-30°)</p>
                    <p><strong>Hard-hit balls:</strong> 180 balls with EV ≥ 95 mph</p>
                    <p><strong>Average Exit Velocity:</strong> 91.5 mph (above league average 88 mph)</p>
                    <p className="mt-3"><strong>Barrel Rate:</strong> 48 / 400 = <strong className="text-[#00d9ff]">12%</strong> (excellent!)</p>
                    <p><strong>Hard-Hit Rate:</strong> 180 / 400 = <strong className="text-[#00d9ff]">45%</strong> (elite!)</p>
                    <p className="text-sm italic mt-3">League average barrel rate is ~6-8%. This player is well above average and likely an All-Star caliber hitter.</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 font-serif italic">
                  <strong>Note:</strong> Statcast uses Trackman radar systems and Hawk-Eye cameras installed in all 30 MLB ballparks. Every single pitch and batted ball is tracked with precision equipment, creating the most accurate baseball data ever collected.
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Expected Stats</h2>
            <p className="text-gray-700">
              Statcast introduced <strong>expected stats</strong> like xBA (expected batting average), xwOBA, and xSLG.
              These measure what <em>should have</em> happened based on the quality of contact, not what actually happened.
            </p>
            <p className="text-gray-700">
              A player with a .250 actual average but .290 xBA was unlucky - they hit the ball well, but defenders made
              great plays or balls found gloves. Over time, their average should rise.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Beyond Hitting</h2>
            <p className="text-gray-700">
              Statcast measures everything: sprint speed (feet per second), arm strength (mph on throws), catch probability
              (how hard was that catch?), and more. Teams use this data for player development, defensive positioning,
              and scouting.
            </p>
          </section>
        </motion.div>

        <Quiz
          quizId="statcast"
          question="What makes a 'barrel' in Statcast?"
          options={[
            'Any hard-hit ball',
            'Specific exit velocity + launch angle combo',
            'Any home run',
            'Any line drive'
          ]}
          correctAnswer={1}
        />

        <Comments pageRoute="/statcast" />
      </article>
    </div>
  );
};

export default Statcast;
