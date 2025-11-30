// Glossary Page - Baseball Terms Index
import { motion } from 'framer-motion';
import { useState } from 'react';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const terms = [
    {
      term: 'AB',
      full: 'At Bats',
      definition: 'Number of times a batter completes a plate appearance that results in a hit, out, or error. Does not include walks, hit-by-pitches, sacrifice flies, or sacrifice bunts.',
      category: 'Basic'
    },
    {
      term: 'BB',
      full: 'Walks (Base on Balls)',
      definition: 'When a batter receives four balls (pitches outside the strike zone) and is awarded first base.',
      category: 'Basic'
    },
    {
      term: 'H',
      full: 'Hits',
      definition: 'When a batter safely reaches base after hitting the ball into fair territory, without the benefit of an error or fielder\'s choice.',
      category: 'Basic'
    },
    {
      term: 'HR',
      full: 'Home Runs',
      definition: 'A hit that allows the batter to circle all bases and score, typically by hitting the ball over the outfield fence.',
      category: 'Basic'
    },
    {
      term: 'HBP',
      full: 'Hit By Pitch',
      definition: 'When a pitched ball hits the batter, awarding them first base.',
      category: 'Basic'
    },
    {
      term: 'SF',
      full: 'Sacrifice Fly',
      definition: 'A fly ball out that allows a runner on base to tag up and score. Does not count as an at-bat.',
      category: 'Basic'
    },
    {
      term: 'SH',
      full: 'Sacrifice Hit (Bunt)',
      definition: 'A bunt that results in an out but advances a runner. Does not count as an at-bat.',
      category: 'Basic'
    },
    {
      term: 'K',
      full: 'Strikeouts',
      definition: 'When a batter accumulates three strikes during a plate appearance.',
      category: 'Basic'
    },
    {
      term: 'IP',
      full: 'Innings Pitched',
      definition: 'The number of innings a pitcher has completed. Measured in thirds (one out = 0.1 IP).',
      category: 'Pitching'
    },
    {
      term: 'PA',
      full: 'Plate Appearances',
      definition: 'Every time a batter completes a turn at bat, including walks, HBP, sacrifices, and at-bats.',
      category: 'Basic'
    },
    {
      term: '1B',
      full: 'Singles',
      definition: 'A hit where the batter reaches first base safely.',
      category: 'Basic'
    },
    {
      term: '2B',
      full: 'Doubles',
      definition: 'A hit where the batter reaches second base safely.',
      category: 'Basic'
    },
    {
      term: '3B',
      full: 'Triples',
      definition: 'A hit where the batter reaches third base safely.',
      category: 'Basic'
    },
    {
      term: 'RBI',
      full: 'Runs Batted In',
      definition: 'The number of runs that score as a result of a batter\'s plate appearance (excluding errors and double plays).',
      category: 'Basic'
    },
    {
      term: 'SB',
      full: 'Stolen Bases',
      definition: 'When a baserunner advances to the next base while the pitcher is delivering the pitch.',
      category: 'Baserunning'
    },
    {
      term: 'CS',
      full: 'Caught Stealing',
      definition: 'When a baserunner attempts to steal a base but is thrown out.',
      category: 'Baserunning'
    },
    {
      term: 'ERA',
      full: 'Earned Run Average',
      definition: 'The average number of earned runs a pitcher allows per nine innings. Calculated as (Earned Runs × 9) / IP.',
      category: 'Pitching'
    },
    {
      term: 'WHIP',
      full: 'Walks plus Hits per Inning Pitched',
      definition: 'The average number of baserunners a pitcher allows per inning. Calculated as (BB + H) / IP.',
      category: 'Pitching'
    },
    {
      term: 'FIP',
      full: 'Fielding Independent Pitching',
      definition: 'A metric that isolates what a pitcher can control (strikeouts, walks, home runs) and removes defensive influence. Scaled to ERA for comparison.',
      category: 'Advanced Pitching'
    },
    {
      term: 'xFIP',
      full: 'Expected Fielding Independent Pitching',
      definition: 'Like FIP, but normalizes home run rate based on fly balls, assuming league-average HR/FB ratio.',
      category: 'Advanced Pitching'
    },
    {
      term: 'K-BB%',
      full: 'Strikeout Minus Walk Rate',
      definition: 'The difference between a pitcher\'s strikeout rate and walk rate. Higher is better. Highly predictive of future success.',
      category: 'Advanced Pitching'
    },
    {
      term: 'CSW%',
      full: 'Called Strike + Whiff Rate',
      definition: 'Percentage of pitches that are called strikes or swinging strikes. Measures command and stuff quality.',
      category: 'Advanced Pitching'
    },
    {
      term: 'Stuff+',
      full: 'Stuff Plus',
      definition: 'A metric rating pitch quality based on velocity, spin, and movement. 100 is average, higher is better.',
      category: 'Advanced Pitching'
    },
    {
      term: 'OBP',
      full: 'On-Base Percentage',
      definition: 'How often a batter reaches base. Calculated as (H + BB + HBP) / (AB + BB + HBP + SF).',
      category: 'Hitting'
    },
    {
      term: 'SLG',
      full: 'Slugging Percentage',
      definition: 'Total bases per at-bat, measuring power. Calculated as (1B + 2×2B + 3×3B + 4×HR) / AB.',
      category: 'Hitting'
    },
    {
      term: 'OPS',
      full: 'On-Base Plus Slugging',
      definition: 'The sum of OBP and SLG. A quick measure of overall offensive value.',
      category: 'Hitting'
    },
    {
      term: 'OPS+',
      full: 'On-Base Plus Slugging Plus',
      definition: 'OPS adjusted for league and ballpark. 100 is average, above 100 is better, below 100 is worse.',
      category: 'Advanced Hitting'
    },
    {
      term: 'wOBA',
      full: 'Weighted On-Base Average',
      definition: 'Measures hitting value with appropriate weights for each outcome (singles, doubles, walks, etc.). More accurate than OPS.',
      category: 'Advanced Hitting'
    },
    {
      term: 'wRC+',
      full: 'Weighted Runs Created Plus',
      definition: 'Offensive value scaled to league and park context. 100 is average, 150 means 50% better than average.',
      category: 'Advanced Hitting'
    },
    {
      term: 'ISO',
      full: 'Isolated Power',
      definition: 'Measures raw power by subtracting batting average from slugging percentage. SLG - AVG.',
      category: 'Advanced Hitting'
    },
    {
      term: 'BABIP',
      full: 'Batting Average on Balls In Play',
      definition: 'Batting average on balls hit into the field of play (excludes home runs and strikeouts). League average is typically around .300.',
      category: 'Advanced Hitting'
    },
    {
      term: 'WAR',
      full: 'Wins Above Replacement',
      definition: 'The total value a player provides compared to a replacement-level player, measured in wins.',
      category: 'Advanced'
    },
    {
      term: 'bWAR',
      full: 'Baseball Reference WAR',
      definition: 'WAR calculation from Baseball-Reference.com. Uses actual runs allowed for pitchers.',
      category: 'Advanced'
    },
    {
      term: 'fWAR',
      full: 'FanGraphs WAR',
      definition: 'WAR calculation from FanGraphs. Uses FIP for pitchers instead of actual runs.',
      category: 'Advanced'
    },
    {
      term: 'DRS',
      full: 'Defensive Runs Saved',
      definition: 'Runs saved or cost by a defender compared to league average. Accounts for range, errors, and arm strength.',
      category: 'Defense'
    },
    {
      term: 'UZR',
      full: 'Ultimate Zone Rating',
      definition: 'Similar to DRS, measures defensive value in runs above/below average using zone-based data.',
      category: 'Defense'
    },
    {
      term: 'OAA',
      full: 'Outs Above Average',
      definition: 'Statcast-based defensive metric using catch probability. Measures outs made above expectation.',
      category: 'Defense'
    },
    {
      term: 'FRV',
      full: 'Fielding Run Value',
      definition: 'Total defensive value in runs saved, similar to DRS but may use different play weightings.',
      category: 'Defense'
    },
    {
      term: 'Exit Velocity',
      full: 'Exit Velocity',
      definition: 'The speed of the baseball as it comes off the bat, measured in mph by Statcast.',
      category: 'Statcast'
    },
    {
      term: 'Launch Angle',
      full: 'Launch Angle',
      definition: 'The vertical angle at which the ball leaves the bat. Measured in degrees by Statcast.',
      category: 'Statcast'
    },
    {
      term: 'Barrel',
      full: 'Barrel',
      definition: 'A batted ball with the optimal combination of exit velocity and launch angle. Strong predictor of hitting success.',
      category: 'Statcast'
    },
    {
      term: 'Hard Hit%',
      full: 'Hard Hit Percentage',
      definition: 'Percentage of batted balls with exit velocity of 95+ mph.',
      category: 'Statcast'
    },
    {
      term: 'Sprint Speed',
      full: 'Sprint Speed',
      definition: 'A player\'s maximum speed in feet per second, measured by Statcast.',
      category: 'Statcast'
    },
    {
      term: 'Spin Rate',
      full: 'Spin Rate',
      definition: 'How fast a pitch rotates, measured in revolutions per minute (RPM). Affects movement.',
      category: 'Statcast'
    },
    {
      term: 'xBA',
      full: 'Expected Batting Average',
      definition: 'What a player\'s batting average should be based on quality of contact, using Statcast data.',
      category: 'Statcast'
    },
    {
      term: 'xwOBA',
      full: 'Expected Weighted On-Base Average',
      definition: 'What a player\'s wOBA should be based on quality of contact, removing luck.',
      category: 'Statcast'
    },
    {
      term: 'Chase Rate',
      full: 'Chase Rate (O-Swing%)',
      definition: 'How often a batter swings at pitches outside the strike zone. Lower is typically better.',
      category: 'Plate Discipline'
    },
    {
      term: 'Zone%',
      full: 'Zone Swing Percentage',
      definition: 'How often a batter swings at pitches inside the strike zone.',
      category: 'Plate Discipline'
    },
    {
      term: 'Contact%',
      full: 'Contact Percentage',
      definition: 'How often a batter makes contact when swinging.',
      category: 'Plate Discipline'
    },
    {
      term: 'Replacement Level',
      full: 'Replacement Level',
      definition: 'The expected performance of a freely available player (typically a minor leaguer). Used as baseline for WAR.',
      category: 'Concepts'
    },
    {
      term: 'Regression',
      full: 'Regression to the Mean',
      definition: 'The statistical concept that extreme results tend to move toward average over time. Used to identify lucky/unlucky players.',
      category: 'Concepts'
    },
    {
      term: 'Park Factor',
      full: 'Park Factor',
      definition: 'A measurement of how a ballpark affects offense. 100 is neutral, above 100 favors hitters, below 100 favors pitchers.',
      category: 'Concepts'
    },
  ];

  const filteredTerms = terms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.full.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(terms.map(t => t.category))].sort();

  return (
    <div className="min-h-screen">
      <section className="relative bg-[#ff6b35] text-white py-20 px-4 overflow-hidden border-b-4 border-[#ffd23f]">
        <div className="absolute inset-0 opacity-[0.1]">
          {[...Array(6)].map((_, i) => (
            <div key={`h-${i}`} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${i * 20}%` }}></div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-[#0a1628] border-2 border-[#ffd23f]">
            <span className="font-mono text-sm tracking-widest text-[#ffd23f] font-bold">BASEBALL TERMS INDEX</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-white">STAT</span>
            <br/>
            <span className="text-[#ffd23f]">GLOSSARY</span>
          </h1>

          <p className="text-xl md:text-2xl text-white font-serif max-w-2xl">
            A searchable index of baseball statistics and abbreviations
          </p>
        </motion.div>
      </section>

      <article className="max-w-5xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a stat (e.g., 'SF', 'sacrifice fly', 'OPS')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 text-lg border-4 border-[#0a1628] font-serif focus:outline-none focus:border-[#ff6b35] transition-colors"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#cbd5e0]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2 font-serif italic">
            {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
          </p>
        </motion.div>

        {/* Category Pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <div key={category} className="inline-block px-3 py-1 bg-[#f5f1e8] border-2 border-[#cbd5e0]">
              <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">{category.toUpperCase()}</span>
            </div>
          ))}
        </div>

        {/* Terms List */}
        <div className="space-y-6">
          {filteredTerms.map((item, index) => (
            <motion.div
              key={item.term}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.05, 0.5) }}
              className="bg-white border-2 border-[#cbd5e0] p-6 hover:border-[#ff6b35] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-display font-black text-2xl text-[#0a1628] mb-1">
                    {item.term}
                  </h3>
                  <p className="text-[#ff6b35] font-serif font-semibold">
                    {item.full}
                  </p>
                </div>
                <div className="inline-block px-3 py-1 bg-[#ffd23f] h-fit">
                  <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">{item.category.toUpperCase()}</span>
                </div>
              </div>
              <p className="text-gray-700 font-serif leading-relaxed">
                {item.definition}
              </p>
            </motion.div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500 font-serif">No terms found matching "{searchTerm}"</p>
            <p className="text-gray-600 font-serif mt-2">Try searching for abbreviations like "SF", "OBP", or "WAR"</p>
          </div>
        )}
      </article>
    </div>
  );
};

export default Glossary;
