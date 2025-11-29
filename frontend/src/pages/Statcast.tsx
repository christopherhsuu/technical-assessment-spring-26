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
