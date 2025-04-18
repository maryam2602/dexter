import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Laptop2, CheckCircle, ArrowRight } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Dexter Technologies</h1>
            <p className="text-xl mb-8">Building trust in the used tech market through expert inspection and training</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600">
              To create a transparent and reliable marketplace for used technology devices through professional inspection services and expert training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                alt="Founder"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>
              <p className="text-gray-600 mb-6">
                John Smith, a veteran in the tech industry with over 15 years of experience, founded Dexter Technologies with a vision to revolutionize the used tech market. His expertise in hardware diagnostics and commitment to quality assurance has shaped our company's core values.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>15+ years in tech industry</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Certified Hardware Expert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Former Senior Tech Advisor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">How Dexter Technologies Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-6 inline-block mb-6">
                <Laptop2 className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Device Submission</h3>
              <p className="text-gray-600">Sellers submit their devices for inspection or buyers request inspection for listed devices</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-6 inline-block mb-6">
                <Shield className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Expert Inspection</h3>
              <p className="text-gray-600">Our certified technicians perform thorough device inspection</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full p-6 inline-block mb-6">
                <Award className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Certification</h3>
              <p className="text-gray-600">Devices receive Dexter certification with detailed inspection reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">5000+</p>
              <p>Devices Inspected</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p>Certified Sellers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p>Training Graduates</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">99%</p>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                alt="Team member"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">David Chen</h3>
                <p className="text-gray-600 mb-4">Head of Technical Inspections</p>
                <p className="text-gray-500">10+ years experience in hardware diagnostics</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                alt="Team member"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-gray-600 mb-4">Training Program Director</p>
                <p className="text-gray-500">Expert in technical education and curriculum development</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
                alt="Team member"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
                <p className="text-gray-600 mb-4">Quality Assurance Manager</p>
                <p className="text-gray-500">Specialized in performance testing and certification</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Join our marketplace or enroll in our training programs today</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
              Browse Devices
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors flex items-center">
              View Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;