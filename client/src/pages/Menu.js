import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuData = {
    starters: [
      {
        id: 1,
        name: "Oysters Rockefeller",
        description: "Fresh oysters with spinach, herbs, and hollandaise sauce",
        price: "₹1,440",
        dietary: ["gluten-free"]
      },
      {
        id: 2,
        name: "Foie Gras Terrine",
        description: "House-made foie gras with brioche toast and fig compote",
        price: "₹1,920",
        dietary: []
      },
      {
        id: 3,
        name: "Burrata Caprese",
        description: "Creamy burrata with heirloom tomatoes and basil oil",
        price: "₹1,280",
        dietary: ["vegetarian", "gluten-free"]
      },
      {
        id: 4,
        name: "Tuna Tartare",
        description: "Yellowfin tuna with avocado, citrus, and sesame",
        price: "₹1,760",
        dietary: ["gluten-free"]
      },
      {
        id: 5,
        name: "Escargot de Bourgogne",
        description: "Classic French snails in garlic herb butter",
        price: "₹1,520",
        dietary: ["gluten-free"]
      }
    ],
    mains: [
      {
        id: 6,
        name: "Wagyu Beef Tenderloin",
        description: "Premium wagyu with roasted vegetables and red wine reduction",
        price: "₹5,200",
        dietary: ["gluten-free"]
      },
      {
        id: 7,
        name: "Lobster Thermidor",
        description: "Whole lobster with cognac cream sauce and gruyere",
        price: "₹3,840",
        dietary: ["gluten-free"]
      },
      {
        id: 8,
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique and potato gratin",
        price: "₹2,560",
        dietary: []
      },
      {
        id: 9,
        name: "Pan-Seared Salmon",
        description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
        price: "₹2,240",
        dietary: ["gluten-free"]
      },
      {
        id: 10,
        name: "Truffle Risotto",
        description: "Creamy Arborio rice with black truffle and parmesan",
        price: "₹2,560",
        dietary: ["vegetarian", "gluten-free"]
      },
      {
        id: 11,
        name: "Rack of Lamb",
        description: "Herb-crusted lamb with ratatouille and rosemary jus",
        price: "₹3,360",
        dietary: []
      }
    ],
    desserts: [
      {
        id: 12,
        name: "Chocolate Soufflé",
        description: "Rich dark chocolate soufflé with vanilla bean ice cream",
        price: "₹1,440",
        dietary: ["vegetarian"]
      },
      {
        id: 13,
        name: "Crème Brûlée",
        description: "Classic vanilla custard with caramelized sugar",
        price: "₹1,120",
        dietary: ["vegetarian", "gluten-free"]
      },
      {
        id: 14,
        name: "Tarte Tatin",
        description: "Upside-down apple tart with cinnamon ice cream",
        price: "₹1,280",
        dietary: ["vegetarian"]
      },
      {
        id: 15,
        name: "Tiramisu",
        description: "Traditional Italian dessert with espresso and mascarpone",
        price: "₹1,200",
        dietary: ["vegetarian"]
      },
      {
        id: 16,
        name: "Lemon Posset",
        description: "Silky lemon cream with shortbread cookies",
        price: "₹960",
        dietary: ["vegetarian"]
      }
    ],
    beverages: [
      {
        id: 17,
        name: "House Wine Selection",
        description: "Curated selection of red, white, and rosé wines",
        price: "₹960-3,600",
        dietary: []
      },
      {
        id: 18,
        name: "Craft Cocktails",
        description: "Signature cocktails crafted by our mixologists",
        price: "₹1,120-1,440",
        dietary: []
      },
      {
        id: 19,
        name: "Artisan Coffee",
        description: "Single-origin coffee beans, expertly roasted",
        price: "₹480-640",
        dietary: ["vegan"]
      },
      {
        id: 20,
        name: "Premium Tea Selection",
        description: "Loose-leaf teas from around the world",
        price: "₹400-560",
        dietary: ["vegan"]
      },
      {
        id: 21,
        name: "Fresh Juices",
        description: "Seasonal fruit and vegetable juices",
        price: "₹640-800",
        dietary: ["vegan", "gluten-free"]
      }
    ]
  };

  const categories = [
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Course', icon: '🥩' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🍷' }
  ];

  const getDietaryIcon = (dietary) => {
    if (dietary.includes('vegetarian')) return '🌱';
    if (dietary.includes('vegan')) return '🌿';
    if (dietary.includes('gluten-free')) return '🌾';
    return '';
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-900/30 via-transparent to-dark-900/50" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-semibold">
              Our Menu
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
          >
            Culinary <span className="gradient-text">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl max-w-2xl mx-auto px-2 text-white/90"
          >
            Discover our carefully crafted culinary creations
          </motion.p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-gradient-to-b from-white to-dark-50">
        <div className="container-custom">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-glow'
                    : 'bg-white text-dark-700 hover:bg-accent-50 hover:text-accent-600 shadow-soft'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-playfair font-bold text-dark-900 mb-10 text-center">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              
              <div className="space-y-4">
                {menuData[activeCategory].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card p-6 hover:shadow-xl group"
                  >
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-playfair font-semibold text-dark-900 group-hover:text-accent-600 transition-colors">
                            {item.name}
                          </h3>
                          {item.dietary.length > 0 && (
                            <span className="text-lg" title={item.dietary.join(', ')}>
                              {getDietaryIcon(item.dietary)}
                            </span>
                          )}
                        </div>
                        <p className="text-dark-600 leading-relaxed">
                          {item.description}
                        </p>
                        {item.dietary.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {item.dietary.map((diet, idx) => (
                              <span
                                key={idx}
                                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                              >
                                {diet}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="ml-6 flex-shrink-0">
                        <span className="text-2xl font-bold text-accent-600">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef's Special */}
      <section className="section-padding bg-gradient-to-br from-accent-50 via-white to-gold-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
              Chef's Special
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-6">
              Chef's <span className="gradient-text">Tasting Menu</span>
            </h2>
            <p className="text-lg text-dark-600 mb-10 leading-relaxed">
              Experience our chef's creativity with a carefully curated 7-course tasting menu 
              that changes seasonally to showcase the finest ingredients.
            </p>
            <div className="card p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-dark-900 mb-6">
                    7-Course Experience
                  </h3>
                  <ul className="text-left space-y-3 text-dark-600">
                    <li className="flex items-center"><span className="text-accent-500 mr-3">•</span> Amuse-bouche</li>
                    <li className="flex items-center"><span className="text-accent-500 mr-3">•</span> Seasonal appetizer</li>
                    <li className="flex items-center"><span className="text-accent-500 mr-3">•</span> Soup or salad course</li>
                    <li className="flex items-center"><span className="text-accent-500 mr-3">•</span> Fish course</li>
                    <li className="flex items-center"><span className="text-accent-500 mr-3">•</span> Meat course</li>
                    <li className="flex items-center"><span className="text-accent-500 mr-3">•</span> Cheese selection</li>
                    <li className="flex items-center"><span className="text-accent-500 mr-3">•</span> Dessert & petit fours</li>
                  </ul>
                </div>
                <div className="text-center flex flex-col justify-center">
                  <div className="text-5xl font-bold text-accent-600 mb-2">₹10,000</div>
                  <p className="text-dark-600 mb-6">per person</p>
                  <div className="text-4xl font-bold text-accent-600 mb-2">₹14,800</div>
                  <p className="text-dark-600">with wine pairing</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className="btn-primary text-lg">
              Reserve Tasting Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-900 mb-10">
              Dietary <span className="gradient-text">Information</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card p-6 hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="font-semibold text-dark-900 mb-2">Vegetarian</h3>
                <p className="text-sm text-dark-600">
                  Made without meat, poultry, or fish
                </p>
              </div>
              <div className="card p-6 hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="font-semibold text-dark-900 mb-2">Vegan</h3>
                <p className="text-sm text-dark-600">
                  Made without any animal products
                </p>
              </div>
              <div className="card p-6 hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🌾</div>
                <h3 className="font-semibold text-dark-900 mb-2">Gluten-Free</h3>
                <p className="text-sm text-dark-600">
                  Made without wheat, barley, or rye
                </p>
              </div>
            </div>
            <p className="text-dark-600 leading-relaxed">
              Please inform your server of any allergies or dietary restrictions. 
              Our kitchen team is happy to accommodate special requests whenever possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
