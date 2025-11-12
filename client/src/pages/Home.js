import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const signatureDishes = [
    {
      id: 1,
      name: "Truffle Risotto",
      description: "Creamy Arborio rice with black truffle, parmesan, and wild mushrooms",
      price: "₹2,560",
      image: "/images/truffle-risotto.jpg"
    },
    {
      id: 2,
      name: "Wagyu Beef Tenderloin",
      description: "Premium wagyu beef with roasted vegetables and red wine reduction",
      price: "₹5,200",
      image: "/images/wagyu-beef.jpg"
    },
    {
      id: 3,
      name: "Pan-Seared Salmon",
      description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
      price: "₹2,240",
      image: "/images/salmon.jpg"
    },
    {
      id: 4,
      name: "Chocolate Soufflé",
      description: "Rich dark chocolate soufflé with vanilla bean ice cream",
      price: "₹1,440",
      image: "/images/chocolate-souffle.jpg"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "An absolutely incredible dining experience! The ambiance is perfect and every dish was a masterpiece.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "The Gourmet Table exceeded all expectations. The service was impeccable and the food was divine.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      text: "A culinary journey like no other. Each course was perfectly crafted and beautifully presented.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      text: "Outstanding restaurant! The atmosphere is elegant and the flavors are unforgettable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-900/20 via-transparent to-dark-900/40" />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-semibold mb-6 animate-float">
              ✨ Award-Winning Fine Dining
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold mb-6 sm:mb-8 leading-tight"
          >
            <span className="block">The Gourmet</span>
            <span className="block gradient-text">Table</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2 text-white/90 font-light"
          >
            Where culinary artistry meets exceptional dining experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact" className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto">
              Book a Table
            </Link>
            <Link to="/menu" className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto">
              View Menu
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Signature Dishes Section */}
      <section className="section-padding bg-gradient-to-b from-white to-dark-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
              Our Specialties
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark-900 mb-6">
              Signature <span className="gradient-text">Dishes</span>
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto leading-relaxed">
              Discover our chef's carefully crafted signature dishes, each telling a unique story of flavor and artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-playfair font-semibold text-dark-900">
                      {dish.name}
                    </h3>
                    <span className="text-accent-600 font-bold text-lg">{dish.price}</span>
                  </div>
                  <p className="text-dark-600 leading-relaxed">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/menu" className="btn-primary text-lg">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 via-transparent to-gold-50/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark-900 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-dark-700 mb-6 leading-relaxed">
                Founded in 2010, The Gourmet Table has been a beacon of culinary excellence, 
                combining traditional techniques with modern innovation to create unforgettable dining experiences.
              </p>
              <p className="text-dark-600 mb-8 leading-relaxed">
                Our passionate team of chefs sources the finest ingredients from local farms and 
                international suppliers to craft dishes that celebrate both flavor and artistry.
              </p>
              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
            <div data-aos="fade-left" className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-400 to-gold-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                alt="Restaurant Interior"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-glow-lg transform rotate-6 hover:rotate-12 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">14+</div>
                  <div className="text-sm font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-b from-dark-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark-900 mb-6">
              What Our <span className="gradient-text">Guests</span> Say
            </h2>
            <p className="text-lg text-dark-600 max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied guests about their dining experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-dark-700 mb-4 italic leading-relaxed text-base">
                  "{testimonial.text}"
                </p>
                <h4 className="font-semibold text-dark-900">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-accent-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop')"}}></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-semibold mb-6">
              Reserve Now
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Ready for an <span className="text-accent-400">Unforgettable</span> Experience?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/80 leading-relaxed">
              Reserve your table today and embark on a culinary journey that will delight all your senses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto">
                Book Your Table
              </Link>
              <Link to="/contact" className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
