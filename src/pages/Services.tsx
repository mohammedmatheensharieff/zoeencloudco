import React from 'react';
import { Cloud, Server, Database, Shield, Gauge, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure cloud infrastructure tailored to your business needs.',
    },
    {
      icon: Server,
      title: 'DevOps Solutions',
      description: 'Streamline your development and operations with modern DevOps practices and tools.',
    },
    {
      icon: Database,
      title: 'FinOps Management',
      description: 'Optimize cloud costs while maintaining performance and reliability.',
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Implement robust security measures to protect your cloud infrastructure.',
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Enhance your applications performance with expert cloud optimization.',
    },
    {
      icon: Code,
      title: 'Cloud Native Development',
      description: 'Build modern, scalable applications using cloud-native technologies.',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Comprehensive cloud solutions to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-gradient p-6 md:p-8 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors group"
            >
              <service.icon className="h-10 w-10 md:h-12 md:w-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
