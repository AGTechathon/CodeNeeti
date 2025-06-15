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

  // Dummy events data - in a real app, this would come from an API
  const generateEvents = (year, role) => {
    const baseEvents = [
      {
        id: '1',
        title: 'Independence of India',
        date: 'August 15, 1947',
        location: 'New Delhi, India',
        description: 'India gained independence from British colonial rule after nearly 200 years of occupation.',
        category: 'Political',
        significance: 'This event marked the end of the British Raj and the beginning of a new era for the Indian subcontinent.'
      },
      {
        id: '2',
        title: 'Formation of United Nations',
        date: 'October 24, 1945',
        location: 'San Francisco, USA',
        description: 'The United Nations was established to promote international cooperation and peace.',
        category: 'International Relations',
        significance: 'The UN became the world\'s primary international organization for maintaining global peace and security.'
      },
      {
        id: '3',
        title: 'World War II Ends',
        date: 'September 2, 1945',
        location: 'Tokyo Bay, Japan',
        description: 'Japan officially surrendered, marking the end of World War II.',
        category: 'Military',
        significance: 'This surrender ceremony aboard the USS Missouri ended the most devastating conflict in human history.'
      },
      {
        id: '4',
        title: 'Berlin Wall Construction',
        date: 'August 13, 1961',
        location: 'Berlin, Germany',
        description: 'East Germany began construction of the Berlin Wall to prevent emigration to West Germany.',
        category: 'Political',
        significance: 'The wall became a powerful symbol of the Cold War division between East and West.'
      },
      {
        id: '5',
        title: 'Moon Landing',
        date: 'July 20, 1969',
        location: 'Sea of Tranquility, Moon',
        description: 'Apollo 11 successfully landed the first humans on the Moon.',
        category: 'Science & Technology',
        significance: 'This achievement represented humanity\'s greatest technological triumph and space exploration milestone.'
      },
      {
        id: '6',
        title: 'Fall of Rome',
        date: 'September 4, 476 AD',
        location: 'Rome, Italy',
        description: 'The last Roman Emperor was deposed, marking the end of the Western Roman Empire.',
        category: 'Ancient History',
        significance: 'This event traditionally marks the end of ancient history and the beginning of the medieval period.'
      }
    ];

    // Filter events based on year proximity (for demo purposes)
    const targetYear = parseInt(year);
    return baseEvents.slice(0, 6).map((event, index) => ({
      ...event,
      id: `${targetYear}-${index}`,
      date: `${event.date.split(',')[0]}, ${targetYear + (index % 3) - 1}`
    }));
  };

  useEffect(() => {
    if (year && role) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const generatedEvents = generateEvents(year, role);
        setEvents(generatedEvents);
        setLoading(false);
      }, 1000);
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
        style={{
          backgroundImage: `url('/images/Main_Baground.png')`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => navigate('/home')}
            variant="outline"
            className={`mb-4 ${
              isDarkMode 
                ? 'border-amber-600 text-amber-300 hover:bg-amber-600 hover:text-white' 
                : 'border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white'
            }`}
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Search
          </Button>

          <div className={`p-6 rounded-xl backdrop-blur-md border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-amber-700/30' 
              : 'bg-white/50 border-amber-200/30'
          }`}>
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-amber-200' : 'text-amber-900'
            }`}>
              Historical Events in {year}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className={`flex items-center space-x-2 ${
                isDarkMode ? 'text-amber-300' : 'text-amber-700'
              }`}>
                <Calendar size={16} />
                <span>Year: {year}</span>
              </div>
              <div className={`flex items-center space-x-2 ${
                isDarkMode ? 'text-amber-300' : 'text-amber-700'
              }`}>
                <Users size={16} />
                <span>Role: {role}</span>
              </div>
              <div className={`flex items-center space-x-2 ${
                isDarkMode ? 'text-amber-300' : 'text-amber-700'
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
                className={`h-64 rounded-lg animate-pulse ${
                  isDarkMode ? 'bg-gray-800' : 'bg-amber-100'
                }`}
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                userRole={role}
              />
            ))}
          </div>
        )}

        {/* No Events Message */}
        {!loading && events.length === 0 && (
          <div className={`text-center py-16 ${
            isDarkMode ? 'text-amber-300' : 'text-amber-700'
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