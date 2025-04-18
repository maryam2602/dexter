import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop2, Microscope, GraduationCap, Users } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Laptop2 className="h-8 w-8" />
            <span className="font-bold text-xl">Dexter Technologies</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/devices" className="flex items-center space-x-1 hover:text-indigo-200">
              <Laptop2 className="h-5 w-5" />
              <span>Devices</span>
            </Link>
            <Link to="/inspection" className="flex items-center space-x-1 hover:text-indigo-200">
              <Microscope className="h-5 w-5" />
              <span>Inspection</span>
            </Link>
            <Link to="/training" className="flex items-center space-x-1 hover:text-indigo-200">
              <GraduationCap className="h-5 w-5" />
              <span>Training</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-indigo-200">
              <Users className="h-5 w-5" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar