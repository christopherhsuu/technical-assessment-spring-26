// Pitching Metrics Page - FIP and xFIP
import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';

const Pitching: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-red-400 to-pink-600 text-white py-16 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <div className="text-6xl mb-4">⚡</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Pitching Metrics</h1>
          <p className="text-xl">Predicting future performance better than ERA</p>
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
