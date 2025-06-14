import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Clock, Users, Book, Globe, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: Clock,
      title: 'Time Travel Experience',
      description: 'Journey through different eras and discover pivotal moments that shaped our world.'
    },
    {
      icon: Users,
      title: 'Personalized Learning',
      description: 'Content tailored for students, enthusiasts, and professors with varying depth and complexity.'
    },
    {
      icon: Book,
      title: 'Rich Historical Content',
      description: 'Comprehensive information about events, civilizations, and influential figures throughout history.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Explore history from multiple cultural and geographical viewpoints for a complete understanding.'
    },
    {
      icon: Award,
      title: 'Interactive Learning',
      description: 'Engage with quizzes, timelines, and interactive elements to test and expand your knowledge.'
    },
    {
      icon: Heart,
      title: 'Passion for History',
      description: 'Created by history enthusiasts for those who share a love for understanding the past.'
    }
  ];

  const team = [
    {
      name: 'Mansi Halkude',
      role: 'Frontend Expert',
      description: ''
    },
    {
      name: 'Chaturved Mudagi',
      role: 'Team Leader',
      description: ''
    },
    {
      name: 'Laxmi Chavan',
      role: 'Backend Expert',
      description: ''
    },
    {
      name: 'Kaivalya Nakhate',
      role: 'Api expert',
      description: ''
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-amber-50'}`}>
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('/images/Main_Baground.png')`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-amber-200' : 'text-amber-900'
          }`}>
            About KaalChakra
          </h1>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-amber-100' : 'text-amber-700'
          }`}>
            KaalChakra, meaning "Wheel of Time" in Sanskrit, is your gateway to exploring the vast 
            tapestry of human history. We believe that understanding our past is crucial for 
            navigating our present and shaping our future.
          </p>
        </div>

        {/* Mission Statement */}
        <div className={`mb-16 p-8 rounded-xl backdrop-blur-md border ${
          isDarkMode 
            ? 'bg-gray-800/50 border-amber-700/30' 
            : 'bg-white/50 border-amber-200/30'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 text-center ${
            isDarkMode ? 'text-amber-200' : 'text-amber-900'
          }`}>
            Our Mission
          </h2>
          <p className={`text-lg text-center leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            To make history accessible, engaging, and relevant for learners of all levels. 
            We strive to present historical events in a way that connects the past with the 
            present, helping users understand how historical events continue to influence our world today.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-amber-200' : 'text-amber-900'
          }`}>
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-gray-800/50 border-amber-700/30 hover:border-amber-500/50'
                      : 'bg-white/50 border-amber-200/30 hover:border-amber-400'
                  }`}
                >
                  <Icon 
                    className={`w-12 h-12 mb-4 ${
                      isDarkMode ? 'text-amber-400' : 'text-amber-600'
                    }`} 
                  />
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDarkMode ? 'text-amber-200' : 'text-amber-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-amber-200' : 'text-amber-900'
          }`}>
            Our Expert Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg backdrop-blur-sm border text-center ${
                  isDarkMode
                    ? 'bg-gray-800/50 border-amber-700/30'
                    : 'bg-white/50 border-amber-200/30'
                }`}
              >
                <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  isDarkMode ? 'bg-amber-600' : 'bg-amber-500'
                }`}>
                  <Users className="text-white" size={32} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-amber-200' : 'text-amber-900'
                }`}>
                  {member.name}
                </h3>
                <p className={`text-sm font-medium mb-3 ${
                  isDarkMode ? 'text-amber-400' : 'text-amber-600'
                }`}>
                  {member.role}
                </p>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className={`p-8 rounded-xl backdrop-blur-md border ${
          isDarkMode 
            ? 'bg-gray-800/50 border-amber-700/30' 
            : 'bg-white/50 border-amber-200/30'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 text-center ${
            isDarkMode ? 'text-amber-200' : 'text-amber-900'
          }`}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-amber-300' : 'text-amber-700'
              }`}>
                Accuracy & Authenticity
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We ensure all historical information is thoroughly researched and verified by our team of expert historians.
              </p>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-amber-300' : 'text-amber-700'
              }`}>
                Inclusive Perspectives
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We present history from diverse viewpoints, ensuring representation of all cultures and civilizations.
              </p>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-amber-300' : 'text-amber-700'
              }`}>
                Educational Excellence
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Our content is designed to be both informative and engaging, suitable for learners at all levels.
              </p>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDarkMode ? 'text-amber-300' : 'text-amber-700'
              }`}>
                Continuous Innovation
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We constantly evolve our platform to incorporate new technologies and learning methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;