import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';

const LoginPage = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log('Form submitted:', formData);
    // For demo purposes, navigate to home
    navigate('/home');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900/80' : 'bg-amber-900/70'
          }`}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          {/* Form Container */}
          <div className={`p-8 rounded-2xl backdrop-blur-md border ${isDarkMode
              ? 'bg-gray-800/50 border-amber-700/30'
              : 'bg-amber-100/20 border-amber-200/30'
            }`}>
            {/* Logo/Title */}
            <div className="text-center mb-8">
              {/* Updated Logo */}
              <img
                src="/images/Logo-TransparentBg.png" // <-- Update this path to your new logo file if needed
                alt="KaalChakra Logo"
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-amber-200' : 'text-amber-100'
                }`}>
                Kaal-Chakra
              </h1>
            </div>

            {/* Tab Buttons */}
            <div className={`flex rounded-lg p-1 mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-amber-200/30'
              }`}>
              <button
                onClick={() => setIsSignup(false)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${!isSignup
                    ? 'bg-green-600 text-white shadow-md'
                    : isDarkMode
                      ? 'text-amber-300 hover:bg-gray-600'
                      : 'text-amber-700 hover:bg-amber-100'
                  }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsSignup(true)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${isSignup
                    ? 'bg-green-600 text-white shadow-md'
                    : isDarkMode
                      ? 'text-amber-300 hover:bg-gray-600'
                      : 'text-amber-700 hover:bg-amber-100'
                  }`}
              >
                Signup
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field (only for signup) */}
              {isSignup && (
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-amber-200' : 'text-amber-100'
                    }`}>
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`pl-10 w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-500 ${isDarkMode
                          ? 'bg-gray-700 border-amber-600 text-amber-100 placeholder-amber-300'
                          : 'bg-white border-amber-300 text-amber-900 placeholder-amber-600'
                        }`}
                      required={isSignup}
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-amber-200' : 'text-amber-100'
                  }`}>
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`pl-10 w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-500 ${isDarkMode
                        ? 'bg-gray-700 border-amber-600 text-amber-100 placeholder-amber-300'
                        : 'bg-white border-amber-300 text-amber-900 placeholder-amber-600'
                      }`}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-amber-200' : 'text-amber-100'
                  }`}>
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`pl-10 pr-10 w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-amber-500 ${isDarkMode
                        ? 'bg-gray-700 border-amber-600 text-amber-100 placeholder-amber-300'
                        : 'bg-white border-amber-300 text-amber-900 placeholder-amber-600'
                      }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Forgot Password (only for login) */}
              {!isSignup && (
                <div className="text-right">
                  <button
                    type="button"
                    className={`text-sm hover:underline ${isDarkMode ? 'text-green-400' : 'text-green-300'
                      }`}
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
              >
                {isSignup ? 'Create Account' : 'Login'}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className={`text-sm ${isDarkMode ? 'text-amber-300' : 'text-amber-200'
                }`}>
                {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => setIsSignup(!isSignup)}
                  className={`font-medium hover:underline ${isDarkMode ? 'text-green-400' : 'text-green-300'
                    }`}
                >
                  {isSignup ? 'Login now' : 'Signup now'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;