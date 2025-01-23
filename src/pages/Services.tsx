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
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Our Services</h1>
          <p className="text-xl text-gray-400 mb-16">
            Comprehensive cloud solutions to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;