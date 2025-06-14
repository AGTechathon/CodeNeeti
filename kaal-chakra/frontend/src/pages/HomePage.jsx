import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Search, Users, Calendar } from 'lucide-react';

const HomePage = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [year, setYear] = useState('');
  const [role, setRole] = useState('');
  const [topic, setTopic] = useState('');

  const handleShowEvents = () => {
    if (year && role) {
      navigate(`/events?year=${year}&role=${role}&topic=${encodeURIComponent(topic)}`);
    }
  };

  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'bg-gray-900' : 'bg-amber-50'
      }`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/Main_Baground.png')`,
        }}
      >
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-gray-900/40' : 'bg-amber-900/40'
          }`}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome Section */}
          <div className="mb-16">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-amber-200' : 'text-amber-100'
              }`}>
              Welcome to
              <span className="block text-5xl md:text-7xl mt-2">INDIAN HISTORY</span>
            </h1>

            <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-amber-100' : 'text-amber-50'
              }`}>
              Dive into the captivating journey of the past with KaalChakra.
            </p>
          </div>

          {/* Search Interface */}
          <div className={`max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-md border ${isDarkMode
            ? 'bg-gray-800/50 border-amber-700/30'
            : 'bg-amber-100/20 border-amber-200/30'
            }`}>
            <div className="space-y-6">
              {/* Year Input */}
              <div className="space-y-2">
                <label className={`block text-left font-medium ${isDarkMode ? 'text-amber-200' : 'text-amber-100'
                  }`}>
                  <Calendar className="inline mr-2" size={18} />
                  Enter a Year:
                </label>
                <input
                  type="number"
                  placeholder="e.g. 1947"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={`w-full h-10 px-3 py-2 text-lg rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode
                    ? 'bg-gray-700 border-amber-600 text-amber-100 placeholder-amber-300 focus:ring-amber-500'
                    : 'bg-white border-amber-300 text-amber-900 placeholder-amber-600 focus:ring-amber-500'
                    }`}
                />
              </div>

              {/* Role Selection */}
              <div className="space-y-2">
                <label className={`block text-left font-medium ${isDarkMode ? 'text-amber-200' : 'text-amber-100'
                  }`}>
                  <Users className="inline mr-2" size={18} />
                  Filter by Category:
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`w-full h-10 px-3 py-2 text-lg rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode
                    ? 'bg-gray-700 border-amber-600 text-amber-100 focus:ring-amber-500'
                    : 'bg-white border-amber-300 text-amber-900 focus:ring-amber-500'
                    }`}
                >
                  <option value="">Select your role</option>
                  <option value="Student">Student</option>
                  <option value="Enthusiast">Enthusiast</option>
                  <option value="Professor">Professor</option>
                </select>
              </div>

              {/* Topic Input (New Field) */}
              <div className="space-y-2">
                <label className={`block text-left font-medium ${isDarkMode ? 'text-amber-200' : 'text-amber-100'
                  }`}>
                  Enter a Topic (Optional):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Indian Independence, Mughal Empire"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className={`w-full h-10 px-3 py-2 text-lg rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode
                    ? 'bg-gray-700 border-amber-600 text-amber-100 placeholder-amber-300 focus:ring-amber-500'
                    : 'bg-white border-amber-300 text-amber-900 placeholder-amber-600 focus:ring-amber-500'
                    }`}
                />
              </div>

              {/* Show Events Button */}
              <button
                onClick={handleShowEvents}
                disabled={!year || !role}
                className={`w-full py-6 text-lg font-semibold rounded-md transition-all duration-300 flex items-center justify-center ${year && role
                  ? 'bg-green-600 hover:bg-green-500 text-white transform hover:scale-105'
                  : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  }`}
              >
                <Search className="mr-2" size={20} />
                Show Events
              </button>
            </div>
          </div>

          {/* Quick Start Links */}
          <div className="mt-12">
            <p className={`mb-4 ${isDarkMode ? 'text-amber-300' : 'text-amber-200'
              }`}>
              Not a member?
              <button
                onClick={() => navigate('/login')}
                className={`ml-2 underline hover:no-underline ${isDarkMode ? 'text-green-400' : 'text-green-300'
                  }`}
              >
                Signup now
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;