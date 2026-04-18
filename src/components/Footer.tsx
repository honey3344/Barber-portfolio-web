import { Phone, Mail, MapPin, Clock, MessageCircle, Camera, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BM</span>
              </div>
              <span className="text-xl font-bold">Barber & Makeup Studio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for professional barber services and expert makeup artistry. 
              Transform your look and boost your confidence.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                <MessageCircle size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-600 transition-colors">
                <Camera size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                <Share2 size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Haircuts & Styling</span>
              </li>
              <li>
                <span className="text-gray-400">Beard Grooming</span>
              </li>
              <li>
                <span className="text-gray-400">Hot Towel Shave</span>
              </li>
              <li>
                <span className="text-gray-400">Bridal Makeup</span>
              </li>
              <li>
                <span className="text-gray-400">Event Makeup</span>
              </li>
              <li>
                <span className="text-gray-400">Makeup Lessons</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="text-purple-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">For appointments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-pink-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">info@barbermakeupstudio.com</p>
                  <p className="text-sm text-gray-500">Send us a message</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-purple-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">123 Main Street</p>
                  <p className="text-gray-400">Downtown District, City 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-pink-400 mt-1" size={16} />
                <div>
                  <p className="text-gray-400">Mon-Fri: 9AM-8PM</p>
                  <p className="text-gray-400">Sat: 8AM-6PM, Sun: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for special offers, new services, and grooming tips.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Barber & Makeup Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
