// Defensive Metrics Page
import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';

const Defense: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-400 to-green-600 text-white py-16 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <div className="text-6xl mb-4">🛡️</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Defensive Metrics</h1>
          <p className="text-xl">Measuring defense beyond errors</p>
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
