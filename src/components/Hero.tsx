'use client';

import { ArrowRight, Scissors, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center md:text-left"
          >
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="flex items-center justify-center md:justify-start space-x-2 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Scissors className="text-purple-600" size={24} />
              </motion.div>

              <span className="text-purple-600 font-semibold">
                Professional Grooming & Beauty Services
              </span>

              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.5,
                }}
              >
                <Sparkles className="text-pink-600" size={24} />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
            >
              Look Your Best,
              <span className="block text-purple-600">
                Feel Confident
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0"
            >
              Expert barber services and professional makeup artistry all under
              one roof. Transform your look and boost your confidence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && window.openBookingModal) {
                    window.openBookingModal('');
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full flex items-center justify-center"
              >
                Book Appointment
                <ArrowRight className="ml-2" size={20} />
              </button>

              <a
                href="#portfolio"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white text-center"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main */}
              <div className="col-span-2 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-purple-400 to-pink-400 flex flex-col items-center justify-center text-white">
                  <Scissors size={60} />
                  <Sparkles size={60} />
                  <p className="text-2xl font-bold mt-4">
                    Premium Grooming
                  </p>
                </div>
              </div>

              {/* Side 1 */}
              <div className="rounded-2xl bg-purple-400 text-white flex items-center justify-center aspect-square">
                Barber
              </div>

              {/* Side 2 */}
              <div className="rounded-2xl bg-pink-400 text-white flex items-center justify-center aspect-square">
                Makeup
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-4 rounded-xl shadow-xl">
              10+ Years
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
 