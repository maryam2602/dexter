import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dexter Technologies</h3>
            <p className="text-gray-300">Your trusted partner in tech device inspection and training.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Mail className="mr-2 h-5 w-5" /> contact@dexter.tech</p>
              <p className="flex items-center"><Phone className="mr-2 h-5 w-5" /> +1 (555) 123-4567</p>
              <p className="flex items-center"><MapPin className="mr-2 h-5 w-5" /> 123 Tech Street, Silicon Valley</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/devices" className="hover:text-indigo-400">Browse Devices</a></li>
              <li><a href="/inspection" className="hover:text-indigo-400">Book Inspection</a></li>
              <li><a href="/training" className="hover:text-indigo-400">Training Programs</a></li>
              <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2025 Dexter Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer