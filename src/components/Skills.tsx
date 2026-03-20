'use client';

import { motion } from 'framer-motion';
import { 
  Code, Palette, Database, Globe, 
  Figma, PenTool, Layout, Megaphone 
} from 'lucide-react';

const devSkills = [
  { name: 'Next.js', icon: Code, level: 90 },
  { name: 'React', icon: Code, level: 90 },
  { name: 'PHP', icon: Code, level: 85 },
  { name: 'MySQL', icon: Database, level: 80 },
  { name: 'API Integration', icon: Globe, level: 85 },
  { name: 'Vercel Deployment', icon: Globe, level: 90 },
];

const designSkills = [
  { name: 'Photoshop', icon: PenTool, level: 90 },
  { name: 'Canva', icon: Figma, level: 95 },
  { name: 'Branding', icon: Palette, level: 85 },
  { name: 'Layout Design', icon: Layout, level: 90 },
  { name: 'Food Marketing', icon: Megaphone, level: 88 },
  { name: 'Print Design', icon: Layout, level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-medium mb-2 block">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A diverse skill set spanning development and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">Development</h3>
            </div>

            <div className="space-y-4">
              {devSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                <Palette className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold">Design</h3>
            </div>

            <div className="space-y-4">
              {designSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[...devSkills, ...designSkills].map((skill) => (
            <motion.span
              key={skill.name}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full shadow-md text-sm font-medium hover:shadow-lg transition-shadow cursor-default"
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
