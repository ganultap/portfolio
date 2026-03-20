'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, ShoppingCart, BarChart3, Megaphone } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Application Development',
    description: 'Custom web applications built with modern frameworks. From dashboards to complex systems with user authentication, database integration, and API connections.',
    icon: Code,
    features: ['Dashboards & Admin Panels', 'E-commerce Solutions', 'RESTful APIs', 'Real-time Features'],
  },
  {
    id: 2,
    title: 'Brand Identity & Visual Design',
    description: 'Comprehensive branding solutions that help businesses stand out. From logo design to complete brand guidelines and visual identity systems.',
    icon: Palette,
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
  },
  {
    id: 3,
    title: 'Marketing Materials',
    description: 'Eye-catching promotional materials designed to convert. Food menus, posters, flyers, and social media content that captures attention.',
    icon: Megaphone,
    features: ['Food Menu Design', 'Promotional Posters', 'Social Media Graphics', 'Print Materials'],
  },
  {
    id: 4,
    title: 'Full Digital Solutions',
    description: 'End-to-end solutions that combine stunning design with powerful functionality. A complete package for businesses going digital.',
    icon: Zap,
    features: ['Design + Development', 'System Integration', 'Brand to Web', 'Maintenance & Support'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-medium mb-2 block">What I Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Providing comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
