import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">MHome</h3>
            <p className="mt-4 text-gray-400">
              Your trusted partner in finding the perfect property in Vietnam.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Buy Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sell Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Rental Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Property Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-400">1800-123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-400">info@mhome.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-blue-400" />
                <span className="text-gray-400">123 Real Estate Street, Ho Chi Minh City, Vietnam</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;