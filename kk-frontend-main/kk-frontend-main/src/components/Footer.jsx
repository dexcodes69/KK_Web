import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              Transforming bedrooms into sanctuaries of comfort with our premium bedding collections. Experience the perfect blend of luxury, comfort, and style.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/knightkavalier.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/knight.kavalier/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'HOME', path: '/' },
                { name: 'COLLECTION', path: '/collection' },
                { name: 'ABOUT', path: '/about' },
                { name: 'CONTACT', path: '/contact' },
                { name: 'BLOG', path: '/blog' },
                { name: 'COLOR THERAPY', path: '/color-therapy' },
                { name: 'BED-BUILDER', path: '/bed-builder' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">555, Rex Textiles<br />I Block, Satabalipuram<br />Gwalior, M.P. - 474020</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-gray-400 mr-3" />
                <a href="tel:+12124567890" className="text-gray-400 hover:text-white transition-colors">8770520050</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-400 mr-3" />
                <a href="mailto:textiles.rex@gmail.com" className="text-gray-400 hover:text-white transition-colors">textiles.rex@gmail.com</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-gray-300 mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full text-gray-900 focus:outline-none"
                />
                <button className="bg-white text-black px-4 py-2 font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Knight Kavalier. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex space-x-6">
                <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
