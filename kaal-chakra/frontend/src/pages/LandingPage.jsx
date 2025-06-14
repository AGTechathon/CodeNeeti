import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowRight, Clock, Book, Users } from 'lucide-react';

const LandingPage = () => {
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: Clock,
      title: 'Time Travel',
      description: 'Explore any year in history and discover significant events'
    },
    {
      icon: Book,
      title: 'Rich Content',
      description: 'Detailed historical information tailored to your learning level'
    },
    {
      icon: Users,
      title: 'Role-Based Learning',
      description: 'Content adapted for students, enthusiasts, and professors'
    }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDarkMode ? 'bg-gray-900' : 'bg-amber-50'
    }`}>
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Landing_Baground.png')`,
        }}
      >
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gray-900/50' 
            : 'bg-amber-900/50'
        }`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDarkMode ? 'text-amber-200' : 'text-amber-100'
            }`}>
              DISCOVER HISTORICAL EVENTS
              <span className="block text-3xl md:text-5xl mt-4">BY YEAR</span>
            </h1>
            
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-amber-100' : 'text-amber-50'
            }`}>
              Dive into the captivating journey of the past with KaalChakra. 
              Explore the rich tapestry of human history, uncover ancient civilizations, 
              and discover stories that have shaped our world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/home"
                className={`group inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode
                    ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg hover:shadow-amber-500/25'
                    : 'bg-amber-700 hover:bg-amber-600 text-white shadow-lg hover:shadow-amber-700/25'
                }`}
              >
                Explore History
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              
              <Link
                to="/about"
                className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 ${
                  isDarkMode
                    ? 'border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-gray-900'
                    : 'border-amber-100 text-amber-100 hover:bg-amber-100 hover:text-amber-900'
                }`}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-gray-800/50 border border-amber-700/30'
                      : 'bg-amber-100/20 border border-amber-200/30'
                  }`}
                >
                  <Icon 
                    className={`w-12 h-12 mx-auto mb-4 ${
                      isDarkMode ? 'text-amber-400' : 'text-amber-200'
                    }`} 
                  />
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-amber-200' : 'text-amber-100'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-amber-100' : 'text-amber-50'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;