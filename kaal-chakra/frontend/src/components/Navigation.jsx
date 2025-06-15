import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Home, Clock, HelpCircle, Info, Contact, LogIn, Moon, Sun, Menu, X } from 'lucide-react';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/timeline', label: 'Timeline', icon: Clock },
    { path: '/quiz', label: 'Quiz', icon: HelpCircle },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Contact },
    { path: '/login', label: 'Login', icon: LogIn },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isDarkMode
        ? 'bg-slate-900/95 border-amber-800/40'
        : 'bg-amber-950/90 border-amber-700/30'
      } backdrop-blur-md border-b`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div> */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/Logo-TransparentBg.png"
              alt="KaalChakra Logo"
              className="w-10 h-10 object-contain"
            />
            <span className={`text-xl font-bold ${isDarkMode ? 'text-amber-300' : 'text-amber-100'
              }`}>
              Kaal-Chakra
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === path
                  ? isDarkMode
                    ? 'bg-amber-700 text-amber-100'
                    : 'bg-amber-700 text-amber-100'
                  : isDarkMode
                    ? 'text-amber-300 hover:bg-gray-800 hover:text-amber-200'
                    : 'text-amber-100 hover:bg-amber-800 hover:text-white'
                  }`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md transition-all duration-200 ${isDarkMode
                ? 'text-amber-300 hover:bg-gray-800'
                : 'text-amber-100 hover:bg-amber-800'
                }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md ${isDarkMode ? 'text-amber-300' : 'text-amber-100'
                }`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isDarkMode ? 'text-amber-300' : 'text-amber-100'
                }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${isDarkMode ? 'border-amber-700/30' : 'border-amber-600/30'
            }`}>
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 px-4 py-3 transition-colors ${location.pathname === path
                  ? isDarkMode
                    ? 'bg-amber-700 text-amber-100'
                    : 'bg-amber-700 text-amber-100'
                  : isDarkMode
                    ? 'text-amber-300 hover:bg-gray-800'
                    : 'text-amber-100 hover:bg-amber-800'
                  }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
