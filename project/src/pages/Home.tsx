import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Laptop2, Shield, Award, Star, Users, Clock, CheckCircle, ArrowRight, PenTool as Tool, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const devices = [
  {
    id: 1,
    name: "MacBook Pro M2",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000",
    price: 1299,
    condition: "Excellent",
    rating: 4.8,
    reviews: 156,
    specs: {
      processor: "Apple M2",
      ram: "16GB",
      storage: "512GB SSD",
      generation: "2023"
    }
  },
  {
    id: 2,
    name: "Dell XPS 15",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000",
    price: 1599,
    condition: "Like New",
    rating: 4.9,
    reviews: 203,
    specs: {
      processor: "Intel i9",
      ram: "32GB",
      storage: "1TB SSD",
      generation: "12th Gen"
    }
  },
  {
    id: 3,
    name: "ThinkPad X1 Carbon",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1000",
    price: 1199,
    condition: "Good",
    rating: 4.7,
    reviews: 178,
    specs: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD",
      generation: "11th Gen"
    }
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000",
    content: "Dexter Technologies made buying a used laptop stress-free. Their inspection report was thorough and accurate!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000",
    content: "The training programs are excellent. I learned so much about hardware diagnostics and maintenance."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000",
    content: "Found my perfect laptop through Dexter. The certification gave me complete peace of mind."
  }
];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    ram: '',
    storage: '',
    generation: '',
    priceRange: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-indigo-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Find Your Perfect Tech Device
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl mb-8"
              >
                Expert inspections, verified devices, and professional training all in one place
              </motion.p>
              
              {/* Search Bar */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-lg p-4 shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <Search className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search devices..."
                    className="flex-1 outline-none text-gray-800"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button 
                    className="flex items-center space-x-2 text-indigo-600"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-5 w-5" />
                    <span>Filters</span>
                  </button>
                </div>
                
                {showFilters && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="grid grid-cols-2 gap-4 mt-4"
                  >
                    <select 
                      className="border rounded p-2 text-gray-800"
                      value={filters.ram}
                      onChange={(e) => setFilters({...filters, ram: e.target.value})}
                    >
                      <option value="">RAM</option>
                      <option value="8GB">8GB</option>
                      <option value="16GB">16GB</option>
                      <option value="32GB">32GB</option>
                    </select>
                    <select 
                      className="border rounded p-2 text-gray-800"
                      value={filters.storage}
                      onChange={(e) => setFilters({...filters, storage: e.target.value})}
                    >
                      <option value="">Storage</option>
                      <option value="256GB">256GB</option>
                      <option value="512GB">512GB</option>
                      <option value="1TB">1TB</option>
                    </select>
                    <select 
                      className="border rounded p-2 text-gray-800"
                      value={filters.generation}
                      onChange={(e) => setFilters({...filters, generation: e.target.value})}
                    >
                      <option value="">Generation</option>
                      <option value="11th">11th Gen</option>
                      <option value="12th">12th Gen</option>
                      <option value="13th">13th Gen</option>
                    </select>
                    <select 
                      className="border rounded p-2 text-gray-800"
                      value={filters.priceRange}
                      onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    >
                      <option value="">Price Range</option>
                      <option value="0-1000">$0 - $1000</option>
                      <option value="1000-2000">$1000 - $2000</option>
                      <option value="2000+">$2000+</option>
                    </select>
                  </motion.div>
                )}
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000"
                alt="Featured Device"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Dexter Technologies?</h2>
            <p className="text-xl text-gray-600">Your trusted partner in the used tech market</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <Shield className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Inspection</h3>
              <p className="text-gray-600">Professional evaluation of every device ensures quality and reliability</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <Award className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Devices</h3>
              <p className="text-gray-600">Every device comes with our quality certification</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Training Programs</h3>
              <p className="text-gray-600">Learn from industry experts and enhance your skills</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Devices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Devices</h2>
            <Link to="/devices" className="text-indigo-600 hover:text-indigo-700 flex items-center">
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devices.map((device) => (
              <motion.div
                key={device.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={device.image} alt={device.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{device.name}</h3>
                    <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                      {device.condition}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-600">{device.rating}</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-gray-600">{device.reviews} reviews</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p><strong>Processor:</strong> {device.specs.processor}</p>
                    <p><strong>RAM:</strong> {device.specs.ram}</p>
                    <p><strong>Storage:</strong> {device.specs.storage}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-indigo-600">${device.price}</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Tool className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Device Inspection</h3>
              <p className="text-gray-600 mb-4">
                Our expert technicians thoroughly inspect every device to ensure quality and reliability.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Hardware diagnostics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Performance testing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Detailed reports</span>
                </li>
              </ul>
              <Link 
                to="/inspection"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <Zap className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Training Programs</h3>
              <p className="text-gray-600 mb-4">
                Master hardware skills with our comprehensive training programs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Expert instructors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Hands-on practice</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Certification</span>
                </li>
              </ul>
              <Link 
                to="/training"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="flex text-yellow-400 mt-4">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-8">Join our marketplace today and find your perfect device</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/devices"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center"
            >
              Browse Devices
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/inspection"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
            >
              Book Inspection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;