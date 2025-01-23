import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-4">ZoeenCloud</h3>
            <p className="text-gray-300">
              Transforming businesses through innovative cloud solutions
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300 hover:text-gray-100 transition-colors">
                <Mail className="h-5 w-5 mr-2 text-purple-500" />
                mohammed@zoeencloud.com
              </p>
              <p className="flex items-center text-gray-300 hover:text-gray-100 transition-colors">
                <Phone className="h-5 w-5 mr-2 text-purple-500" />
                +(91) 7760594662
              </p>
              <p className="flex items-center text-gray-300 hover:text-gray-100 transition-colors">
                <MapPin className="h-5 w-5 mr-2 text-purple-500" />
                Godrej Aqua, Sammys DreamLand, Hosahalli, Banaglore - 562157
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-gray-100 transition-colors cursor-pointer">Cloud Architecture</li>
              <li className="text-gray-300 hover:text-gray-100 transition-colors cursor-pointer">DevOps Solutions</li>
              <li className="text-gray-300 hover:text-gray-100 transition-colors cursor-pointer">FinOps Management</li>
              <li className="text-gray-300 hover:text-gray-100 transition-colors cursor-pointer">Cloud Security</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-gray-100 transition-colors cursor-pointer">Privacy Policy</li>
              <li className="text-gray-300 hover:text-gray-100 transition-colors cursor-pointer">Terms of Service</li>
              <li className="text-gray-300 hover:text-gray-100 transition-colors cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} ZoeenCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
