import React, { useState } from 'react';
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
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/menu-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto px-2"
          >
            Discover our carefully crafted culinary creations
          </motion.p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gold-600 text-white shadow-lg'
                    : 'bg-gray-100 text-primary-700 hover:bg-gold-100 hover:text-gold-700'
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
              <h2 className="text-3xl font-playfair font-bold text-primary-900 mb-8 text-center">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </h2>
              
              <div className="space-y-6">
                {menuData[activeCategory].map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-playfair font-semibold text-primary-900">
                            {item.name}
                          </h3>
                          {item.dietary.length > 0 && (
                            <span className="text-lg" title={item.dietary.join(', ')}>
                              {getDietaryIcon(item.dietary)}
                            </span>
                          )}
                        </div>
                        <p className="text-primary-600 leading-relaxed">
                          {item.description}
                        </p>
                        {item.dietary.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {item.dietary.map((diet, idx) => (
                              <span
                                key={idx}
                                className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                              >
                                {diet}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="ml-6">
                        <span className="text-2xl font-bold text-gold-600">
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
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-playfair font-bold text-primary-900 mb-6">
              Chef's Tasting Menu
            </h2>
            <p className="text-lg text-primary-700 mb-8 leading-relaxed">
              Experience our chef's creativity with a carefully curated 7-course tasting menu 
              that changes seasonally to showcase the finest ingredients.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-primary-900 mb-4">
                    7-Course Experience
                  </h3>
                  <ul className="text-left space-y-2 text-primary-600">
                    <li>• Amuse-bouche</li>
                    <li>• Seasonal appetizer</li>
                    <li>• Soup or salad course</li>
                    <li>• Fish course</li>
                    <li>• Meat course</li>
                    <li>• Cheese selection</li>
                    <li>• Dessert & petit fours</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-600 mb-2">₹10,000</div>
                  <p className="text-primary-600 mb-4">per person</p>
                  <div className="text-3xl font-bold text-gold-600 mb-2">₹14,800</div>
                  <p className="text-primary-600">with wine pairing</p>
                </div>
              </div>
            </div>
            <button className="btn-primary text-lg">
              Reserve Tasting Menu
            </button>
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl font-playfair font-bold text-primary-900 mb-8">
              Dietary Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="font-semibold text-primary-900 mb-2">Vegetarian</h3>
                <p className="text-sm text-primary-600">
                  Made without meat, poultry, or fish
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="font-semibold text-primary-900 mb-2">Vegan</h3>
                <p className="text-sm text-primary-600">
                  Made without any animal products
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="text-3xl mb-3">🌾</div>
                <h3 className="font-semibold text-primary-900 mb-2">Gluten-Free</h3>
                <p className="text-sm text-primary-600">
                  Made without wheat, barley, or rye
                </p>
              </div>
            </div>
            <p className="text-primary-600 mt-8 leading-relaxed">
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
