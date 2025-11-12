import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/interior-1.jpg",
      alt: "Elegant dining room",
      category: "interior",
      fallback: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      src: "/images/gallery/food-1.jpg",
      alt: "Wagyu beef tenderloin",
      category: "food",
      fallback: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 3,
      src: "/images/gallery/interior-2.jpg",
      alt: "Private dining area",
      category: "interior",
      fallback: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 4,
      src: "/images/gallery/food-2.jpg",
      alt: "Truffle risotto",
      category: "food",
      fallback: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 5,
      src: "/images/gallery/chef-1.jpg",
      alt: "Chef preparing dishes",
      category: "kitchen",
      fallback: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 6,
      src: "/images/gallery/food-3.jpg",
      alt: "Pan-seared salmon",
      category: "food",
      fallback: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 7,
      src: "/images/gallery/interior-3.jpg",
      alt: "Bar area",
      category: "interior",
      fallback: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 8,
      src: "/images/gallery/food-4.jpg",
      alt: "Chocolate soufflé",
      category: "food",
      fallback: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 9,
      src: "/images/gallery/kitchen-1.jpg",
      alt: "Open kitchen",
      category: "kitchen",
      fallback: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 10,
      src: "/images/gallery/food-5.jpg",
      alt: "Lobster thermidor",
      category: "food",
      fallback: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 11,
      src: "/images/gallery/interior-4.jpg",
      alt: "Wine cellar",
      category: "interior",
      fallback: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: 12,
      src: "/images/gallery/food-6.jpg",
      alt: "Artisan bread",
      category: "food",
      fallback: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&crop=center"
    }
  ];

  const filters = [
    { id: 'all', name: 'All', icon: '🖼️' },
    { id: 'food', name: 'Food', icon: '🍽️' },
    { id: 'interior', name: 'Interior', icon: '🏛️' },
    { id: 'kitchen', name: 'Kitchen', icon: '👨‍🍳' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/images/gallery-hero.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-900/30 via-transparent to-dark-900/50" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-semibold">
              Gallery
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
          >
            Our <span className="gradient-text">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90"
          >
            A visual journey through our culinary world
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-glow'
                    : 'bg-white text-dark-700 hover:bg-accent-50 hover:text-accent-600 shadow-soft'
                }`}
              >
                <span className="text-xl">{filter.icon}</span>
                <span>{filter.name}</span>
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openModal(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = image.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-primary-900 text-center">
                    {image.alt}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                e.target.src = selectedImage.fallback;
              }}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white text-xl font-playfair font-semibold bg-black/50 rounded-lg py-2 px-4">
                {selectedImage.alt}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Visit Us Section */}
      <section className="section-padding bg-gradient-to-b from-dark-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-6">
              Experience It <span className="gradient-text">Yourself</span>
            </h2>
            <p className="text-lg text-dark-600 mb-8 leading-relaxed">
              These images only capture a glimpse of the full experience. 
              Visit us to immerse yourself in the ambiance, savor the flavors, 
              and create your own memorable moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary text-lg w-full sm:w-auto">
                Make a Reservation
              </Link>
              <Link to="/menu" className="btn-secondary text-lg w-full sm:w-auto">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
