'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const designs = [
  {
    id: 1,
    title: 'Food Promo Poster - Chicken Inasal',
    category: 'Food Marketing',
    image: 'https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    title: 'Social Media Graphics Bundle',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Restaurant Menu Design',
    category: 'Menu Design',
    image: 'https://images.unsplash.com/photo-1546817372-628669db4655?w=600&h=800&fit=crop',
  },
  {
    id: 4,
    title: 'Food Promo - Pancit Canton',
    category: 'Food Marketing',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Brand Identity Package',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=800&fit=crop',
  },
  {
    id: 6,
    title: 'Instagram Story Templates',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Food Promo - BBQ',
    category: 'Food Marketing',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=800&fit=crop',
  },
  {
    id: 8,
    title: 'Business Card Design',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    title: 'Promotional Flyer',
    category: 'Print Design',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=800&fit=crop',
  },
];

export default function Designs() {
  const [selectedImage, setSelectedImage] = useState<typeof designs[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Food Marketing', 'Social Media', 'Menu Design', 'Branding', 'Print Design'];
  
  const filteredDesigns = filter === 'All' 
    ? designs 
    : designs.filter(d => d.category === filter);

  return (
    <section id="designs" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-medium mb-2 block">Design Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Graphic Design Works</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Creating visual content that captures attention and drives results
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(design)}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index % 3 === 0 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <ZoomIn className="w-10 h-10 text-white mx-auto mb-2" />
                  <p className="text-white font-medium">{design.title}</p>
                  <p className="text-white/70 text-sm">{design.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-indigo-400 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-white/70">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
