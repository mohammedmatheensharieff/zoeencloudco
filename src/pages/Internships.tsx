import React from 'react';
import { Terminal, Globe, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Internships = () => {
  const internships = [
    {
      icon: Terminal,
      title: 'DevOps Internship',
      description: 'Master modern DevOps practices including CI/CD, containerization, and cloud infrastructure management.',
      duration: '12 weeks',
      price: '$299.99',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS/Azure', 'Terraform']
    },
    {
      icon: Globe,
      title: 'Full-Stack Cloud Deployment',
      description: 'Learn to deploy and manage full-stack applications on major cloud platforms with best practices.',
      duration: '16 weeks',
      price: '$349.99',
      skills: ['Cloud Platforms', 'Deployment', 'Security', 'Monitoring', 'Cost Optimization']
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Comprehensive training in modern full-stack development with cloud-native approaches.',
      duration: '24 weeks',
      price: '$399.99',
      skills: ['React', 'Node.js', 'MongoDB', 'Cloud Services', 'API Design']
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Internship Programs</h1>
          <p className="text-xl text-gray-400">
            Launch your career in cloud technology with our comprehensive internship programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <internship.icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {internship.title}
                </h3>
                <p className="text-gray-400 mb-4">{internship.description}</p>
                <div className="mb-4">
                  <span className="text-blue-500 font-semibold">Duration: </span>
                  <span className="text-gray-300">{internship.duration}</span>
                </div>
                <div className="mb-6">
                  <span className="text-blue-500 font-semibold">Price: </span>
                  <span className="text-gray-300">{internship.price}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-blue-500 font-semibold">Skills you'll learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-750 border-t border-gray-700">
                <Link
                  to="/login"
                  className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;