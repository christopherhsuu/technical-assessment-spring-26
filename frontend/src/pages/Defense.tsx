// Defensive Metrics Page
// Comprehensive explanation of defensive evaluation and modern metrics

import { motion } from 'framer-motion';
import { Shield, TrendingUp, Target, Activity, Eye } from 'lucide-react';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import StatCard from '../components/StatCard';

const Defense: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#1e293b] text-white py-20 px-4 overflow-hidden border-b-4 border-[#06b6d4]">
        {/* Background chart grid */}
        <div className="absolute inset-0 opacity-[0.05]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#06b6d4]" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#06b6d4] border-2 border-[#22d3ee]">
            <span className="font-mono text-sm tracking-widest text-[#0f172a] font-bold">DEFENSIVE ANALYTICS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-[#f8fafc]">DEFENSIVE</span>
            <br/>
            <span className="text-[#06b6d4]">METRICS</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#e2e8f0] font-sans max-w-2xl">
            Measuring the invisible half of baseball: How modern metrics finally captured defensive value
          </p>
        </motion.div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="prose prose-lg max-w-none">

          {/* Core Question */}
          <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
            <p className="text-[#f8fafc] text-2xl font-sans leading-relaxed mb-0">
              <strong className="text-[#22d3ee]">"How many runs did this player save (or cost) their team with their glove?"</strong>
            </p>
            <p className="text-[#e2e8f0] mt-4 mb-0 font-sans">
              Defense was baseball's "dark matter" for over a century—everyone knew it mattered, but no one could measure it properly.
              Errors and fielding percentage captured only a tiny fraction of defensive value, ignoring the most important skill: range.
            </p>
          </div>

          {/* The Traditional Era */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">The Traditional Era: Errors and Fielding Percentage</h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              For most of baseball history, defense was evaluated almost exclusively through two statistics:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] p-6">
                <div className="font-display font-black text-2xl text-[#0f172a] mb-2">ERRORS</div>
                <div className="text-sm text-gray-600 font-sans mb-3">Simple count of defensive mistakes</div>
                <div className="text-xs text-gray-500 font-mono">Bobbled balls, bad throws, dropped catches</div>
              </div>
              <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] p-6">
                <div className="font-display font-black text-2xl text-[#0f172a] mb-2">FPCT</div>
                <div className="text-sm text-gray-600 font-sans mb-3">Fielding Percentage</div>
                <div className="text-xs text-gray-500 font-mono">(PO + A) / (PO + A + E)</div>
              </div>
            </div>

            <div className="bg-[#fef2f2] border-l-4 border-[#3b82f6] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#3b82f6]">The Fatal Flaw: Range Doesn't Count</h4>
              <p className="text-gray-700 font-sans mb-4">
                Errors and fielding percentage share a catastrophic blindspot: <strong>they only count plays the fielder actually touches</strong>.
                If a ball is hit 10 feet to a shortstop's left and they can't get to it, nothing gets recorded. No error. No penalty.
              </p>
              <p className="text-gray-700 font-sans mb-4">
                This creates a perverse incentive. The easiest way to have a high fielding percentage is to have <em>limited range</em>.
                If you only attempt easy plays, you'll make fewer errors. But you'll also let dozens of hittable balls become singles.
              </p>
              <p className="text-gray-700 font-sans mb-0">
                Meanwhile, an aggressive defender with exceptional range might commit more errors (because they attempt difficult plays),
                but they'll get to 50+ balls per season that an average defender wouldn't reach. Those extra outs are worth <strong>far more</strong> than
                avoiding a few errors.
              </p>
            </div>

            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-6">
              <h4 className="font-display font-bold text-xl mb-4 text-[#0f172a]">Example: The Range Paradox</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-[#ecfdf3] border-2 border-[#06b6d4]">
                  <div className="font-display font-black text-3xl text-[#0f172a] mb-4">Shortstop A</div>
                  <div className="space-y-2 mb-4">
                    <div className="font-mono text-xl text-[#1e293b]">.985 FPCT</div>
                    <div className="text-sm text-gray-600 font-sans">5 errors, limited range</div>
                    <div className="text-sm text-gray-600 font-sans">400 balls in zone, 320 converted</div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-[#ecfdf3] border-2 border-[#06b6d4]">
                    <span className="text-sm text-[#06b6d4] font-bold font-mono">80% CONVERSION</span>
                  </div>
                </div>

                <div className="text-center p-6 bg-[#fef2f2] border-2 border-[#3b82f6]">
                  <div className="font-display font-black text-3xl text-[#0f172a] mb-4">Shortstop B</div>
                  <div className="space-y-2 mb-4">
                    <div className="font-mono text-xl text-[#1e293b]">.970 FPCT</div>
                    <div className="text-sm text-gray-600 font-sans">12 errors, excellent range</div>
                    <div className="text-sm text-gray-600 font-sans">500 balls in zone, 440 converted</div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-[#fef2f2] border-2 border-[#3b82f6]">
                    <span className="text-sm text-[#3b82f6] font-bold font-mono">88% CONVERSION</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#f8fafc] border-l-4 border-[#06b6d4] p-6 mt-6">
                <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">The Verdict</h4>
                <p className="text-gray-800 font-sans mb-0">
                  Shortstop A has the better fielding percentage (.985 vs .970), but Shortstop B made <strong className="text-[#06b6d4]">120 more outs</strong> (440 vs 320).
                  Those extra 120 outs prevented roughly <strong>60 runs</strong> over the season. Traditional stats couldn't see this.
                </p>
              </div>
            </div>
          </section>

          {/* The Revolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">The Revolution: Measuring What Matters</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              Starting in the early 2000s, researchers developed metrics that finally measured defensive value properly:
              <strong className="text-[#06b6d4]"> range</strong>, <strong className="text-[#3b82f6]">arm strength</strong>,
              and <strong className="text-[#06b6d4]">positioning</strong>. These metrics answer the core question: "How many runs did this defender save?"
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard
                title="DRS"
                value="Runs Saved"
                description="Defensive Runs Saved (Sports Info Solutions)"
                icon={<Shield size={32} strokeWidth={2.5} />}
                color="blue"
              />
              <StatCard
                title="UZR"
                value="Zone Rating"
                description="Ultimate Zone Rating (FanGraphs)"
                icon={<Target size={32} strokeWidth={2.5} />}
                color="green"
              />
              <StatCard
                title="OAA"
                value="Statcast"
                description="Outs Above Average (MLB Statcast)"
                icon={<Activity size={32} strokeWidth={2.5} />}
                color="red"
              />
              <StatCard
                title="FRV"
                value="Run Value"
                description="Fielding Run Value (Baseball Prospectus)"
                icon={<TrendingUp size={32} strokeWidth={2.5} />}
                color="gray"
              />
            </div>
          </section>

          {/* DRS Deep Dive */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">DRS: Defensive Runs Saved</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              <strong>Defensive Runs Saved (DRS)</strong>, developed by Sports Info Solutions (SIS), is the most comprehensive defensive metric.
              It combines multiple components to estimate total runs saved above/below average.
            </p>

            <div className="bg-white border-2 border-[#e2e8f0] p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={32} className="text-[#06b6d4]" strokeWidth={2.5} />
                <h3 className="text-2xl font-display font-black text-[#0f172a] mb-0">DRS Components</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                  <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-2 tracking-widest">RANGE RUNS</h4>
                  <p className="text-gray-700 font-sans text-sm mb-0">
                    Measures plays made compared to expected based on ball location, speed, and trajectory. Divides field into zones.
                    Calculates: "What percentage of fielders historically make this play?" Rewards getting to difficult balls.
                  </p>
                </div>

                <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                  <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-2 tracking-widest">ERROR RUNS</h4>
                  <p className="text-gray-700 font-sans text-sm mb-0">
                    Accounts for errors, but weighted by difficulty. Bobbling a routine grounder costs more runs than dropping a
                    diving catch. Not just error count—considers context of each play.
                  </p>
                </div>

                <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                  <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-2 tracking-widest">ARM RUNS (OUTFIELDERS)</h4>
                  <p className="text-gray-700 font-sans text-sm mb-0">
                    Measures throwing effectiveness—preventing extra bases, getting runners out. Considers arm strength and accuracy.
                    Strong, accurate arms prevent 5-10 runs per season by holding runners.
                  </p>
                </div>

                <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                  <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-2 tracking-widest">DOUBLE PLAY RUNS (INFIELDERS)</h4>
                  <p className="text-gray-700 font-sans text-sm mb-0">
                    Measures ability to turn double plays compared to average. Factors in speed of runners, ball location, game situation.
                    Elite middle infielders turn 10-15 more DPs per season than average.
                  </p>
                </div>
              </div>

              <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] p-6 mt-6">
                <p className="font-mono text-base text-gray-800 mb-2">
                  DRS = Range Runs + Error Runs + Arm Runs + DP Runs
                </p>
                <p className="text-sm text-gray-600 font-sans mt-3">
                  All components measured in runs above/below average. Zero is league average.
                </p>
              </div>
            </div>

            {/* DRS Scale */}
            <div className="bg-[#0f172a] border-4 border-[#06b6d4] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#06b6d4] mb-4">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">DRS SCALE</span>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#06b6d4]">
                    <th className="py-3 text-left text-[#22d3ee] font-display font-bold">DRS</th>
                    <th className="py-3 text-left text-[#22d3ee] font-display font-bold">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e293b]">
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">+20 or better</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Historic, generational defender</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">+15 to +20</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Gold Glove caliber, elite</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">+10 to +15</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Excellent defender</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">+5 to +10</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Above average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">-5 to +5</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Average range</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">-10 to -5</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Below average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">-15 to -10</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Poor defender, significant liability</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">-20 or worse</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Historically bad, DH candidate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* How Range is Calculated */}
            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#22d3ee] mb-6">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">HOW IT WORKS</span>
              </div>

              <h3 className="text-2xl font-display font-black mb-4 text-[#0f172a]">Calculating Range Runs</h3>

              <p className="text-gray-700 font-sans mb-4">
                The field is divided into precise zones. For every batted ball, video scouts record:
              </p>

              <ol className="space-y-3 text-gray-700 font-sans mb-6 list-decimal list-inside">
                <li><strong>Location:</strong> Exact zone where ball was hit</li>
                <li><strong>Type:</strong> Groundball, line drive, fly ball, popup</li>
                <li><strong>Velocity:</strong> Soft, medium, hard</li>
                <li><strong>Result:</strong> Did fielder make the play?</li>
              </ol>

              <div className="bg-[#ecfdf3] border-2 border-[#06b6d4] p-6 my-6">
                <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-3 tracking-widest">EXAMPLE CALCULATION</h4>
                <p className="font-sans text-gray-800 mb-3">
                  A ball is hit to shallow right field, medium velocity, line drive trajectory.
                </p>
                <div className="space-y-2 font-sans text-gray-800">
                  <p><strong>Historical conversion rate:</strong> 40% of right fielders make this play</p>
                  <p><strong>Expected outs:</strong> 0.40</p>
                  <p><strong>Actual result:</strong> Fielder makes the catch = 1.00 out</p>
                  <p><strong>Plays above average:</strong> 1.00 - 0.40 = 0.60 plays</p>
                  <p><strong>Run value (out vs. single):</strong> ~0.80 runs</p>
                  <p className="text-lg mt-3">Runs saved on this play = 0.60 × 0.80 = <strong className="text-[#06b6d4]">+0.48 runs</strong></p>
                </div>
                <p className="text-sm text-gray-600 italic mt-4">
                  Over a full season of 1,400+ innings, hundreds of these plays accumulate into the final DRS total.
                </p>
              </div>
            </div>
          </section>

          {/* UZR */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">UZR: Ultimate Zone Rating</h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              <strong>Ultimate Zone Rating (UZR)</strong>, published by FanGraphs, uses a similar methodology to DRS but with
              different data sources and zone definitions. Both measure runs saved above/below average.
            </p>

            <div className="bg-[#f8fafc] border-l-4 border-[#06b6d4] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">DRS vs. UZR: What's the Difference?</h4>
              <ul className="space-y-3 text-gray-700 font-sans text-sm">
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Different data providers:</strong> DRS uses Sports Info Solutions data; UZR uses Baseball Info Solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Zone definitions vary slightly:</strong> Different ways of dividing the field</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>High correlation (~0.85-0.90):</strong> They usually agree on who's good/bad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Both are valid:</strong> Use DRS if available (more widely cited), UZR is fine too</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-[#e2e8f0] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#0f172a]">UZR/150: Normalized Scale</h4>
              <p className="text-gray-700 font-sans mb-3">
                UZR is often presented as <strong>UZR/150</strong>, which normalizes to 150 games (roughly a full season).
                This allows fair comparison between players with different playing time.
              </p>
              <p className="text-gray-700 font-sans mb-0">
                Scale is identical to DRS: 0 = average, +15 = elite, -15 = poor
              </p>
            </div>
          </section>

          {/* OAA: Statcast Revolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">OAA: The Statcast Revolution</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              <strong>Outs Above Average (OAA)</strong> represents the next evolution in defensive metrics. Instead of relying on
              human video scouts to classify plays, OAA uses <strong>measured Statcast data</strong>: exit velocity, launch angle,
              direction, and sprint speed.
            </p>

            <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#22d3ee] mb-4">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">THE BREAKTHROUGH</span>
              </div>
              <p className="text-[#f8fafc] text-xl font-sans leading-relaxed mb-0">
                For every batted ball, Statcast knows the <strong className="text-[#22d3ee]">exact exit velocity</strong> (e.g., 95.3 mph),
                <strong className="text-[#22d3ee]"> launch angle</strong> (e.g., 28°), and <strong className="text-[#22d3ee]">direction</strong>.
                Using millions of tracked balls, MLB calculates: "What's the historical catch probability for this exact batted ball profile?"
              </p>
            </div>

            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-8">
              <div className="flex items-center gap-3 mb-6">
                <Eye size={32} className="text-[#06b6d4]" strokeWidth={2.5} />
                <h3 className="text-2xl font-display font-black text-[#0f172a] mb-0">How OAA Works</h3>
              </div>

              <div className="bg-[#ecfdf3] border-2 border-[#06b6d4] p-6 mb-6">
                <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-3 tracking-widest">CATCH PROBABILITY</h4>
                <p className="text-gray-700 font-sans mb-3">
                  Every batted ball gets assigned a <strong>catch probability</strong> from 0% to 100% based on historical data:
                </p>
                <div className="space-y-2 text-sm text-gray-700 font-sans">
                  <p>• <strong>90%+ catch probability:</strong> Routine play, almost everyone makes it</p>
                  <p>• <strong>50-90% catch probability:</strong> Moderate difficulty</p>
                  <p>• <strong>25-50% catch probability:</strong> Difficult play, requires good range</p>
                  <p>• <strong>Under 25%:</strong> Very difficult, spectacular plays</p>
                  <p>• <strong>Under 10%:</strong> 4-5 star catches, highlight reel</p>
                </div>
              </div>

              <div className="bg-[#fef2f2] border-2 border-[#3b82f6] p-6">
                <h4 className="font-mono font-bold text-sm text-[#3b82f6] mb-3 tracking-widest">EXAMPLE</h4>
                <p className="font-sans text-gray-800 mb-3">
                  Ball hit at 98 mph, 32° launch angle, to center field
                </p>
                <div className="space-y-2 font-sans text-gray-800 text-sm">
                  <p><strong>Statcast catch probability:</strong> 35% (difficult play)</p>
                  <p><strong>Expected outs:</strong> 0.35</p>
                  <p><strong>Fielder makes the catch:</strong> 1.00 out</p>
                  <p><strong>Outs above average:</strong> 1.00 - 0.35 = +0.65 outs</p>
                </div>
                <p className="text-xs text-gray-600 italic mt-3">
                  Accumulate these over a season to get total OAA
                </p>
              </div>
            </div>

            <div className="bg-[#f8fafc] border-l-4 border-[#06b6d4] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">Why OAA is Revolutionary</h4>
              <ul className="space-y-3 text-gray-700 font-sans text-sm">
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Objective measurement:</strong> No human classification bias, uses actual tracked ball flight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Accounts for difficulty:</strong> Makes spectacular catch = credited properly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Publicly available:</strong> Updated daily on Baseball Savant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Correlates well with DRS/UZR:</strong> All three usually agree (~0.75-0.85 correlation)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Statcast Supporting Metrics */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">Statcast: Supporting Metrics</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              Statcast provides additional metrics that help explain <em>why</em> a player has good or bad defensive value:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#ecfdf3] border-2 border-[#06b6d4] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Activity size={28} className="text-[#06b6d4]" strokeWidth={2.5} />
                  <h4 className="font-display font-bold text-xl text-[#06b6d4] mb-0">Sprint Speed</h4>
                </div>
                <p className="font-sans text-gray-700 mb-3 text-sm">
                  Measures maximum speed in feet/second. Faster players cover more ground, leading to better range.
                </p>
                <div className="space-y-1 text-xs text-gray-700 font-sans">
                  <p>• <strong>Elite:</strong> 30+ ft/sec (Byron Buxton, Trea Turner)</p>
                  <p>• <strong>Above avg:</strong> 28-30 ft/sec</p>
                  <p>• <strong>Average:</strong> 27 ft/sec</p>
                  <p>• <strong>Below avg:</strong> Under 27 ft/sec</p>
                </div>
              </div>

              <div className="bg-[#fef2f2] border-2 border-[#3b82f6] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Target size={28} className="text-[#3b82f6]" strokeWidth={2.5} />
                  <h4 className="font-display font-bold text-xl text-[#3b82f6] mb-0">Reaction Time</h4>
                </div>
                <p className="font-sans text-gray-700 mb-3 text-sm">
                  Time from bat-ball contact until first movement. Quicker reactions = better jumps on balls.
                </p>
                <div className="space-y-1 text-xs text-gray-700 font-sans">
                  <p>• <strong>Elite:</strong> Under 0.70 seconds</p>
                  <p>• <strong>Good:</strong> 0.70-0.75 seconds</p>
                  <p>• <strong>Average:</strong> 0.75-0.80 seconds</p>
                  <p>• <strong>Slow:</strong> Above 0.80 seconds</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#e2e8f0] p-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#0f172a]">The Connection</h4>
              <p className="text-gray-700 font-sans text-sm mb-0">
                A center fielder with <strong>30 ft/sec sprint speed</strong> and <strong>0.65 sec reaction time</strong> will cover
                significantly more ground than an average defender (27 ft/sec, 0.75 sec reaction). This translates directly to
                higher DRS/UZR/OAA values—they simply get to more balls.
              </p>
            </div>
          </section>

          {/* Positional Adjustments */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">Positional Context Matters</h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              Not all defensive positions are equally difficult. A +10 DRS center fielder is more valuable than a +10 DRS
              first baseman because center field is harder to play and affects more balls.
            </p>

            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-6">
              <h4 className="font-display font-bold text-xl mb-4 text-[#0f172a]">Defensive Spectrum</h4>
              <p className="text-gray-700 font-sans mb-4 text-sm">
                Positions ranked by difficulty (hardest to easiest):
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-32 font-mono font-bold text-sm text-[#06b6d4]">Catcher</div>
                  <div className="flex-1 bg-[#06b6d4] h-8"></div>
                  <div className="text-xs text-gray-600 font-sans">Most difficult, unique skills</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 font-mono font-bold text-sm text-[#06b6d4]">Shortstop</div>
                  <div className="flex-1 bg-[#06b6d4] opacity-90 h-8"></div>
                  <div className="text-xs text-gray-600 font-sans">Premium, most balls in play</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 font-mono font-bold text-sm text-[#06b6d4]">Center Field</div>
                  <div className="flex-1 bg-[#06b6d4] opacity-80 h-8"></div>
                  <div className="text-xs text-gray-600 font-sans">Premium, large coverage area</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 font-mono font-bold text-sm text-gray-700]">Second Base</div>
                  <div className="flex-1 bg-gray-400 opacity-70 h-8"></div>
                  <div className="text-xs text-gray-600 font-sans">Above average difficulty</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 font-mono font-bold text-sm text-gray-700]">Third Base</div>
                  <div className="flex-1 bg-gray-400 opacity-60 h-8"></div>
                  <div className="text-xs text-gray-600 font-sans">Above average difficulty</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 font-mono font-bold text-sm text-gray-700">Corner OF</div>
                  <div className="flex-1 bg-gray-400 opacity-50 h-8"></div>
                  <div className="text-xs text-gray-600 font-sans">Average difficulty</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 font-mono font-bold text-sm text-[#3b82f6]">First Base</div>
                  <div className="flex-1 bg-[#3b82f6] opacity-40 h-8"></div>
                  <div className="text-xs text-gray-600 font-sans">Easiest non-DH position</div>
                </div>
              </div>
            </div>
          </section>

          {/* How Teams Use This */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">How MLB Teams Use Defensive Metrics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Player Acquisition</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Undervalued defenders with +15 DRS can be acquired for less than their true value contributes.
                  Defense saves runs just like offense creates them.
                </p>
              </div>
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Positional Decisions</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Move declining defenders from premium positions (SS, CF) to easier spots (1B, LF, DH) to minimize
                  defensive liability while keeping bat in lineup.
                </p>
              </div>
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Defensive Shifts</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Use spray chart data and defender range profiles to position fielders optimally for each batter.
                  Can save 10-20 runs per season.
                </p>
              </div>
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Contract Valuation</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  A +20 DRS defender saves ~2 WAR on defense alone. That's worth $16M+ on the free agent market.
                  Defense can command premium salary.
                </p>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">Limitations and Caveats</h2>

            <div className="bg-[#fef2f2] border-l-4 border-[#3b82f6] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#3b82f6]">What to Watch For</h4>
              <ul className="space-y-3 text-gray-700 font-sans text-sm">
                <li className="flex items-start">
                  <span className="text-[#3b82f6] mr-2 text-xl">•</span>
                  <span><strong>Sample size:</strong> Defense metrics stabilize slower than offense. Need ~3 years of data for reliable assessment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3b82f6] mr-2 text-xl">•</span>
                  <span><strong>Year-to-year variance:</strong> DRS/UZR can swing ±10 runs between seasons for the same player. Average multiple years.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3b82f6] mr-2 text-xl">•</span>
                  <span><strong>Positioning matters:</strong> Team defensive shifts affect individual metrics. A player in optimal position looks better.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3b82f6] mr-2 text-xl">•</span>
                  <span><strong>Doesn't capture everything:</strong> Pitcher familiarity, situational awareness, leadership aren't measured.</span>
                </li>
              </ul>
            </div>
          </section>

        </motion.div>

        <Quiz
          quizId="defense"
          question="What's the biggest problem with using errors to evaluate defense?"
          options={[
            'Errors happen too often',
            'Doesn\'t measure range—only counts balls touched',
            'Errors are too rare to matter',
            'Too subjective and biased'
          ]}
          correctAnswer={1}
        />

        <Quiz
          quizId="defense-2"
          question="What makes OAA (Outs Above Average) revolutionary compared to DRS/UZR?"
          options={[
            'It measures more plays',
            'It uses objective Statcast data instead of human classification',
            'It only works for outfielders',
            'It\'s easier to calculate'
          ]}
          correctAnswer={1}
        />

        <Quiz
          quizId="defense-3"
          question="A defender with +15 DRS is considered:"
          options={[
            'Below average',
            'Average',
            'Above average',
            'Gold Glove caliber, elite'
          ]}
          correctAnswer={3}
        />

        <Comments pageRoute="/defense" />
      </article>
    </div>
  );
};

export default Defense;
