'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Monitor, Database, FileText } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Quiz Bee Web App',
    description: 'An interactive quiz platform with real-time scoring, multiple categories, and leaderboard functionality. Features include timed questions, instant feedback, and responsive design for all devices.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    icon: Monitor,
    liveDemo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Rental Printer Monitoring System',
    description: 'A comprehensive fleet management system for tracking printer usage, maintenance schedules, and billing. Includes real-time monitoring, automated alerts, and detailed reporting dashboards.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    icon: Database,
    liveDemo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Notes System with Sharing',
    description: 'A feature-rich note-taking application with advanced permission controls. Supports collaborative editing, rich text formatting, tags, and granular sharing options for teams.',
    tech: ['Next.js', 'API Routes', 'MySQL', 'Prisma'],
    icon: FileText,
    liveDemo: '#',
    github: '#',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-medium mb-2 block">Development</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Development Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building robust web applications with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <project.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveDemo}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
