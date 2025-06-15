import { useTheme } from '../contexts/ThemeContext';
import { Calendar, MapPin, Users } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event, userRole }) => {
  const { isDarkMode } = useTheme();
  const [script, setScript] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleGenerateSummary = async () => {
    setLoading(true);
    try {
      // 1. Generate script from backend
      const res1 = await axios.post("http://localhost:5000/api/events/generate-script", {
        title: event.title,
        description: event.description,
        significance: event.significance || ""
      });

      const generatedScript = res1.data.script;
      setScript(generatedScript);

      // 2. Generate audio from script
      const filename = event.id || Date.now().toString();
      const res2 = await axios.post("http://localhost:5000/api/events/generate-audio", {
        script: generatedScript,
        filename
      });

      setAudioUrl(`http://localhost:5000${res2.data.audioUrl}`);
    } catch (err) {
      console.error("Error generating summary:", err);
    }
    setLoading(false);
  };

  return (
    <div className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isDarkMode
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
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${isDarkMode
            ? 'bg-amber-700/50 text-amber-200'
            : 'bg-amber-200 text-amber-800'
            }`}>
            {event.category}
          </div>
        )}

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-3 line-clamp-2 ${isDarkMode ? 'text-amber-100' : 'text-amber-900'
          }`}>
          {event.title}
        </h3>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          {event.date && (
            <div className={`flex items-center space-x-2 text-sm ${isDarkMode ? 'text-amber-300' : 'text-amber-700'
              }`}>
              <Calendar size={14} />
              <span>{event.date}</span>
            </div>
          )}
          {event.location && (
            <div className={`flex items-center space-x-2 text-sm ${isDarkMode ? 'text-amber-300' : 'text-amber-700'
              }`}>
              <MapPin size={14} />
              <span>{event.location}</span>
            </div>
          )}
          {userRole && (
            <div className={`flex items-center space-x-2 text-sm ${isDarkMode ? 'text-amber-300' : 'text-amber-700'
              }`}>
              <Users size={14} />
              <span>For {userRole}s</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
          {getDescription()}
        </p>

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none ${isDarkMode
          ? 'bg-gradient-to-t from-amber-900/20 via-transparent to-transparent'
          : 'bg-gradient-to-t from-amber-800/20 via-transparent to-transparent'
          }`}></div>
      </div>

      <div className="pt-4 border-t border-amber-400/30 mt-4">
        <button
          onClick={handleGenerateSummary}
          disabled={loading}
          className={`mt-2 text-sm font-medium px-4 py-1 rounded-full transition ${isDarkMode
            ? 'bg-amber-700 text-white hover:bg-amber-600'
            : 'bg-amber-300 text-amber-900 hover:bg-amber-400'
            }`}
        >
          {loading ? "Generating..." : "🎙️ Generate Summary"}
        </button>
        <button
          onClick={() => navigate('/quiz', { state: { event } })}
          className={`ml-2 mt-2 text-sm font-medium px-4 py-1 rounded-full transition ${isDarkMode
            ? 'bg-amber-700 text-white hover:bg-amber-600'
            : 'bg-amber-300 text-amber-900 hover:bg-amber-400'
            }`}
        >
          📝 Quiz
        </button>
        {audioUrl && (
          <div className="mt-4">
            <p className={`text-xs mb-1 font-semibold ${isDarkMode ? 'text-amber-200' : 'text-amber-700'}`}>
              Audio Summary:
            </p>
            <audio controls src={audioUrl} className="w-full rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;