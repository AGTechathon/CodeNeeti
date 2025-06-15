import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import EventCard from '../components/EventCard';
import { ArrowLeft, Filter, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventsPage = () => {
  const { isDarkMode } = useTheme();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const year = searchParams.get('year');
  const role = searchParams.get('role');
  const topic = searchParams.get('topic');

  useEffect(() => {
    if (year && role) {
      setLoading(true);
      fetch(`http://localhost:5000/api/events?year=${year}&role=${role}&topic=${encodeURIComponent(topic || '')}`)

        .then((res) => res.json())
        .then((data) => {
          setEvents(data || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching events:', error);
          setLoading(false);
        });
    }
  }, [year, role]);

  if (!year || !role) {
    navigate('/home');
    return null;
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-amber-50'}`}>
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url('/images/Main_Baground.png')` }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => navigate('/home')}
            variant="outline"
            className={`mb-4 ${isDarkMode
                ? 'border-amber-600 text-amber-300 hover:bg-amber-600 hover:text-white'
                : 'border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white'
              }`}
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Search
          </Button>

          <div className={`p-6 rounded-xl backdrop-blur-md border ${isDarkMode
              ? 'bg-gray-800/50 border-amber-700/30'
              : 'bg-white/50 border-amber-200/30'
            }`}>
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-amber-200' : 'text-amber-900'
              }`}>
              Historical Events in {year}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-amber-300' : 'text-amber-700'
                }`}>
                <Calendar size={16} />
                <span>Year: {year}</span>
              </div>
              <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-amber-300' : 'text-amber-700'
                }`}>
                <Users size={16} />
                <span>Role: {role}</span>
              </div>
              {topic && (
                <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-amber-300' : 'text-amber-700'
                  }`}>
                  <Filter size={16} />
                  <span>Topic: {topic}</span>
                </div>
              )}
              <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-amber-300' : 'text-amber-700'
                }`}>
                <Filter size={16} />
                <span>{events.length} events found</span>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className={`h-64 rounded-lg animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-amber-100'
                  }`}
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} userRole={role} />
            ))}
          </div>
        )}

        {/* No Events Message */}
        {!loading && events.length === 0 && (
          <div className={`text-center py-16 ${isDarkMode ? 'text-amber-300' : 'text-amber-700'
            }`}>
            <Calendar size={64} className="mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No events found for {year}</h3>
            <p>Try searching for a different year or check back later for more content.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;