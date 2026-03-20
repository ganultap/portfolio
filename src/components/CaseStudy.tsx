'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-medium mb-2 block">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Case Study</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A deep dive into how design and development work together
          </p>
        </motion.div>

        {/* Case Study Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Project Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Design Side */}
            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 p-8 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                    Food Brand Design
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">"Biláo" Style Branding</h3>
                <p className="text-white/80">Promotional poster & visual identity</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=600&h=600&fit=crop"
                alt="Food promo design"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
              />
            </div>

            {/* Development Side */}
            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 p-8 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                    Web Development
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Online Ordering System</h3>
                <p className="text-white/80">Full-stack e-commerce platform</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop"
                alt="E-commerce system"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
              />
            </div>
          </div>

          {/* Case Study Details */}
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-bold mb-2">Problem</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Local food business needed both a strong visual brand and a functional online ordering system
                </p>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Process</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Created cohesive "Biláo" themed visuals with warm colors, then built a custom ordering system
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Solution</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Complete brand identity package paired with Next.js e-commerce platform with real-time orders
                </p>
              </motion.div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold mb-2">Result</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  200% increase in online orders, strong brand recognition in local market
                </p>
              </motion.div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
              >
                Start Your Project
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
