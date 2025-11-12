import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const chefs = [
    {
      id: 1,
      name: "Chef Marcus Laurent",
      position: "Executive Chef",
      bio: "With over 15 years of experience in Michelin-starred restaurants across Europe, Chef Laurent brings innovative techniques and classical French training to every dish.",
      image: "/images/chef-marcus.jpg",
      specialties: ["French Cuisine", "Molecular Gastronomy", "Wine Pairing"]
    },
    {
      id: 2,
      name: "Chef Isabella Rodriguez",
      position: "Pastry Chef",
      bio: "A master of dessert artistry, Chef Rodriguez creates stunning pastries that are as beautiful as they are delicious, trained in the finest patisseries of Paris.",
      image: "/images/chef-isabella.jpg",
      specialties: ["Pastry Arts", "Chocolate Work", "Plated Desserts"]
    },
    {
      id: 3,
      name: "Chef Hiroshi Tanaka",
      position: "Sous Chef",
      bio: "Bringing precision and artistry from Japanese culinary traditions, Chef Tanaka specializes in fresh seafood and innovative fusion techniques.",
      image: "/images/chef-hiroshi.jpg",
      specialties: ["Japanese Cuisine", "Seafood", "Knife Skills"]
    }
  ];

  const values = [
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We source ingredients from local, sustainable farms and practice eco-friendly operations."
    },
    {
      icon: "👨‍🍳",
      title: "Craftsmanship",
      description: "Every dish is meticulously crafted with attention to detail and passion for perfection."
    },
    {
      icon: "🤝",
      title: "Community",
      description: "We believe in building relationships with our guests, suppliers, and local community."
    },
    {
      icon: "✨",
      title: "Innovation",
      description: "We constantly evolve our menu and techniques while respecting culinary traditions."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop')",
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
              About Us
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
          >
            Our <span className="gradient-text">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90"
          >
            A journey of culinary excellence and passion
          </motion.p>
        </div>
      </section>

      {/* Restaurant Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-6">
                The <span className="gradient-text">Beginning</span>
              </h2>
              <p className="text-lg text-dark-700 mb-6 leading-relaxed">
                The Gourmet Table was born from a simple dream: to create a dining experience that 
                transcends the ordinary. Founded in 2010 by culinary visionary James Morrison, 
                our restaurant began as a small bistro with big ambitions.
              </p>
              <p className="text-dark-600 mb-6 leading-relaxed">
                What started as a 20-seat establishment has grown into one of the city's most 
                celebrated dining destinations, earning recognition from food critics and 
                building a loyal following of discerning guests.
              </p>
              <p className="text-dark-600 leading-relaxed">
                Today, we continue to honor our founding principles: exceptional ingredients, 
                masterful technique, and warm hospitality that makes every guest feel like family.
              </p>
            </div>
            <div data-aos="fade-left" className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop"
                alt="Restaurant History"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark-900 mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do at The Gourmet Table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-playfair font-semibold text-dark-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Chefs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark-900 mb-6">
              Meet Our <span className="gradient-text">Chefs</span>
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto leading-relaxed">
              The talented culinary artists behind every exceptional dish
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=500&fit=crop&crop=center`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-dark-900 mb-2">
                    {chef.name}
                  </h3>
                  <p className="text-accent-600 font-semibold mb-4">{chef.position}</p>
                  <p className="text-dark-600 mb-4 leading-relaxed">{chef.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold text-dark-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {chef.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gold-400 mb-2">2023</div>
              <h3 className="text-lg font-semibold mb-2">Best Fine Dining</h3>
              <p className="text-gray-300">City Restaurant Awards</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gold-400 mb-2">★★</div>
              <h3 className="text-lg font-semibold mb-2">Michelin Stars</h3>
              <p className="text-gray-300">Michelin Guide</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gold-400 mb-2">4.9</div>
              <h3 className="text-lg font-semibold mb-2">Guest Rating</h3>
              <p className="text-gray-300">Based on 500+ reviews</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-gold-400 mb-2">2022</div>
              <h3 className="text-lg font-semibold mb-2">Wine Excellence</h3>
              <p className="text-gray-300">Wine Spectator Award</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
              Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark-900 mb-8">
              Our <span className="gradient-text">Philosophy</span>
            </h2>
            <blockquote className="text-2xl md:text-3xl text-dark-700 italic leading-relaxed mb-8">
              "Cooking is not just about feeding the body, but nourishing the soul. 
              Every dish we create is a story, every meal an experience, 
              and every guest a cherished part of our culinary journey."
            </blockquote>
            <p className="text-lg text-accent-600 font-semibold">
              — James Morrison, Founder & Owner
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
