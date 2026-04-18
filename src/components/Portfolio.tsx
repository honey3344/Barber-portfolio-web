'use client';

import { Image as ImageIcon, Play, Sparkles, Heart, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../styles/animations.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const portfolioItems = [
    {
      id: 1,
      category: 'makeup',
      title: 'Royal Bridal Look',
      type: 'image',
      description: 'Traditional bridal makeup with gold accents'
    },
    {
      id: 2,
      category: 'makeup',
      title: 'Smokey Evening Glam',
      type: 'image',
      description: 'Perfect smokey eyes for special occasions'
    },
    {
      id: 3,
      category: 'makeup',
      title: 'Natural Dewy Look',
      type: 'image',
      description: 'Fresh natural makeup for daily wear'
    },
    {
      id: 4,
      category: 'makeup',
      title: 'Party Makeup Tutorial',
      type: 'video',
      description: 'Step by step party makeup transformation'
    },
    {
      id: 5,
      category: 'barber',
      title: 'Classic Gentlemen Cut',
      type: 'image',
      description: 'Timeless haircut with precision styling'
    },
    {
      id: 6,
      category: 'makeup',
      title: 'Bollywood Inspired Look',
      type: 'image',
      description: 'Glamorous makeup inspired by Bollywood'
    },
    {
      id: 7,
      category: 'barber',
      title: 'Modern Beard Style',
      type: 'image',
      description: 'Contemporary beard grooming and shaping'
    },
    {
      id: 8,
      category: 'makeup',
      title: 'Engagement Makeup',
      type: 'video',
      description: 'Perfect engagement ceremony makeup look'
    }
  ];

  // Filter portfolio items based on active filter
  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'barber') return item.category === 'barber';
    if (activeFilter === 'makeup') return item.category === 'makeup';
    return true;
  });

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-gray-900 mb-4">
            <span className="text-gradient">Our Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our work and see the transformations we've created for our clients. 
            Each style is crafted with precision and artistry.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === 'all' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              All Work
            </button>
            <button 
              onClick={() => setActiveFilter('barber')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === 'barber' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Barber
            </button>
            <button 
              onClick={() => setActiveFilter('makeup')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === 'makeup' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Makeup
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Premium Makeup Artist Image */}
              <div className={`aspect-square relative overflow-hidden ${
                item.category === 'barber' 
                  ? 'bg-gradient-to-br from-purple-300 via-purple-400 to-purple-600' 
                  : 'bg-gradient-to-br from-pink-300 via-pink-400 to-pink-600'
              }`}>
                {/* Luxury Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255,255,255,0.1) 10px,
                      rgba(255,255,255,0.1) 20px
                    )`
                  }}></div>
                </div>
                
                {/* Makeup Artist Specific Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transform transition-transform duration-300 group-hover:scale-110">
                  {item.category === 'makeup' ? (
                    <>
                      {/* Animated Makeup Icon */}
                      <div className="mb-4 animate-pulse">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-white/30">
                          <Sparkles className="text-white animate-spin-slow" size={32} />
                        </div>
                      </div>
                      
                      {/* Makeup Title */}
                      <h3 className="text-lg font-bold text-center mb-2 transition-all duration-300 group-hover:text-white/100">{item.title}</h3>
                      <p className="text-xs text-center opacity-90 mb-4 transition-all duration-300 group-hover:opacity-100">{item.description}</p>
                      
                      {/* Animated Makeup Features */}
                      <div className="flex items-center space-x-2 text-xs">
                        <Heart className="text-white/80 animate-pulse" size={12} />
                        <span className="transition-all duration-300 group-hover:text-white">Premium</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Animated Barber Icon */}
                      <div className="mb-4 animate-pulse">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-white/30">
                          <ImageIcon className="text-white animate-bounce-slow" size={32} />
                        </div>
                      </div>
                      
                      {/* Barber Title */}
                      <h3 className="text-lg font-bold text-center mb-2 transition-all duration-300 group-hover:text-white/100">{item.title}</h3>
                      <p className="text-xs text-center opacity-90 mb-4 transition-all duration-300 group-hover:opacity-100">{item.description}</p>
                      
                      {/* Animated Barber Features */}
                      <div className="flex items-center space-x-2 text-xs">
                        <Star className="text-white/80 animate-pulse" size={12} />
                        <span className="transition-all duration-300 group-hover:text-white">Professional</span>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Enhanced Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-2xl transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                      <Play className="text-purple-600 animate-pulse" size={40} />
                    </div>
                  </div>
                )}
                
                {/* Animated Category Badge */}
                <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-110">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                    item.category === 'barber' 
                      ? 'bg-purple-600 text-white shadow-md' 
                      : 'bg-pink-600 text-white shadow-md'
                  }`}>
                    {item.category === 'barber' ? 'Barber' : 'Makeup'}
                  </span>
                </div>
                
                {/* Enhanced Overlay for Makeup Items */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-500 group-hover:translate-y-0">
                    {item.category === 'makeup' ? (
                      <>
                        <h3 className="text-white font-semibold text-lg mb-1 transition-all duration-300 group-hover:text-white/100">{item.title}</h3>
                        <p className="text-white/90 text-sm mb-2 transition-all duration-300 group-hover:opacity-100">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-white/80 text-xs transition-all duration-300 group-hover:text-white">
                            {item.type === 'video' ? '▶ Watch Tutorial' : '📸 View Details'}
                          </p>
                          <div className="flex items-center space-x-1 transform transition-all duration-300 group-hover:scale-125">
                            <Heart className="text-pink-400 fill-current animate-pulse" size={12} />
                            <span className="text-white/80 text-xs transition-all duration-300 group-hover:text-white">Premium</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-white font-semibold text-lg mb-1 transition-all duration-300 group-hover:text-white/100">{item.title}</h3>
                        <p className="text-white/90 text-sm mb-2 transition-all duration-300 group-hover:opacity-100">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-white/80 text-xs transition-all duration-300 group-hover:text-white">
                            {item.type === 'video' ? '▶ Watch Video' : '📸 View Work'}
                          </p>
                          <div className="flex items-center space-x-1 transform transition-all duration-300 group-hover:scale-125">
                            <Star className="text-purple-400 fill-current animate-pulse" size={12} />
                            <span className="text-white/80 text-xs transition-all duration-300 group-hover:text-white">Expert</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for Your Transformation?
          </h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Book an appointment with our expert stylists and makeup artists to achieve the look you've always wanted.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all transform hover:scale-105">
            Book Your Appointment
          </button>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Amazing haircut and beard trim! The attention to detail is incredible. 
                I've been coming here for years and never disappointed."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Michael R.</div>
                  <div className="text-sm text-gray-600">Regular Client</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The bridal makeup was absolutely perfect! I felt so beautiful on my special day. 
                Thank you for making me look and feel amazing!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-pink-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah L.</div>
                  <div className="text-sm text-gray-600">Bridal Client</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Great atmosphere and professional service. Both my husband and I get our services here. 
                Highly recommend this one-stop shop!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Jennifer T.</div>
                  <div className="text-sm text-gray-600">Happy Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
