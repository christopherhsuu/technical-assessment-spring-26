// Offensive Metrics Page
// Comprehensive explanation of offensive statistics evolution and modern metrics

import { motion } from 'framer-motion';
import { TrendingUp, Target, Percent, BarChart3, Award, Calculator } from 'lucide-react';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import StatCard from '../components/StatCard';

const Offense: React.FC = () => {
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
            <span className="font-mono text-sm tracking-widest text-[#0f172a] font-bold">HITTING ANALYTICS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-[#f8fafc]">OFFENSIVE</span>
            <br/>
            <span className="text-[#22d3ee]">METRICS</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#e2e8f0] font-sans max-w-2xl">
            From batting average to wOBA: The evolution of measuring offensive value
          </p>
        </motion.div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="prose prose-lg max-w-none">

          {/* Core Question */}
          <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
            <p className="text-[#f8fafc] text-2xl font-sans leading-relaxed mb-0">
              <strong className="text-[#22d3ee]">"How much did this player's offensive performance contribute to their team scoring runs?"</strong>
            </p>
            <p className="text-[#e2e8f0] mt-4 mb-0 font-sans">
              This simple question has driven decades of statistical innovation. The journey from batting average to wOBA represents
              baseball's evolution from subjective tradition to objective measurement.
            </p>
          </div>

          {/* The Traditional Era */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">The Traditional Era: Batting Average & RBIs</h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              For over a century, baseball evaluated hitters primarily through three statistics:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] p-4 text-center">
                <div className="font-display font-black text-2xl text-[#0f172a] mb-2">AVG</div>
                <div className="text-sm text-gray-600 font-sans">Batting Average</div>
                <div className="text-xs text-gray-500 font-mono mt-2">H / AB</div>
              </div>
              <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] p-4 text-center">
                <div className="font-display font-black text-2xl text-[#0f172a] mb-2">HR</div>
                <div className="text-sm text-gray-600 font-sans">Home Runs</div>
                <div className="text-xs text-gray-500 font-mono mt-2">Count</div>
              </div>
              <div className="bg-[#f8fafc] border-2 border-[#e2e8f0] p-4 text-center">
                <div className="font-display font-black text-2xl text-[#0f172a] mb-2">RBI</div>
                <div className="text-sm text-gray-600 font-sans">Runs Batted In</div>
                <div className="text-xs text-gray-500 font-mono mt-2">Count</div>
              </div>
            </div>

            <div className="bg-[#fef2f2] border-l-4 border-[#3b82f6] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#3b82f6]">The Fatal Flaws</h4>
              <ul className="space-y-3 text-gray-700 font-sans">
                <li className="flex items-start">
                  <span className="text-[#3b82f6] mr-2 text-xl">•</span>
                  <span><strong>Batting Average treats all hits equally:</strong> A bloop single counts the same as a 450-foot home run. This completely ignores power and extra-base hitting value.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3b82f6] mr-2 text-xl">•</span>
                  <span><strong>Batting Average ignores walks:</strong> Getting on base via walk is just as valuable as a single for run production, but doesn't appear in AVG.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3b82f6] mr-2 text-xl">•</span>
                  <span><strong>RBIs are context-dependent:</strong> A player batting 3rd or 4th will naturally have more RBI opportunities than a leadoff hitter, regardless of individual skill.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3b82f6] mr-2 text-xl">•</span>
                  <span><strong>No park or era adjustments:</strong> Hitting .300 in 1968 (the "Year of the Pitcher") was vastly harder than .300 in 2000 (steroid era).</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed font-sans">
              These limitations created obvious problems. A player hitting .280 with 40 home runs and 100 walks could be more valuable
              than a .320 hitter with no power and few walks—but traditional stats couldn't capture this.
            </p>
          </section>

          {/* The First Revolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">The First Revolution: OBP and SLG</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              By the 1970s-80s, sabermetricians recognized that run production depended on two fundamental abilities:
              <strong className="text-[#06b6d4]"> getting on base</strong> and <strong className="text-[#3b82f6]">hitting for power</strong>.
              This insight led to On-Base Percentage and Slugging Percentage.
            </p>

            {/* OBP Section */}
            <div className="bg-white border-2 border-[#e2e8f0] p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Target size={32} className="text-[#06b6d4]" strokeWidth={2.5} />
                <h3 className="text-2xl font-display font-black text-[#0f172a] mb-0">On-Base Percentage (OBP)</h3>
              </div>

              <p className="text-gray-700 font-sans mb-4">
                <strong>The insight:</strong> You can't score if you don't get on base. OBP measures how often a hitter reaches base
                through hits, walks, or hit-by-pitches.
              </p>

              <div className="bg-[#ecfdf3] border-2 border-[#06b6d4] p-6 my-4">
                <p className="font-mono text-lg text-gray-800 mb-2">
                  OBP = (H + BB + HBP) / (AB + BB + HBP + SF)
                </p>
                <div className="text-sm text-gray-600 font-sans mt-3">
                  <strong>Scale:</strong> League average ~.320 | Good .360+ | Elite .400+
                </div>
              </div>

              <div className="bg-[#f8fafc] border-l-4 border-[#06b6d4] p-4">
                <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-2 tracking-widest">WHY IT MATTERS</h4>
                <p className="text-gray-700 font-sans mb-0">
                  Studies of run expectancy show that reaching base—<em>regardless of how</em>—increases your team's expected runs.
                  A walk is roughly 95% as valuable as a single. OBP finally gave walks their proper credit.
                </p>
              </div>
            </div>

            {/* SLG Section */}
            <div className="bg-white border-2 border-[#e2e8f0] p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={32} className="text-[#3b82f6]" strokeWidth={2.5} />
                <h3 className="text-2xl font-display font-black text-[#0f172a] mb-0">Slugging Percentage (SLG)</h3>
              </div>

              <p className="text-gray-700 font-sans mb-4">
                <strong>The insight:</strong> Extra-base hits create exponentially more run-scoring opportunities. A double isn't just
                "better" than a single—it's <em>much</em> better.
              </p>

              <div className="bg-[#fef2f2] border-2 border-[#3b82f6] p-6 my-4">
                <p className="font-mono text-lg text-gray-800 mb-2">
                  SLG = (1B + 2×2B + 3×3B + 4×HR) / AB
                </p>
                <p className="text-sm text-gray-600 font-sans mt-2 mb-3">
                  Total Bases / At Bats
                </p>
                <div className="text-sm text-gray-600 font-sans">
                  <strong>Scale:</strong> Average .400 | Good .450 | Elite .500+
                </div>
              </div>

              <div className="bg-[#f8fafc] border-l-4 border-[#3b82f6] p-4">
                <h4 className="font-mono font-bold text-sm text-[#3b82f6] mb-2 tracking-widest">THE POWER OF EXTRA BASES</h4>
                <p className="text-gray-700 font-sans mb-3">
                  SLG weights hits by bases gained (1, 2, 3, or 4). With a runner on first:
                </p>
                <ul className="space-y-2 text-gray-700 font-sans text-sm">
                  <li><strong>Single:</strong> Advances runner to second (maybe third)</li>
                  <li><strong>Double:</strong> Likely scores the runner</li>
                  <li><strong>Home run:</strong> Guarantees two runs</li>
                </ul>
                <p className="text-gray-700 font-sans mt-3 mb-0">
                  Historical analysis shows each additional base creates disproportionately more value. This is why power hitters
                  command premium salaries.
                </p>
              </div>
            </div>
          </section>

          {/* OPS: The Imperfect Hybrid */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">OPS: The Imperfect Hybrid</h2>

            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              <strong>OPS (On-Base Plus Slugging)</strong> combines getting on base with hitting for power by simply adding
              OBP and SLG together. It's mathematically crude—you're adding two percentages with different denominators—but
              it works surprisingly well.
            </p>

            <div className="bg-[#0f172a] border-4 border-[#06b6d4] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#06b6d4] mb-4">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">OPS = OBP + SLG</span>
              </div>

              <table className="w-full mt-6">
                <thead>
                  <tr className="border-b-2 border-[#06b6d4]">
                    <th className="py-3 text-left text-[#22d3ee] font-display font-bold">OPS</th>
                    <th className="py-3 text-left text-[#22d3ee] font-display font-bold">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e293b]">
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc]">.700 or below</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Below average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc]">.700 - .800</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Average to above average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc]">.800 - .900</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Very good, All-Star caliber</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc]">.900 - 1.000</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Elite, MVP candidate</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc]">1.000+</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Historic season (very rare)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#fef2f2] border-l-4 border-[#3b82f6] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#3b82f6]">The "Adding Apples and Oranges" Problem</h4>
              <p className="text-gray-700 font-sans mb-3">
                OBP and SLG have different denominators. OBP includes walks and HBP in the denominator; SLG doesn't.
                This means you're not actually measuring the same opportunities.
              </p>
              <p className="text-gray-700 font-sans mb-0">
                Despite this mathematical impurity, OPS correlates very well with run production (~0.90 correlation).
                It's a useful shortcut, but not the final answer.
              </p>
            </div>
          </section>

          {/* OPS+: Adding Context */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">OPS+: Adjusting for Park and Era</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <StatCard
                title="League Adjustment"
                value="100 = AVG"
                description="Normalizes across different offensive eras (deadball, steroid, etc.)"
                icon={<BarChart3 size={32} strokeWidth={2.5} />}
                color="blue"
              />
              <StatCard
                title="Park Adjustment"
                value="Fair Comparison"
                description="Accounts for Coors Field vs. Oracle Park vs. neutral parks"
                icon={<Percent size={32} strokeWidth={2.5} />}
                color="red"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              <strong>OPS+ (On-Base Plus Slugging Plus)</strong> takes a player's OPS and adjusts it for:
            </p>

            <ul className="space-y-3 text-gray-700 font-sans mb-6">
              <li className="flex items-start">
                <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                <span><strong>League context:</strong> Offense was 25% lower in 1968 than 2000. OPS+ accounts for this.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                <span><strong>Ballpark factors:</strong> Coors Field (Colorado, high altitude) inflates offense by ~15%. OPS+ neutralizes this.</span>
              </li>
            </ul>

            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-6">
              <h4 className="font-display font-bold text-xl mb-4 text-[#0f172a]">OPS+ Scale</h4>
              <p className="text-gray-700 font-sans mb-4">
                <strong>100 is always league average.</strong> Every point above/below represents 1% better/worse than average.
              </p>
              <table className="w-full">
                <tbody className="divide-y-2 divide-[#e2e8f0]">
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg">80-90</td>
                    <td className="py-3 text-gray-700 font-sans">Below average (10-20% worse than average)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg">100</td>
                    <td className="py-3 text-gray-700 font-sans">Exactly league average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg">110-120</td>
                    <td className="py-3 text-gray-700 font-sans">Above average, solid regular</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg">120-140</td>
                    <td className="py-3 text-gray-700 font-sans">Very good, All-Star level</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg">140-160</td>
                    <td className="py-3 text-gray-700 font-sans">Elite, MVP candidate</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg">160+</td>
                    <td className="py-3 text-gray-700 font-sans">Historic, all-time great season</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
              <h4 className="font-mono font-bold text-sm text-[#06b6d4] mb-2 tracking-widest">WHY THIS MATTERS</h4>
              <p className="text-gray-700 font-sans mb-0">
                You can now compare Babe Ruth (1920s), Ted Williams (1940s-50s), and Mike Trout (2010s-20s) on equal footing.
                A 160 OPS+ in any era represents the same level of dominance relative to that era's competition.
              </p>
            </div>
          </section>

          {/* wOBA: The Modern Standard */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">wOBA: The Modern Standard</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              <strong>wOBA (weighted On-Base Average)</strong> represents the culmination of decades of research. Instead of
              arbitrarily weighting hits by bases (like SLG) or crudely adding two stats (like OPS), wOBA uses empirically
              derived weights based on actual run values.
            </p>

            <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#22d3ee] mb-4">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">THE BREAKTHROUGH</span>
              </div>
              <p className="text-[#f8fafc] text-xl font-sans leading-relaxed mb-0">
                By analyzing millions of plate appearances, researchers determined the <strong className="text-[#22d3ee]">exact
                run value</strong> of each offensive event. A double isn't arbitrarily worth "2" bases—it's worth precisely
                <strong className="text-[#22d3ee]"> 1.24 runs</strong> (in 2023). A walk isn't ignored—it's worth
                <strong className="text-[#22d3ee]"> 0.69 runs</strong>.
              </p>
            </div>

            {/* wOBA Calculation */}
            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator size={32} className="text-[#06b6d4]" strokeWidth={2.5} />
                <h3 className="text-2xl font-display font-black text-[#0f172a] mb-0">How wOBA Works</h3>
              </div>

              <div className="bg-[#f8fafc] p-6 border-l-4 border-[#3b82f6] mb-6">
                <h4 className="font-mono font-bold text-sm text-[#3b82f6] mb-3 tracking-widest">FORMULA (2023 WEIGHTS)</h4>
                <p className="font-mono text-sm md:text-base text-gray-800 break-words leading-relaxed">
                  wOBA = (0.69×BB + 0.72×HBP + 0.88×1B + 1.24×2B + 1.56×3B + 1.95×HR) / (AB + BB - IBB + SF + HBP)
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="font-display font-bold text-lg text-[#0f172a]">Component Run Values:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                    <div className="font-mono font-bold text-[#06b6d4] mb-1">0.69 × BB</div>
                    <div className="text-sm text-gray-700 font-sans">Walks worth 0.69 runs</div>
                  </div>
                  <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                    <div className="font-mono font-bold text-[#06b6d4] mb-1">0.72 × HBP</div>
                    <div className="text-sm text-gray-700 font-sans">Hit-by-pitch worth 0.72 runs</div>
                  </div>
                  <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                    <div className="font-mono font-bold text-[#06b6d4] mb-1">0.88 × 1B</div>
                    <div className="text-sm text-gray-700 font-sans">Singles worth 0.88 runs</div>
                  </div>
                  <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                    <div className="font-mono font-bold text-[#06b6d4] mb-1">1.24 × 2B</div>
                    <div className="text-sm text-gray-700 font-sans">Doubles worth 1.24 runs (41% more than singles!)</div>
                  </div>
                  <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                    <div className="font-mono font-bold text-[#06b6d4] mb-1">1.56 × 3B</div>
                    <div className="text-sm text-gray-700 font-sans">Triples worth 1.56 runs</div>
                  </div>
                  <div className="bg-[#ecfdf3] p-4 border-l-4 border-[#06b6d4]">
                    <div className="font-mono font-bold text-[#06b6d4] mb-1">1.95 × HR</div>
                    <div className="text-sm text-gray-700 font-sans">Home runs worth 1.95 runs (most valuable)</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#fef2f2] border-2 border-[#3b82f6] p-6">
                <h4 className="font-mono font-bold text-sm text-[#3b82f6] mb-3 tracking-widest">EXAMPLE CALCULATION</h4>
                <p className="font-sans text-gray-800 mb-3">
                  Player over 600 PA: 80 BB, 5 HBP, 120 1B, 35 2B, 3 3B, 25 HR, 500 AB, 8 SF
                </p>
                <div className="space-y-2 font-mono text-xs md:text-sm text-gray-900 mb-4">
                  <p>Numerator = (0.69×80) + (0.72×5) + (0.88×120) + (1.24×35) + (1.56×3) + (1.95×25)</p>
                  <p className="ml-4">= 55.2 + 3.6 + 105.6 + 43.4 + 4.68 + 48.75</p>
                  <p className="ml-4">= <strong className="text-[#06b6d4]">261.23</strong></p>
                  <p className="mt-2">Denominator = 500 + 80 - 0 + 8 + 5 = <strong className="text-[#06b6d4]">593</strong></p>
                  <p className="text-base md:text-lg mt-3 text-[#3b82f6]">wOBA = 261.23 / 593 = <strong>.440</strong> (Elite!)</p>
                </div>
                <p className="text-xs text-gray-600 font-sans italic mb-0">
                  Note: Weights are recalculated yearly based on league-wide run environment
                </p>
              </div>
            </div>

            {/* wOBA Scale */}
            <div className="bg-[#0f172a] border-4 border-[#06b6d4] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#06b6d4] mb-4">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">wOBA SCALE</span>
              </div>
              <p className="text-[#e2e8f0] mb-4 font-sans">
                wOBA is scaled to resemble on-base percentage for easy interpretation:
              </p>
              <table className="w-full">
                <tbody className="divide-y divide-[#1e293b]">
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">.320 or below</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Below average hitter</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">.320 - .360</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Average hitter</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">.360 - .400</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Good hitter</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono text-[#f8fafc] font-bold">.400+</td>
                    <td className="py-3 text-[#e2e8f0] font-sans">Elite hitter (All-Star to MVP level)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#f8fafc] border-l-4 border-[#06b6d4] p-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">Why wOBA Is Superior</h4>
              <ul className="space-y-3 text-gray-700 font-sans">
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Empirically derived:</strong> Weights based on millions of actual plate appearances, not arbitrary assignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Mathematically sound:</strong> Consistent denominator (unlike OPS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Correlates strongly with runs:</strong> ~0.95 correlation with team runs scored</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#06b6d4] mr-2 text-xl">•</span>
                  <span><strong>Credits all offensive events:</strong> Walks, HBP, and all hit types properly valued</span>
                </li>
              </ul>
            </div>
          </section>

          {/* wRC+: The Final Form */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">wRC+: Park and League Adjusted Perfection</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <StatCard
                title="wRC+"
                value="100 = AVG"
                description="wOBA adjusted for ballpark and league, scaled to 100"
                icon={<Award size={32} strokeWidth={2.5} />}
                color="blue"
              />
              <StatCard
                title="Direct Comparison"
                value="130 wRC+"
                description="30% better than average, regardless of era or park"
                icon={<BarChart3 size={32} strokeWidth={2.5} />}
                color="red"
              />
            </div>

            <p className="text-gray-700 leading-relaxed mb-4 font-sans">
              <strong>wRC+ (weighted Runs Created Plus)</strong> takes wOBA and applies the same park and league adjustments
              as OPS+, then scales it so <strong>100 is always league average</strong>.
            </p>

            <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">Why Park Adjustment Matters</h4>
              <p className="text-gray-700 font-sans mb-3">
                Consider two identical hitters playing 81 home games per year:
              </p>
              <ul className="space-y-2 text-gray-700 font-sans text-sm">
                <li><strong>Player A at Coors Field (Colorado):</strong> High altitude, thin air, balls fly ~15% farther. Offense inflated.</li>
                <li><strong>Player B at Oracle Park (San Francisco):</strong> Large outfield, cool weather, heavy marine air. Offense suppressed ~10%.</li>
              </ul>
              <p className="text-gray-700 font-sans mt-3 mb-0">
                Without park adjustment, Player A appears better despite identical skill. wRC+ neutralizes this bias.
              </p>
            </div>

            <div className="bg-white border-2 border-[#e2e8f0] p-8 my-6">
              <h4 className="font-display font-bold text-xl mb-4 text-[#0f172a]">wRC+ Scale</h4>
              <table className="w-full">
                <tbody className="divide-y-2 divide-[#e2e8f0]">
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg text-[#3b82f6]">80-90</td>
                    <td className="py-3 text-gray-700 font-sans">Below average (10-20% worse than average)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg">100</td>
                    <td className="py-3 text-gray-700 font-sans">Exactly league average</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg text-[#06b6d4]">110-120</td>
                    <td className="py-3 text-gray-700 font-sans">Above average, quality regular</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg text-[#06b6d4]">120-140</td>
                    <td className="py-3 text-gray-700 font-sans">Very good, All-Star caliber</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg text-[#06b6d4]">140-160</td>
                    <td className="py-3 text-gray-700 font-sans">Elite, MVP candidate</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-mono font-bold text-lg text-[#06b6d4]">160+</td>
                    <td className="py-3 text-gray-700 font-sans">Historic, all-time great season</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Real-World Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">Why These Metrics Matter: A Real Comparison</h2>

            <div className="bg-white border-2 border-[#e2e8f0] p-8 mb-6">
              <div className="inline-block px-3 py-1 bg-[#0f172a] mb-6">
                <span className="font-mono text-xs text-[#22d3ee] font-bold tracking-widest">TRADITIONAL STATS LIE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-center p-6 bg-[#fef2f2] border-2 border-[#3b82f6]">
                  <div className="font-display font-black text-3xl text-[#0f172a] mb-4">Player A</div>
                  <div className="space-y-2 mb-4">
                    <div className="font-mono text-2xl text-[#1e293b]">.280 AVG</div>
                    <div className="text-sm text-gray-600 font-sans">15 HR, 70 RBI</div>
                  </div>
                  <div className="border-t-2 border-[#e2e8f0] pt-4 space-y-2">
                    <div className="font-mono text-lg text-gray-800">.320 wOBA</div>
                    <div className="font-mono text-lg text-gray-800">90 wRC+</div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-[#fef2f2] border-2 border-[#3b82f6]">
                    <span className="text-sm text-[#3b82f6] font-bold font-mono">BELOW AVERAGE</span>
                  </div>
                </div>

                <div className="text-center p-6 bg-[#ecfdf3] border-2 border-[#06b6d4]">
                  <div className="font-display font-black text-3xl text-[#0f172a] mb-4">Player B</div>
                  <div className="space-y-2 mb-4">
                    <div className="font-mono text-2xl text-[#1e293b]">.250 AVG</div>
                    <div className="text-sm text-gray-600 font-sans">35 HR, 95 RBI, 90 BB</div>
                  </div>
                  <div className="border-t-2 border-[#e2e8f0] pt-4 space-y-2">
                    <div className="font-mono text-lg text-gray-800">.380 wOBA</div>
                    <div className="font-mono text-lg text-gray-800">135 wRC+</div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-[#ecfdf3] border-2 border-[#06b6d4]">
                    <span className="text-sm text-[#06b6d4] font-bold font-mono">ALL-STAR LEVEL</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fafc] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold text-lg mb-3 text-[#06b6d4]">The Verdict</h4>
                <p className="text-gray-800 font-sans mb-3">
                  Player A has the higher batting average (.280 vs .250), leading traditional scouts to favor them.
                  But modern metrics reveal Player B is actually <strong className="text-[#06b6d4]">35% more productive than league average</strong>,
                  while Player A is <strong className="text-[#3b82f6]">10% below average</strong>.
                </p>
                <p className="text-gray-700 font-sans mb-0">
                  Player B's superior power (35 HR vs 15) and patience (90 BB) create far more run-scoring value.
                  This is exactly the type of market inefficiency that powered the Moneyball revolution.
                </p>
              </div>
            </div>
          </section>

          {/* How Teams Use This */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">How MLB Teams Use These Metrics</h2>

            <p className="text-gray-700 leading-relaxed mb-6 font-sans">
              Every MLB front office now uses wOBA and wRC+ for player evaluation, contract negotiations, and in-game strategy.
              The metrics provide objective answers to questions like:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Player Acquisition</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Identify undervalued free agents with high wOBA but low batting average (like players who walk frequently
                  or hit doubles/triples rather than singles).
                </p>
              </div>
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Contract Negotiations</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  A player with .260 AVG but .380 wOBA and 130 wRC+ commands far more salary than a .300 hitter
                  with .320 wOBA and 95 wRC+.
                </p>
              </div>
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Lineup Construction</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Players with high OBP but low SLG bat leadoff. Players with high wOBA from power (not walks) bat 3rd-5th.
                </p>
              </div>
              <div className="bg-[#ecfdf3] border-l-4 border-[#06b6d4] p-6">
                <h4 className="font-display font-bold mb-2 text-[#06b6d4]">Development Focus</h4>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Young players with low AVG but high walk rates and power potential can be developed into elite hitters
                  (improving contact without sacrificing power/patience).
                </p>
              </div>
            </div>

            <div className="bg-[#0f172a] border-4 border-[#22d3ee] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#22d3ee] mb-4">
                <span className="font-mono text-xs text-[#0f172a] font-bold tracking-widest">THE MONEYBALL INSIGHT</span>
              </div>
              <p className="text-[#f8fafc] text-lg font-sans leading-relaxed mb-0">
                The 2002 Oakland A's exploited market inefficiency by targeting players with high OBP (especially via walks)
                who were undervalued because of low batting averages. They won 103 games on a $40M payroll by understanding
                what the rest of baseball didn't: <strong className="text-[#22d3ee]">walks are nearly as valuable as singles,
                and getting on base matters more than batting average</strong>.
              </p>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">The Evolution: A Summary</h2>

            <div className="space-y-4">
              <div className="bg-white border-l-4 border-[#e2e8f0] p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-display font-black text-xl text-[#0f172a]">1860s-1970s</div>
                  <div className="text-sm text-gray-600 font-mono">AVG, HR, RBI</div>
                </div>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Traditional era. Batting average dominated. Walks ignored. Power undervalued.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#06b6d4] p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-display font-black text-xl text-[#0f172a]">1970s-1980s</div>
                  <div className="text-sm text-gray-600 font-mono">OBP, SLG, OPS</div>
                </div>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Bill James revolution. Recognition that getting on base and hitting for power are the keys to run production.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#06b6d4] p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-display font-black text-xl text-[#0f172a]">1990s-2000s</div>
                  <div className="text-sm text-gray-600 font-mono">OPS+</div>
                </div>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Context adjustment era. OPS adjusted for ballpark and league allows cross-era comparisons.
                </p>
              </div>

              <div className="bg-white border-l-4 border-[#22d3ee] p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="font-display font-black text-xl text-[#0f172a]">2000s-Present</div>
                  <div className="text-sm text-gray-600 font-mono">wOBA, wRC+</div>
                </div>
                <p className="text-gray-700 font-sans text-sm mb-0">
                  Modern era. Empirically-derived weights based on actual run values. Mathematically sound. Universally adopted by MLB.
                </p>
              </div>
            </div>
          </section>

        </motion.div>

        <Quiz
          quizId="offense"
          question="Player A: .280 AVG, .320 wOBA, 90 wRC+ | Player B: .250 AVG, .380 wOBA, 135 wRC+. Who's better?"
          options={[
            'Player A (higher batting average)',
            'Player B (higher wOBA and wRC+)',
            'They\'re equal',
            'Cannot determine without more context'
          ]}
          correctAnswer={1}
        />

        <Quiz
          quizId="offense-2"
          question="Why is OPS considered mathematically imperfect?"
          options={[
            'It only measures home runs',
            'It adds two percentages with different denominators',
            'It ignores walks completely',
            'It\'s too complicated to calculate'
          ]}
          correctAnswer={1}
        />

        <Quiz
          quizId="offense-3"
          question="What does a wRC+ of 130 mean?"
          options={[
            '30% worse than average',
            '130 runs created',
            '30% better than league average',
            'Average performance'
          ]}
          correctAnswer={2}
        />

        <Comments pageRoute="/offense" />
      </article>
    </div>
  );
};

export default Offense;
