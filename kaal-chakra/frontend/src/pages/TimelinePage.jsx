import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const TimelinePage = () => {
    const { isDarkMode } = useTheme();
    const [selectedEvent, setSelectedEvent] = useState(null);

    const timelineEvents = [
        {
            year: '2500 BCE',
            title: 'Indus Valley Civilization',
            description: 'One of the world’s earliest urban civilizations known for advanced city planning, drainage systems, and architecture.',
            location: 'Harappa & Mohenjo-Daro, Pakistan',
            category: 'Ancient India',
            link: 'https://en.wikipedia.org/wiki/Indus_Valley_Civilisation',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mohenjo-daro.jpg/500px-Mohenjo-daro.jpg'
        },
        {
            year: '322 BCE',
            title: 'Rise of the Maurya Empire',
            description: 'Chandragupta Maurya established the Mauryan Empire, unifying most of the Indian subcontinent.',
            location: 'Pataliputra (modern Patna, India)',
            category: 'Ancient India',
            link: 'https://en.wikipedia.org/wiki/Maurya_Empire',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Maurya_Empire_Map.jpg/500px-Maurya_Empire_Map.jpg'
        },
        {
            year: '268 BCE',
            title: 'Reign of Ashoka the Great',
            description: 'Ashoka expanded the Maurya Empire and later embraced Buddhism after the Kalinga War.',
            location: 'Indian Subcontinent',
            category: 'Ancient India',
            link: 'https://en.wikipedia.org/wiki/Ashoka',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ashoka_Chakra.svg/500px-Ashoka_Chakra.svg.png'
        },
        {
            year: '1192',
            title: 'Second Battle of Tarain',
            description: 'Muhammad Ghori defeats Prithviraj Chauhan, leading to Muslim dominance in North India.',
            location: 'Tarain (near modern Taraori, Haryana, India)',
            category: 'Medieval India',
            link: 'https://en.wikipedia.org/wiki/Battle_of_Tarain',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prithviraj_Chauhan.jpg/500px-Prithviraj_Chauhan.jpg'
        },
        {
            year: '1526',
            title: 'Founding of Mughal Empire',
            description: 'Babur defeated Ibrahim Lodi at the First Battle of Panipat, establishing Mughal rule.',
            location: 'Panipat, India',
            category: 'Medieval India',
            link: 'https://en.wikipedia.org/wiki/First_Battle_of_Panipat',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Battle_of_Panipat_1526.jpg/500px-Battle_of_Panipat_1526.jpg'
        },
        {
            year: '1857',
            title: 'First War of Indian Independence',
            description: 'Also called the Sepoy Mutiny, this was India’s first major revolt against British rule.',
            location: 'North India',
            category: 'Modern India',
            link: 'https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Indian_Rebellion_of_1857.jpg/500px-Indian_Rebellion_of_1857.jpg'
        },
        {
            year: '1947',
            title: 'Indian Independence',
            description: 'India gained independence from British colonial rule after a long non-violent struggle led by Mahatma Gandhi.',
            location: 'New Delhi, India',
            category: 'Modern India',
            link: 'https://en.wikipedia.org/wiki/Indian_independence_movement',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Flag_of_India.svg/500px-Flag_of_India.svg.png'
        },
        {
            year: '1950',
            title: 'Constitution of India Comes into Effect',
            description: 'India became a republic with its own constitution on 26th January 1950.',
            location: 'New Delhi, India',
            category: 'Modern India',
            link: 'https://en.wikipedia.org/wiki/Constitution_of_India',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Constitution_of_India.jpg/500px-Constitution_of_India.jpg'
        }
    ];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-amber-40'}`}>
            <div className="fixed inset-0 bg-cover bg-center opacity-45" style={{ backgroundImage: `url('/images/Main_Baground.png')` }}></div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-amber-200' : 'text-amber-900'}`}>Historical Timeline</h1>
                    <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-amber-100' : 'text-amber-700'}`}>Journey through time and explore key events of Indian civilization with interactive details.</p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${isDarkMode ? 'bg-amber-600' : 'bg-amber-400'}`}></div>
                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border ${isDarkMode ? 'bg-gray-800/50 border-amber-700/30 hover:bg-gray-700/50' : 'bg-white/50 border-amber-200/30 hover:bg-amber-100/50'}`} onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}>
                                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${isDarkMode ? 'bg-amber-600 text-white' : 'bg-amber-600 text-white'}`}>{event.year}</div>
                                        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-amber-200' : 'text-amber-900'}`}>{event.title}</h3>
                                        <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{event.description}</p>
                                        <div className="space-y-1">
                                            <div className={`flex items-center space-x-2 text-xs ${index % 2 === 0 ? 'justify-end' : 'justify-start'} ${isDarkMode ? 'text-amber-300' : 'text-amber-700'}`}><MapPin size={12} /><span>{event.location}</span></div>
                                            <div className={`flex items-center space-x-2 text-xs ${index % 2 === 0 ? 'justify-end' : 'justify-start'} ${isDarkMode ? 'text-amber-300' : 'text-amber-700'}`}><Users size={12} /><span>{event.category}</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${isDarkMode ? 'bg-gray-800 border-amber-600' : 'bg-white border-amber-400'} transition-all duration-300 cursor-pointer hover:scale-110`} onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}></div>

                                <div className="w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedEvent !== null && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setSelectedEvent(null)}>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 shadow-xl relative">
                            <button className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-xl font-bold" onClick={() => setSelectedEvent(null)}>×</button>
                            <img src={timelineEvents[selectedEvent].image} alt={timelineEvents[selectedEvent].title} className="rounded mb-4 max-h-80 mx-auto" />
                            <h2 className="text-2xl font-bold mb-2 dark:text-amber-200">{timelineEvents[selectedEvent].title}</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">{timelineEvents[selectedEvent].description}</p>
                            <p className="text-sm text-amber-700 dark:text-amber-300 mb-2"><MapPin size={14} className="inline mr-1" />{timelineEvents[selectedEvent].location}</p>
                            <p className="text-sm text-amber-700 dark:text-amber-300 mb-4"><Users size={14} className="inline mr-1" />{timelineEvents[selectedEvent].category}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{timelineEvents[selectedEvent].extraDescription}</p>
                        </div>
                    </div>
                )}

                <div className={`mt-16 text-center p-6 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                    <Clock className={`w-8 h-8 mx-auto mb-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                    <p className={`text-sm ${isDarkMode ? 'text-amber-300' : 'text-amber-700'}`}>Click on any event or timeline dot to explore more details</p>
                </div>
            </div>
        </div>
    );
};

export default TimelinePage;