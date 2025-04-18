import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const devices = [
  {
    id: 1,
    name: "MacBook Pro M2",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000",
    price: 1299,
    condition: "Excellent",
    seller: "John Doe",
    inspected: true,
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
    seller: "Jane Smith",
    inspected: true,
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
    seller: "Tech Resale Pro",
    inspected: true,
    specs: {
      processor: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD",
      generation: "11th Gen"
    }
  }
];

function Devices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    ram: '',
    storage: '',
    generation: '',
    condition: '',
    priceRange: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % devices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + devices.length) % devices.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search devices..."
              className="flex-1 outline-none border-b-2 border-gray-200 focus:border-indigo-600"
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
              exit={{ height: 0, opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
            >
              <select 
                className="border rounded-lg p-2"
                value={filters.ram}
                onChange={(e) => setFilters({...filters, ram: e.target.value})}
              >
                <option value="">RAM</option>
                <option value="8GB">8GB</option>
                <option value="16GB">16GB</option>
                <option value="32GB">32GB</option>
              </select>
              <select 
                className="border rounded-lg p-2"
                value={filters.storage}
                onChange={(e) => setFilters({...filters, storage: e.target.value})}
              >
                <option value="">Storage</option>
                <option value="256GB">256GB</option>
                <option value="512GB">512GB</option>
                <option value="1TB">1TB</option>
              </select>
              <select 
                className="border rounded-lg p-2"
                value={filters.condition}
                onChange={(e) => setFilters({...filters, condition: e.target.value})}
              >
                <option value="">Condition</option>
                <option value="Like New">Like New</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
              </select>
            </motion.div>
          )}
        </div>
      </div>

      {/* Featured Device Slideshow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Devices</h2>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-96">
              <img 
                src={devices[currentSlide].image} 
                alt={devices[currentSlide].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{devices[currentSlide].name}</h3>
                <p className="text-xl text-white">${devices[currentSlide].price}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-600">Processor</p>
                  <p className="font-semibold">{devices[currentSlide].specs.processor}</p>
                </div>
                <div>
                  <p className="text-gray-600">RAM</p>
                  <p className="font-semibold">{devices[currentSlide].specs.ram}</p>
                </div>
                <div>
                  <p className="text-gray-600">Storage</p>
                  <p className="font-semibold">{devices[currentSlide].specs.storage}</p>
                </div>
                <div>
                  <p className="text-gray-600">Generation</p>
                  <p className="font-semibold">{devices[currentSlide].specs.generation}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Condition: <span className="font-semibold">{devices[currentSlide].condition}</span></p>
                  <p className="text-gray-600">Seller: <span className="font-semibold">{devices[currentSlide].seller}</span></p>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* All Devices Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">All Devices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device) => (
            <motion.div
              key={device.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={device.image} alt={device.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{device.name}</h3>
                  <p className="text-lg font-bold text-indigo-600">${device.price}</p>
                </div>
                <div className="space-y-2 mb-4">
                  <p><strong>Processor:</strong> {device.specs.processor}</p>
                  <p><strong>RAM:</strong> {device.specs.ram}</p>
                  <p><strong>Storage:</strong> {device.specs.storage}</p>
                  <p><strong>Generation:</strong> {device.specs.generation}</p>
                  <p><strong>Condition:</strong> {device.condition}</p>
                </div>
                {device.inspected && (
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      Dexter Certified
                    </span>
                  </div>
                )}
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Devices;