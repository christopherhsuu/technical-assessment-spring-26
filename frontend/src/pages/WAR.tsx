// WAR (Wins Above Replacement) Page - Comprehensive Revamp
// Based on FanGraphs WAR Library structure
// Explains WAR as the gold standard single-number metric

import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, MapPin } from 'lucide-react';
import Quiz from '../components/Quiz';
import Comments from '../components/Comments';
import StatCard from '../components/StatCard';

const WAR: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0a1628] text-white py-20 px-4 overflow-hidden border-b-4 border-[#ffd23f]">
        <div className="absolute inset-0 opacity-[0.05]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-[#00d9ff]" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-[#ff6b35] border-2 border-[#ffd23f]">
            <span className="font-mono text-sm tracking-widest text-white font-bold">THE GOLD STANDARD METRIC</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-[#f5f1e8]">WAR:</span>
            <br/>
            <span className="text-[#ffd23f]">WINS ABOVE REPLACEMENT</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#cbd5e0] font-serif max-w-2xl">
            One number to measure a player's total value — offense, defense, baserunning, and position all combined
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* The Core Question */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              The Question WAR Answers
            </h2>

            <div className="bg-[#0a1628] border-4 border-[#ffd23f] p-8 my-8">
              <p className="text-[#f5f1e8] text-2xl font-serif leading-relaxed mb-0">
                <strong className="text-[#ffd23f]">"If this player got injured and we had to replace them with a freely available
                minor leaguer or bench player, how many wins would our team lose?"</strong>
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              That's it. That's what WAR measures. It's attempting to quantify a player's <strong>total contribution to their team</strong>
              in a single number expressed as wins. Not hits, not runs, not batting average — <em>actual wins added to the team's record</em>.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The "Replacement" baseline is critical. It's defined as a player who's <strong>freely available</strong> — think AAA call-up or
              the last guy on the bench. A team full of replacement-level players would win about 48 games in a 162-game season (a .294 winning percentage).
              Anything above that is value.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This allows us to compare <em>across positions</em>. You can directly compare a catcher's WAR to a centerfielder's WAR to a relief pitcher's WAR.
              It's the only stat that does this effectively.
            </p>
          </section>

          {/* How It's Calculated - Position Players */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Breaking Down the Formula (Position Players)
            </h2>

            <div className="bg-white border-2 border-[#cbd5e0] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ffd23f] mb-6">
                <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">THE CALCULATION</span>
              </div>

              <p className="font-mono text-lg mb-6 text-gray-800 bg-[#fef5e7] p-4 border-l-4 border-[#ff6b35]">
                WAR = (Batting Runs + Baserunning Runs + Fielding Runs + Positional Adjustment + League Adjustment + Replacement Runs) / Runs Per Win
              </p>

              <p className="text-gray-700 font-serif mb-6">
                Let's break down each component:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <StatCard
                  title="Batting Runs"
                  value="40-50%"
                  description="Offensive production relative to league average, measured via wOBA"
                  icon={<Target size={32} strokeWidth={2.5} />}
                  color="blue"
                />
                <StatCard
                  title="Baserunning"
                  value="5-10%"
                  description="Stolen bases, taking extra bases, avoiding double plays, caught stealing"
                  icon={<TrendingUp size={32} strokeWidth={2.5} />}
                  color="green"
                />
                <StatCard
                  title="Fielding Runs"
                  value="20-30%"
                  description="Defensive value above average using UZR or DRS (varies by version)"
                  icon={<Shield size={32} strokeWidth={2.5} />}
                  color="gray"
                />
                <StatCard
                  title="Positional Adj"
                  value="10-20%"
                  description="Premium positions (SS, C, CF) get bonuses; corner positions get penalties"
                  icon={<MapPin size={32} strokeWidth={2.5} />}
                  color="red"
                />
              </div>

              <div className="space-y-4 text-gray-700 font-serif">
                <div className="bg-[#f0fff4] border-l-4 border-[#00d9ff] p-4">
                  <h4 className="font-display font-bold mb-2">Batting Runs</h4>
                  <p>Measures offensive production using wOBA (weighted On-Base Average), which properly weights singles, doubles, triples,
                  home runs, and walks based on their actual run value. Converts to runs above/below league average.</p>
                </div>

                <div className="bg-[#f0fff4] border-l-4 border-[#00d9ff] p-4">
                  <h4 className="font-display font-bold mb-2">Baserunning Runs</h4>
                  <p>Includes stolen bases and caught stealing, but also advancement on hits/outs and avoiding double plays.
                  Most players contribute +/- 5 runs here; elite baserunners can add 10+ runs.</p>
                </div>

                <div className="bg-[#f0fff4] border-l-4 border-[#00d9ff] p-4">
                  <h4 className="font-display font-bold mb-2">Fielding Runs</h4>
                  <p>The most uncertain component. Uses UZR (Ultimate Zone Rating) or DRS (Defensive Runs Saved) to estimate runs saved/cost
                  via defense. Single-season defensive metrics have large error bars; multi-year samples are more reliable.</p>
                </div>

                <div className="bg-[#f0fff4] border-l-4 border-[#00d9ff] p-4">
                  <h4 className="font-display font-bold mb-2">Positional Adjustment</h4>
                  <p><strong>Critical for fair comparisons.</strong> Shortstops get ~+7.5 runs per 162 games; first basemen get -12.5 runs.
                  Why? Because shortstop defense is much harder. A league-average shortstop prevents far more runs than a league-average first baseman
                  simply due to position demands.</p>
                </div>

                <div className="bg-[#f0fff4] border-l-4 border-[#00d9ff] p-4">
                  <h4 className="font-display font-bold mb-2">Replacement Level</h4>
                  <p>Adds ~20 runs per 600 plate appearances to set the baseline. This represents the value of a "replacement player" —
                  a freely available minor leaguer. Without this, average players would have ~0 WAR instead of ~2 WAR.</p>
                </div>

                <div className="bg-[#f0fff4] border-l-4 border-[#00d9ff] p-4">
                  <h4 className="font-display font-bold mb-2">Runs Per Win</h4>
                  <p>The final step divides total runs by the season's runs-per-win constant (typically ~10). This converts runs into wins,
                  giving us the final WAR value.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How It's Calculated - Pitchers */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Pitcher WAR: A Different Approach
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Pitchers use a different calculation. Instead of breaking down offense/defense/baserunning, pitcher WAR estimates how many runs
              the pitcher prevented compared to replacement level.
            </p>

            <div className="bg-[#fef5e7] border-2 border-[#e8e2d5] p-6 my-6">
              <h4 className="font-display font-bold text-lg mb-3">The Pitcher Formula</h4>
              <p className="text-gray-700 font-serif mb-3">
                Pitcher WAR uses <strong>FIP (Fielding Independent Pitching)</strong>, adjusted for park factors, to estimate runs allowed.
                FIP focuses only on outcomes the pitcher controls: strikeouts, walks, and home runs. This removes defensive quality from the equation.
              </p>
              <p className="text-gray-700 font-serif">
                The runs are then compared to replacement level (a 5.40 ERA typically), converted to wins, and adjusted for innings pitched.
                A 200-inning pitcher with a 3.00 FIP is worth far more than a 50-inning reliever with the same FIP.
              </p>
            </div>
          </section>

          {/* Interpreting WAR Values */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              What Do the Numbers Mean? A Practical Guide
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              WAR is not precise. A 6.0 WAR player is probably somewhere between 5.0-7.0 in true talent. But it's excellent at
              <strong> separating groups</strong>. Here's how to interpret the values:
            </p>

            <div className="bg-white border-2 border-[#cbd5e0] p-6 mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b-4 border-[#0a1628]">
                    <th className="text-left py-4 font-display font-black text-[#0a1628] text-lg">WAR</th>
                    <th className="text-left py-4 font-display font-black text-[#0a1628] text-lg">Player Tier</th>
                    <th className="text-left py-4 font-display font-black text-[#0a1628] text-lg">What This Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-[#e8e2d5]">
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#ff6b35]">0-1</td>
                    <td className="py-4 font-semibold text-gray-800">Scrub / Replacement</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Bench player, struggling starter, easily replaced</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#2d4a7c]">1-2</td>
                    <td className="py-4 font-semibold text-gray-800">Role Player</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Useful bench piece, platoon player, spot starter</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#2d4a7c]">2-3</td>
                    <td className="py-4 font-semibold text-gray-800">Solid Starter</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Everyday player, reliable contributor, good not great</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#2d4a7c]">3-4</td>
                    <td className="py-4 font-semibold text-gray-800">Above Average</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Quality starter, fringe All-Star, team asset</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#00d9ff]">4-5</td>
                    <td className="py-4 font-semibold text-gray-800">All-Star</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Elite player, team cornerstone, perennial All-Star</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#00d9ff]">5-6</td>
                    <td className="py-4 font-semibold text-gray-800">Superstar</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">MVP candidate, franchise player, top 10-20 in baseball</td>
                  </tr>
                  <tr className="hover:bg-[#fef5e7] transition-colors">
                    <td className="py-4 font-mono font-bold text-lg text-[#ffd23f]">6+</td>
                    <td className="py-4 font-semibold text-gray-800">MVP / HOF Season</td>
                    <td className="py-4 text-sm text-gray-600 font-serif">Historic performance, best in baseball, Hall of Fame caliber</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#ff6b35] bg-opacity-10 border-l-4 border-[#ff6b35] p-6 my-8">
              <h4 className="font-display font-bold text-xl mb-3 text-[#ff6b35]">Important: The Margin of Error</h4>
              <p className="text-gray-700 font-serif mb-3">
                A player rated 6.4 WAR vs. 6.1 WAR are essentially <strong>the same</strong>. The difference is noise. WAR works best for
                identifying tiers (All-Star vs. Solid Starter) rather than precise rankings within a tier.
              </p>
              <p className="text-gray-700 font-serif">
                Defense is the biggest source of uncertainty. Single-season defensive metrics can swing +/- 10 runs year-to-year for the same player.
                Use multi-year samples when possible.
              </p>
            </div>
          </section>

          {/* Real Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Real Example: Mike Trout's Dominance
            </h2>

            <div className="bg-[#0a1628] border-4 border-[#ffd23f] p-8 my-8">
              <div className="inline-block px-3 py-1 bg-[#ff6b35] mb-4">
                <span className="font-mono text-xs text-white font-bold tracking-widest">CASE STUDY</span>
              </div>
              <p className="text-[#f5f1e8] mb-4 font-serif text-lg">
                From 2012-2019, Mike Trout averaged <strong className="text-[#ffd23f]">8.9 WAR per season</strong>. Over that 8-year span,
                he accumulated approximately <strong className="text-[#ffd23f]">71 WAR</strong>.
              </p>
              <p className="text-[#cbd5e0] text-sm italic mb-4 font-serif">
                Translation: Compared to a replacement-level player, Trout added about 71 wins to the Angels' record over 8 seasons.
                That's roughly <strong className="text-[#00d9ff]">9 extra wins per year</strong> — the difference between 81-81 (mediocre) and
                90-72 (playoff contender).
              </p>
              <p className="text-[#cbd5e0] font-serif">
                At approximately $8-10 million per win on the free agent market, Trout was providing <strong className="text-[#ffd23f]">$70-90 million</strong>
                in value annually during that stretch. His actual salary? $33-36 million/year. He was underpaid even at that massive figure.
              </p>
            </div>
          </section>

          {/* Limitations & Caveats */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              WAR's Limitations: What It Can't Do
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              WAR is powerful, but it's not perfect. Understanding its limitations is crucial:
            </p>

            <ul className="space-y-3 text-gray-700 font-serif mb-6">
              <li className="flex items-start">
                <span className="text-[#ff6b35] mr-2 text-xl">•</span>
                <span><strong>Defense is uncertain:</strong> UZR and DRS often disagree. A player might be +15 runs by UZR and +5 by DRS in the same season.
                This creates different WAR values (fWAR vs. bWAR). Both are approximations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6b35] mr-2 text-xl">•</span>
                <span><strong>Context-neutral:</strong> WAR doesn't know if you hit a grand slam to win a playoff game or a solo shot in a blowout loss.
                All runs count the same. It's a regular-season value metric, not a clutch metric.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6b35] mr-2 text-xl">•</span>
                <span><strong>Replacement level is a construct:</strong> The .294 baseline is somewhat arbitrary. Different WAR implementations
                (fWAR, bWAR, WARP) use slightly different replacement levels, creating different values.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff6b35] mr-2 text-xl">•</span>
                <span><strong>Small sample noise:</strong> A 50-game sample of WAR has massive error bars. Use full-season or multi-year samples
                for meaningful conclusions.</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed font-serif">
              Despite these limitations, WAR is the best single-number metric we have for player value. It's an <strong>approximation</strong>,
              not a precise measurement. Use it as a starting point for evaluation, not the final word.
            </p>
          </section>
        </motion.div>

        {/* Quiz */}
        <Quiz
          quizId="war"
          question="A player with 5.0 WAR is considered:"
          options={[
            'Below Average',
            'Average',
            'All-Star caliber',
            'MVP candidate'
          ]}
          correctAnswer={2}
        />

        {/* Comments */}
        <Comments pageRoute="/war" />
      </article>
    </div>
  );
};

export default WAR;
