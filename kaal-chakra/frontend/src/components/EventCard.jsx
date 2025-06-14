import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, MapPin, Users } from 'lucide-react';

const EventCard = ({ event, userRole }) => {
  const { isDarkMode } = useTheme();

  const getDescription = () => {
    if (!userRole) return event.description;
    switch (userRole) {
      case 'Student':
        return event.description.length > 100
          ? event.description.substring(0, 100) + '...'
          : event.description;
      case 'Professor':
        return event.description + ' ' + (event.significance || '');
      default:
        return event.description;
    }
  };

  return (
    <div className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
      isDarkMode 
        ? 'bg-gray-800/90 border border-amber-700/30 hover:border-amber-500/50 text-amber-100'
        : 'bg-amber-50/90 border border-amber-200 hover:border-amber-400 text-amber-900'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800"></div>
      </div>
      
      <div className="relative p-6 flex flex-col space-y-4">
        {/* Category Badge */}
        {event.category && (
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
            isDarkMode
              ? 'bg-amber-700/50 text-amber-200'
              : 'bg-amber-200 text-amber-800'
          }`}>
            {event.category}
          </div>
        )}

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-3 line-clamp-2 ${
          isDarkMode ? 'text-amber-100' : 'text-amber-900'
        }`}>
          {event.title}
        </h3>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          {event.date && (
            <div className={`flex items-center space-x-2 text-sm ${
              isDarkMode ? 'text-amber-300' : 'text-amber-700'
            }`}>
              <Calendar size={14} />
              <span>{event.date}</span>
            </div>
          )}
          {event.location && (
            <div className={`flex items-center space-x-2 text-sm ${
              isDarkMode ? 'text-amber-300' : 'text-amber-700'
            }`}>
              <MapPin size={14} />
              <span>{event.location}</span>
            </div>
          )}
          {userRole && (
            <div className={`flex items-center space-x-2 text-sm ${
              isDarkMode ? 'text-amber-300' : 'text-amber-700'
            }`}>
              <Users size={14} />
              <span>For {userRole}s</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {getDescription()}
        </p>

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none ${
          isDarkMode 
            ? 'bg-gradient-to-t from-amber-900/20 via-transparent to-transparent'
            : 'bg-gradient-to-t from-amber-800/20 via-transparent to-transparent'
        }`}></div>
      </div>
    </div>
  );
};

export default EventCard;