import React from 'react';
import { motion } from 'framer-motion';
import { Play, Book, Award, Users, Clock, CheckCircle } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Basic Hardware Maintenance",
    description: "Learn essential hardware maintenance techniques for laptops and desktops",
    duration: "4 weeks",
    level: "Beginner",
    price: 299,
    topics: [
      "Computer components overview",
      "Basic troubleshooting",
      "Cleaning and maintenance",
      "Performance optimization"
    ],
    video: "https://www.youtube.com/embed/example1"
  },
  {
    id: 2,
    title: "Advanced Diagnostics",
    description: "Master professional diagnostic techniques for complex hardware issues",
    duration: "6 weeks",
    level: "Advanced",
    price: 499,
    topics: [
      "Advanced diagnostic tools",
      "Component-level troubleshooting",
      "Data recovery techniques",
      "Performance analysis"
    ],
    video: "https://www.youtube.com/embed/example2"
  }
];

function Training() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Master Hardware Skills</h1>
            <p className="text-xl mb-8">Professional training programs to enhance your technical expertise</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Expert Instructors</h3>
                  <p className="text-indigo-200">Learn from industry professionals</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Flexible Schedule</h3>
                  <p className="text-indigo-200">Learn at your own pace</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold">Certification</h3>
                  <p className="text-indigo-200">Industry-recognized certificates</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold mb-12">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="flex items-center justify-center">
                  <Play className="h-16 w-16 text-indigo-600" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {course.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-indigo-600">${course.price}</p>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Book className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Study Materials</h3>
              <p className="text-gray-600">Comprehensive guides and documentation for each course</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Play className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
              <p className="text-gray-600">Step-by-step video instructions for practical learning</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with fellow learners and instructors</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">What prerequisites do I need?</h3>
            <p className="text-gray-600">Basic computer knowledge is required for beginner courses. Advanced courses may require prior experience with hardware maintenance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Are certificates provided?</h3>
            <p className="text-gray-600">Yes, upon successful completion of each course, you'll receive a verified certificate from Dexter Technologies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">How long do I have access?</h3>
            <p className="text-gray-600">You get lifetime access to the course materials after enrollment.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Is there practical training?</h3>
            <p className="text-gray-600">Yes, all courses include hands-on projects and practical exercises.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Training;