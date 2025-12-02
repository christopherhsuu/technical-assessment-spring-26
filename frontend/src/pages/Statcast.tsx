// Statcast Revolution Page
import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';

const Statcast: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-[#0f172a] text-white py-20 px-4 overflow-hidden border-b-4 border-[#22d3ee]">
        {/* Background chart grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#22d3ee]" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#22d3ee] border-2 border-[#3b82f6]">
            <span className="font-mono text-sm tracking-widest text-[#0f172a] font-bold">CUTTING EDGE TECH</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-[#f8fafc]">THE STATCAST</span>
            <br/>
            <span className="text-[#22d3ee]">REVOLUTION</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#e2e8f0] font-sans max-w-2xl">
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
            <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#22d3ee] mb-4">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">BARREL CRITERIA</span>
              </div>
              <p className="text-[#f8fafc] mb-4 font-sans text-lg">
                A "barrel" requires both high exit velocity AND optimal launch angle:
              </p>
              <ul className="text-[#e2e8f0] space-y-2 mb-0 font-sans">
                <li>• <strong>Exit Velocity:</strong> Minimum 98 mph (higher is better)</li>
                <li>• <strong>Launch Angle:</strong> 26-30° optimal range</li>
                <li>• <strong>Barrel Rate:</strong> % of batted balls that are barreled</li>
                <li>• <strong>Elite barrel rate:</strong> 15%+ (top tier hitters)</li>
                <li>• <strong>Average barrel rate:</strong> 6-8%</li>
              </ul>
            </div>

            {/* Barrel & Expected Stats Calculation */}
            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#22d3ee] mb-6">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">THE CALCULATION</span>
              </div>

              <h3 className="text-2xl font-display font-black mb-4 text-[#0f172a]">How Statcast Metrics Work</h3>

              <div className="space-y-6">
                <div className="bg-[#f8fafc] p-6 border-l-4 border-[#3b82f6]">
                  <h4 className="font-mono font-bold text-sm text-[#3b82f6] mb-3 tracking-widest">BARREL DEFINITION</h4>
                  <p className="font-sans text-base text-gray-800 mb-3">
                    A batted ball must meet BOTH criteria to be classified as a barrel:
                  </p>
                  <ul className="space-y-2 font-sans text-gray-800">
                    <li><strong>1. Exit Velocity ≥ 98 mph</strong></li>
                    <li><strong>2. Launch Angle between 26-30°</strong></li>
                  </ul>
                  <p className="font-sans text-sm text-gray-700 mt-3 italic">
                    Note: The acceptable launch angle range expands slightly as exit velocity increases (up to 50° at 116+ mph)
                  </p>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg mb-3 text-[#0f172a]">Key Statcast Metrics:</h4>
                  <ul className="space-y-3 text-gray-700 font-sans">
                    <li><strong>Exit Velocity (EV):</strong> Measured by radar tracking the ball immediately off the bat. League average ~88 mph</li>
                    <li><strong>Launch Angle (LA):</strong> Measured by cameras tracking ball trajectory. 0° = line drive, +45° = pop-up, -45° = grounder</li>
                    <li><strong>Barrel Rate:</strong> (# of Barrels / # of Batted Ball Events) × 100</li>
                    <li><strong>Hard Hit Rate:</strong> Percentage of batted balls with EV ≥ 95 mph</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg mb-3 text-[#0f172a]">Expected Batting Average (xBA):</h4>
                  <p className="text-gray-700 font-sans mb-3">
                    Statcast compares each batted ball's exit velocity and launch angle to thousands of similar balls in the database:
                  </p>
                  <ol className="space-y-2 list-decimal list-inside text-gray-700 font-sans">
                    <li>Record the EV and LA for a batted ball (e.g., 102 mph at 18°)</li>
                    <li>Find all historical balls with similar EV/LA combinations</li>
                    <li>Calculate what % became hits (e.g., 75% became hits)</li>
                    <li>That probability is the xBA for this batted ball (.750 xBA)</li>
                    <li>Average all batted balls over a season to get player's xBA</li>
                  </ol>
                </div>

                <div className="bg-[#ecfdf3] p-6 border-l-4 border-[#06b6d4]">
                  <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-3 tracking-widest">EXAMPLE CALCULATION</h4>
                  <p className="font-sans text-gray-800 mb-3">
                    Player has 400 batted ball events over a season with the following breakdown:
                  </p>
                  <div className="space-y-2 font-sans text-gray-800">
                    <p><strong>Barrels:</strong> 48 barrels (98+ mph, 26-30°)</p>
                    <p><strong>Hard-hit balls:</strong> 180 balls with EV ≥ 95 mph</p>
                    <p><strong>Average Exit Velocity:</strong> 91.5 mph (above league average 88 mph)</p>
                    <p className="mt-3"><strong>Barrel Rate:</strong> 48 / 400 = <strong className="text-[#06b6d4]">12%</strong> (excellent!)</p>
                    <p><strong>Hard-Hit Rate:</strong> 180 / 400 = <strong className="text-[#06b6d4]">45%</strong> (elite!)</p>
                    <p className="text-sm italic mt-3">League average barrel rate is ~6-8%. This player is well above average and likely an All-Star caliber hitter.</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 font-sans italic">
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
            <h2 className="text-3xl font-display font-bold mb-6">Spin Rate & Pitch Movement</h2>
            <p className="text-gray-700 mb-4">
              <strong>Spin Rate</strong> measures how many revolutions per minute (RPM) a pitch rotates. Higher spin typically creates
              more movement and makes pitches harder to hit. Statcast tracks spin with precision for every single pitch.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#fef2f2] border-2 border-[#3b82f6] p-6">
                <h4 className="font-display font-bold text-xl mb-3 text-[#3b82f6]">Fastball Spin</h4>
                <p className="font-sans text-gray-700 mb-3">
                  Four-seam fastballs with high spin rates create "rise" effect (backspin fights gravity). Hitters swing under high-spin fastballs.
                </p>
                <ul className="text-sm text-gray-700 font-sans space-y-1">
                  <li>• <strong>Elite:</strong> 2,500+ RPM (Gerrit Cole, Spencer Strider)</li>
                  <li>• <strong>Above average:</strong> 2,300-2,500 RPM</li>
                  <li>• <strong>Average:</strong> 2,200 RPM</li>
                  <li>• <strong>Low spin:</strong> Below 2,100 RPM (sinkers, not four-seamers)</li>
                </ul>
              </div>

              <div className="bg-[#ecfdf3] border-2 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold text-xl mb-3 text-[#06b6d4]">Breaking Ball Spin</h4>
                <p className="font-sans text-gray-700 mb-3">
                  Curveballs and sliders with high spin rates have sharper, more deceptive movement. Spin axis determines break direction.
                </p>
                <ul className="text-sm text-gray-700 font-sans space-y-1">
                  <li>• <strong>Elite curveball:</strong> 2,800+ RPM</li>
                  <li>• <strong>Elite slider:</strong> 2,600+ RPM</li>
                  <li>• <strong>Average curveball:</strong> 2,500 RPM</li>
                  <li>• <strong>Average slider:</strong> 2,400 RPM</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 font-sans">
              <strong>Spin axis</strong> is equally important—a fastball with topspin will sink, while backspin creates ride. "Seam-shifted wake"
              describes how seam orientation affects movement beyond spin alone. Modern pitchers optimize both spin rate and axis for maximum effectiveness.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Bat Tracking Metrics</h2>
            <p className="text-gray-700 mb-4">
              Statcast now tracks bat speed, swing length, and bat path using high-speed cameras. This reveals hitting mechanics that were previously invisible.
            </p>

            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-8">
              <h4 className="font-display font-bold text-lg mb-3 text-[#0f172a]">Key Bat Metrics:</h4>
              <ul className="space-y-4 text-gray-700 font-sans">
                <li>
                  <strong>Bat Speed (mph):</strong> Peak speed of the bat barrel through the hitting zone. Elite hitters like Aaron Judge have 80+ mph bat speed,
                  while average is ~70-75 mph. Bat speed directly correlates with exit velocity and power.
                </li>
                <li>
                  <strong>Swing Length (feet):</strong> The distance the bat travels from launch to contact. Shorter swings (6-7 ft) make contact more consistent.
                  Longer swings (7.5+ ft) generate more power but lower contact rates.
                </li>
                <li>
                  <strong>Attack Angle (degrees):</strong> The vertical angle of the bat path at contact. Positive attack angles (upward swing) match the downward
                  plane of most pitches, creating optimal contact. +10° to +15° is common for power hitters.
                </li>
                <li>
                  <strong>Time to Contact:</strong> How long from swing initiation to ball contact. Faster hitters can wait longer on pitches, improving pitch recognition.
                  Elite: under 0.15 seconds.
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              These metrics help identify mechanical flaws. A hitter with high bat speed but low exit velocity may have poor attack angle or
              timing issues. Teams use this data for swing adjustments and player development.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Swing Decision Metrics</h2>
            <p className="text-gray-700 mb-4">
              Statcast tracks every swing decision—when hitters swing, when they don't, and the outcomes. This measures plate discipline and pitch recognition.
            </p>

            <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#22d3ee] mb-4">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">CHASE RATE & ZONE%</span>
              </div>
              <p className="text-[#f8fafc] mb-4 font-sans text-lg">
                Two critical plate discipline metrics:
              </p>
              <ul className="text-[#e2e8f0] space-y-3 mb-0 font-sans">
                <li>
                  <strong>Chase Rate (O-Swing%):</strong> How often a hitter swings at pitches outside the strike zone.
                  <ul className="ml-6 mt-2 space-y-1 text-sm">
                    <li>• <strong>Elite discipline:</strong> Below 25% (Juan Soto, Luis Arraez)</li>
                    <li>• <strong>Average:</strong> 28-32%</li>
                    <li>• <strong>Free swinger:</strong> Above 35%</li>
                  </ul>
                </li>
                <li className="mt-3">
                  <strong>Zone Swing% (Z-Swing%):</strong> How often a hitter swings at pitches in the strike zone.
                  <ul className="ml-6 mt-2 space-y-1 text-sm">
                    <li>• <strong>Aggressive:</strong> Above 70%</li>
                    <li>• <strong>Average:</strong> 65-68%</li>
                    <li>• <strong>Passive:</strong> Below 60% (may take too many strikes)</li>
                  </ul>
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              The best hitters swing at strikes and lay off balls. Low chase rate + high zone swing% = elite plate discipline. This leads to better
              walks, fewer strikeouts, and better pitch selection for hitting.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Defense & Arm Strength</h2>
            <p className="text-gray-700 mb-4">
              Statcast revolutionized defensive measurement by tracking player movement and throw velocity with precision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] p-6">
                <h4 className="font-display font-bold text-xl mb-3 text-[#0f172a]">Arm Strength (MPH)</h4>
                <p className="font-sans text-gray-700 mb-3">
                  Measures the velocity of throws from outfielders, catchers, and infielders.
                </p>
                <ul className="text-sm text-gray-700 font-sans space-y-1">
                  <li>• <strong>Elite OF arm:</strong> 95+ mph (Jesse Winker type)</li>
                  <li>• <strong>Average OF:</strong> 87-90 mph</li>
                  <li>• <strong>Elite C arm:</strong> 85+ mph (pop time matters too)</li>
                  <li>• <strong>Elite IF arm:</strong> 90+ mph across diamond</li>
                </ul>
              </div>

              <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] p-6">
                <h4 className="font-display font-bold text-xl mb-3 text-[#0f172a]">Pop Time (Catchers)</h4>
                <p className="font-sans text-gray-700 mb-3">
                  Time from pitch hitting catcher's glove to ball reaching second base on steal attempts.
                </p>
                <ul className="text-sm text-gray-700 font-sans space-y-1">
                  <li>• <strong>Elite:</strong> Under 1.90 seconds (J.T. Realmuto)</li>
                  <li>• <strong>Above average:</strong> 1.90-2.00 seconds</li>
                  <li>• <strong>Average:</strong> 2.00-2.05 seconds</li>
                  <li>• <strong>Below average:</strong> Above 2.05 seconds</li>
                </ul>
              </div>
            </div>
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
