import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { Skill } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SkillsProps {
  skills: Skill[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3 rounded shadow-xl">
        <p className="font-bold text-indigo-600 dark:text-indigo-300">{payload[0].payload.subject}</p>
        <p className="text-slate-600 dark:text-slate-300">Avg Proficiency: {Math.round(payload[0].value)}%</p>
      </div>
    );
  }
  return null;
};

// Custom Tick component to handle text wrapping and responsive positioning
const CustomTick = ({ payload, x, y, textAnchor }: any) => {
  const words = payload.value.split(' ');
  const lines: string[] = [];
  let currentLine = words[0];

  // Logic to wrap text if it exceeds a certain length (approx 12-15 chars)
  for (let i = 1; i < words.length; i++) {
    if ((currentLine + words[i]).length > 12) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine += ' ' + words[i];
    }
  }
  lines.push(currentLine);

  // Add vertical offset specifically for Marketing labels which sit at the bottom
  // and tend to overlap with the chart web/grid lines.
  const isMarketing = payload.value.toLowerCase().includes('marketing');
  const yOffset = isMarketing ? 15 : 0;

  return (
    <g transform={`translate(${x},${y + yOffset})`}>
      <text
        textAnchor={textAnchor}
        className="fill-slate-600 dark:fill-slate-300 text-[10px] md:text-[11px] font-semibold font-sans"
      >
        {lines.map((line, index) => (
          <tspan
            x={0}
            // Vertically center the text block:
            // If 1 line, nudge down slightly.
            // If multiple lines, shift up based on line count to center the block.
            dy={index === 0 ? (lines.length === 1 ? "0.35em" : `${-(lines.length - 1) * 0.5}em`) : "1.1em"}
            key={index}
          >
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { data } = useLanguage();

  // Group skills by category
  const groupedSkills = useMemo(() => {
    const groups: { [key: string]: Skill[] } = {};
    skills.forEach(skill => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }
      groups[skill.category].push(skill);
    });
    return groups;
  }, [skills]);

  // Calculate chart data based on average proficiency per category
  const chartData = useMemo(() => {
    return Object.keys(groupedSkills).map(category => {
      const categorySkills = groupedSkills[category];
      const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
      return {
        subject: category,
        A: avgLevel,
        fullMark: 100,
      };
    });
  }, [groupedSkills]);

  return (
    <section id="skills" className="py-24 px-6 bg-slate-100 dark:bg-slate-900/30 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
            <Cpu className="text-indigo-600 dark:text-indigo-400" /> {data.ui.skillsTitle}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Radar Chart */}
          <div className="lg:col-span-4 sticky top-24">
             <motion.div 
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl shadow-slate-200/50 dark:shadow-none"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Increased height to allow top/bottom labels to render without clipping */}
                <div className="h-[420px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {/* Reduced outerRadius to 58% to provide ample padding for long text labels */}
                    <RadarChart cx="50%" cy="50%" outerRadius="58%" data={chartData}>
                      <PolarGrid stroke="#94a3b8" strokeOpacity={0.3} />
                      <PolarAngleAxis 
                        dataKey="subject" 
                        tick={(props) => <CustomTick {...props} />}
                      />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar
                        name="Proficiency"
                        dataKey="A"
                        stroke="#6366f1"
                        strokeWidth={3}
                        fill="#6366f1"
                        fillOpacity={0.2}
                      />
                      <Tooltip content={<CustomTooltip />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{data.ui.competencyOverview}</p>
                </div>
              </motion.div>
          </div>

          {/* Right Column: Skill Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(groupedSkills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-indigo-500/30 hover:shadow-lg dark:hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <Layers size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {(items as Skill[]).map((skill) => (
                      <span 
                        key={skill.name} 
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;