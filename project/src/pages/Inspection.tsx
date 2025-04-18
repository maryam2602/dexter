import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Clock, Calendar } from 'lucide-react';

const sampleReport = {
  deviceName: "MacBook Pro 2021",
  inspectionDate: "2025-03-15",
  overallCondition: "Excellent",
  sections: [
    {
      title: "Physical Condition",
      score: 95,
      details: [
        { item: "Screen", condition: "Perfect", notes: "No scratches or dead pixels" },
        { item: "Body", condition: "Excellent", notes: "Minor wear on bottom corners" },
        { item: "Keyboard", condition: "Perfect", notes: "All keys working perfectly" },
        { item: "Trackpad", condition: "Perfect", notes: "Responsive, no issues" }
      ]
    },
    {
      title: "Performance",
      score: 98,
      details: [
        { item: "CPU", condition: "Perfect", notes: "Performs as expected" },
        { item: "Memory", condition: "Perfect", notes: "All slots working" },
        { item: "Storage", condition: "Perfect", notes: "No bad sectors" },
        { item: "Battery", condition: "Excellent", notes: "89% of original capacity" }
      ]
    }
  ]
};

function Inspection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    deviceModel: '',
    preferredDate: '',
    location: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Inspection Service Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Professional Device Inspection</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Thorough Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of device condition and performance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <AlertCircle className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
              <p className="text-gray-600">Detailed reports from certified technicians</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Inspection reports within 24-48 hours</p>
            </div>
          </div>
        </motion.div>

        {/* Pricing */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Inspection Charges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Basic Inspection</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-4">$49</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Physical condition assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Basic performance testing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Standard report
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Select Plan
              </button>
            </div>
            <div className="border rounded-lg p-6 bg-indigo-50 border-indigo-200">
              <h3 className="text-xl font-semibold mb-4">Premium Inspection</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-4">$99</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Comprehensive hardware check
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Detailed performance analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Software health check
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Detailed report with recommendations
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Select Plan
              </button>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Advanced Inspection</h3>
              <p className="text-3xl font-bold text-indigo-600 mb-4">$149</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  All Premium features
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Security assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Data health check
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Priority service
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Select Plan
              </button>
            </div>
          </div>
        </div>

        {/* Sample Report */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Sample Inspection Report</h2>
          <div className="border rounded-lg p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{sampleReport.deviceName}</h3>
                <p className="text-gray-600">Inspection Date: {sampleReport.inspectionDate}</p>
              </div>
              <div className="bg-green-100 text-green-800 text-lg font-semibold px-4 py-2 rounded">
                {sampleReport.overallCondition}
              </div>
            </div>
            
            {sampleReport.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">{section.title}</h4>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-indigo-600">{section.score}/100</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.details.map((detail, idx) => (
                    <div key={idx} className="border rounded p-4">
                      <h5 className="font-semibold mb-2">{detail.item}</h5>
                      <p className="text-sm text-gray-600">Condition: {detail.condition}</p>
                      <p className="text-sm text-gray-600">Notes: {detail.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Book an Inspection</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Device Type
                </label>
                <select
                  name="deviceType"
                  value={formData.deviceType}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                >
                  <option value="">Select Device Type</option>
                  <option value="laptop">Laptop</option>
                  <option value="desktop">Desktop</option>
                  <option value="tablet">Tablet</option>
                  <option value="phone">Phone</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Device Model
                </label>
                <input
                  type="text"
                  name="deviceModel"
                  value={formData.deviceModel}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Inspection Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 h-32"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Book Inspection
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Inspection;