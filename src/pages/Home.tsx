import React from 'react';
import { Cloud, Server, Database, Shield, Cpu, Code, ChevronRight, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-gray-900/50 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="relative">
                <Zap className="h-12 w-12 md:h-16 md:w-16 text-white" />
                <div className="absolute -top-1 -right-1 h-3 w-3 md:h-4 md:w-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Transform Your Business with Cloud Solutions
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-400">
              Expert Cloud Architecture, DevOps, and FinOps Services for the Modern Enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2.5 rounded-lg text-base md:text-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
              >
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/internships"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2.5 rounded-lg text-base md:text-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center justify-center"
              >
                Join Our Program
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-gray-900/50 to-black py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">500+</div>
              <div className="text-sm md:text-base text-gray-400 mt-1">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">99.9%</div>
              <div className="text-sm md:text-base text-gray-400 mt-1">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">24/7</div>
              <div className="text-sm md:text-base text-gray-400 mt-1">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">1000+</div>
              <div className="text-sm md:text-base text-gray-400 mt-1">Deployments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-black to-gray-900/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Core Services</h2>
            <p className="text-base md:text-lg text-gray-400">Comprehensive cloud solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="card-gradient p-6 md:p-8 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors group">
              <Cloud className="h-10 w-10 md:h-12 md:w-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Cloud Architecture</h3>
              <p className="text-sm md:text-base text-gray-400">
                Design and implement scalable cloud infrastructure tailored to your needs
              </p>
            </div>
            <div className="card-gradient p-6 md:p-8 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors group">
              <Server className="h-10 w-10 md:h-12 md:w-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">DevOps</h3>
              <p className="text-sm md:text-base text-gray-400">
                Streamline your development and operations with modern DevOps practices
              </p>
            </div>
            <div className="card-gradient p-6 md:p-8 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors group">
              <Database className="h-10 w-10 md:h-12 md:w-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">FinOps</h3>
              <p className="text-sm md:text-base text-gray-400">
                Optimize your cloud costs while maintaining performance and reliability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-gray-900/50 to-black py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose ZoeenCloud?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-purple-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Enterprise-Grade Security</h3>
                    <p className="text-sm md:text-base text-gray-400">Advanced security measures to protect your infrastructure and data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Cpu className="h-6 w-6 text-purple-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">High Performance</h3>
                    <p className="text-sm md:text-base text-gray-400">Optimized infrastructure for maximum speed and reliability</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Code className="h-6 w-6 text-purple-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-sm md:text-base text-gray-400">Certified professionals with years of industry experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="aspect-square rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 absolute inset-0" />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="bg-gradient-to-b from-black to-gray-900/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Launch Your Career</h2>
            <p className="text-base md:text-lg text-gray-400">Join our comprehensive internship programs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="card-gradient p-6 md:p-8 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors group">
              <Award className="h-10 w-10 md:h-12 md:w-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">DevOps Internship</h3>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                Master modern DevOps practices including CI/CD, containerization, and cloud infrastructure management
              </p>
              <Link
                to="/internships"
                className="text-purple-500 font-semibold hover:text-purple-400 inline-flex items-center group-hover:translate-x-1 transition-transform"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="card-gradient p-6 md:p-8 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors group">
              <Code className="h-10 w-10 md:h-12 md:w-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Full-Stack Development</h3>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                Comprehensive training in modern full-stack development with cloud deployment expertise
              </p>
              <Link
                to="/internships"
                className="text-purple-500 font-semibold hover:text-purple-400 inline-flex items-center group-hover:translate-x-1 transition-transform"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;