import React from 'react';
import { Terminal, Globe, Code, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Internships = () => {
  const internships = [
    {
      icon: Terminal,
      title: 'DevOps Internship',
      description:
        'Master modern DevOps practices including CI/CD, containerization, and cloud infrastructure management.',
      duration: '12 weeks',
      price: '$299.99',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS/Azure', 'Terraform']
    },
    {
      icon: Globe,
      title: 'Full-Stack Cloud Deployment',
      description:
        'Learn to deploy and manage full-stack applications on major cloud platforms with best practices.',
      duration: '16 weeks',
      price: '$349.99',
      skills: ['Cloud Platforms', 'Deployment', 'Security', 'Monitoring', 'Cost Optimization']
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description:
        'Comprehensive training in modern full-stack development with cloud-native approaches.',
      duration: '24 weeks',
      price: '$399.99',
      skills: ['React', 'Node.js', 'MongoDB', 'Cloud Services', 'API Design']
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Internship Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Launch your career in cloud technology with our comprehensive internship programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="card-gradient p-6 md:p-8 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors group"
            >
              <internship.icon className="h-10 w-10 md:h-12 md:w-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {internship.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                {internship.description}
              </p>
              <div className="text-gray-400 mb-2">
                <span className="font-semibold text-purple-500">Duration:</span> {internship.duration}
              </div>
              <div className="text-gray-400 mb-6">
                <span className="font-semibold text-purple-500">Price:</span> {internship.price}
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-purple-500 mb-2">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/login"
                className="text-purple-500 font-semibold hover:text-purple-400 inline-flex items-center group-hover:translate-x-1 transition-transform"
              >
                Enroll Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;
