import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

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
      extraDescription: 'The Indus Valley Civilization, also known as the Harappan Civilization, was one of the earliest and most advanced urban civilizations in the world, flourishing around 3300 BCE to 1300 BCE, with its peak between 2600 BCE and 1900 BCE. It developed in the northwestern regions of the Indian subcontinent, mainly in present-day Pakistan and western India. The civilization is renowned for its well-planned cities such as Harappa, Mohenjo-daro, Dholavira, and Lothal, featuring grid-pattern streets, advanced drainage systems, and standardized baked-brick houses. The economy was based on agriculture, animal husbandry, and extensive trade with regions as far as Mesopotamia. Skilled craftsmanship in pottery, bead-making, and metallurgy was also prevalent. The people of the Indus Valley used a yet undeciphered script inscribed mostly on seals, which were often decorated with animal motifs. Religious life possibly centered around fertility cults and nature worship, as suggested by figurines of mother goddesses and depictions of a horned deity. Despite its advancements, the civilization declined due to reasons still debated by historians, including climate change, river shifts, floods, or socio-economic disruptions. The legacy of the Indus Valley Civilization remains significant in understanding the roots of South Asian culture and early urban development.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mohenjo-daro.jpg/500px-Mohenjo-daro.jpg'
    },
    {
      year: '322 BCE',
      title: 'Rise of the Maurya Empire',
      description: 'Chandragupta Maurya established the Mauryan Empire, unifying most of the Indian subcontinent.',
      location: 'Pataliputra (modern Patna, India)',
      category: 'Ancient India',
      extraDescription: 'The rise of the Maurya Empire marks a significant chapter in ancient Indian history, beginning around 321 BCE when Chandragupta Maurya, with the guidance of his advisor Chanakya (Kautilya), overthrew the Nanda Dynasty in Magadha. This marked the foundation of the first large-scale empire in India. Taking advantage of the political instability following Alexander the Greats withdrawal from the northwest, Chandragupta rapidly expanded his empire across northern and central India. The empire reached its zenith under his grandson Ashoka the Great, who initially expanded the empire through warfare but later embraced Buddhism after the destructive Kalinga War. Ashoka promoted non-violence, religious tolerance, and welfare policies, spreading Buddhist values across Asia. The rise of the Mauryan Empire was characterized by strong central administration, efficient governance, and a well-organized economy, as documented in the Arthashastra, a treatise attributed to Chanakya. The Maurya Empire played a crucial role in unifying the Indian subcontinent for the first time under a single political structure.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Maurya_Empire_Map.jpg/500px-Maurya_Empire_Map.jpg'
    },
    {
      year: '268 BCE',
      title: 'Reign of Ashoka the Great',
      description: 'Ashoka expanded the Maurya Empire and later embraced Buddhism after the Kalinga War.',
      location: 'Indian Subcontinent',
      category: 'Ancient India',
      extraDescription: 'The reign of Ashoka the Great, from around 268 BCE to 232 BCE, is considered one of the most remarkable periods in ancient Indian history. Ashoka was the third emperor of the Maurya Empire and initially focused on military expansion, successfully extending the empire over a vast part of the Indian subcontinent. However, after the devastating Kalinga War, which caused immense loss of life, Ashoka experienced a deep transformation and chose to follow the path of Buddhism. He adopted principles of nonviolence, compassion, and tolerance, which became the foundation of his rule.Ashoka promoted moral governance based on the concept of Dhamma, encouraging ethical behavior, social welfare, and respect for all religions. He introduced several reforms for the welfare of his people, including the construction of hospitals, roads, and rest houses, as well as the planting of trees along travel routes. His policies and messages were inscribed on rocks and pillars throughout the empire in various regional languages, making them accessible to the common people. Ashoka also played a crucial role in spreading Buddhism beyond India by sending missionaries to regions like Sri Lanka, Central Asia, and Southeast Asia. His reign is remembered for its emphasis on justice, peace, and the well-being of all living beings.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ashoka_Chakra.svg/500px-Ashoka_Chakra.svg.png'
    },
    {
      year: '1192',
      title: 'Second Battle of Tarain',
      description: 'Muhammad Ghori defeats Prithviraj Chauhan, leading to Muslim dominance in North India.',
      location: 'Tarain (near modern Taraori, Haryana, India)',
      category: 'Medieval India',
      extraDescription: 'The Second Battle of Tarain was fought in 1192 CE between Prithviraj Chauhan, the Rajput king of the Chahamana dynasty, and Muhammad Ghori, the ruler of the Ghurid Empire. This battle took place near Tarain (modern-day Taraori in Haryana) and is considered one of the most decisive battles in Indian history. It was a follow-up to the First Battle of Tarain in 1191 CE, where Prithviraj had defeated Muhammad Ghori.However, in the Second Battle, Muhammad Ghori returned with better preparation and a stronger army. He used strategic planning, including a surprise night attack and the use of light cavalry to encircle and exhaust the Rajput forces. Prithviraj Chauhans army,though large and brave lacked coordination and fell to Ghoris superior tactics. Prithviraj was captured and later executed.The victory in this battle marked the beginning of Muslim rule in northern India, leading to the establishment of the Delhi Sultanate. It significantly weakened Rajput power and paved the way for centuries of Islamic influence on Indian politics, culture, and society.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prithviraj_Chauhan.jpg/500px-Prithviraj_Chauhan.jpg'
    },
    {
      year: '1526',
      title: 'Founding of Mughal Empire',
      description: 'Babur defeated Ibrahim Lodi at the First Battle of Panipat, establishing Mughal rule.',
      location: 'Panipat, India',
      category: 'Medieval India',
      extraDescription: 'The founding of the Mughal Empire began in 1526 CE with the First Battle of Panipat, where Babur, a descendant of Timur and Genghis Khan, defeated Ibrahim Lodi, the last ruler of the Delhi Sultanate. Babur came from the Fergana Valley in Central Asia and had already established his control over Kabul before turning his attention to India. With the use of advanced military tactics and field artillery, Babur was able to defeat a much larger force and establish Mughal rule in northern India.After his victory, Babur laid the foundation of a new empire that blended Central Asian, Persian, and Indian cultural elements. Though his reign was short, Babur set the stage for a powerful dynasty that would rule India for over three centuries. The Mughal Empire was further consolidated by his grandson Akbar, who expanded the empire and introduced policies of religious tolerance, administrative reforms, and cultural integration. The establishment of the Mughal Empire marked the beginning of a new era in Indian history, characterized by strong centralized governance, economic prosperity, and flourishing art and architecture.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Battle_of_Panipat_1526.jpg/500px-Battle_of_Panipat_1526.jpg'
    },
    {
      year: '1857',
      title: 'First War of Indian Independence',
      description: 'Also called the Sepoy Mutiny, this was India’s first major revolt against British rule.',
      location: 'North India',
      category: 'Modern India',
      extraDescription: 'The First War of Indian Independence took place in 1857 and was a major uprising against the rule of the British East India Company. It began as a revolt by Indian soldiers (sepoys) in the Companys army but soon spread to various parts of northern and central India, involving princes, landlords, peasants, and civilians. The immediate cause was the introduction of the new Enfield rifle, which required soldiers to bite cartridges believed to be greased with cow and pig fat, offending both Hindu and Muslim religious sentiments.However, the rebellion had deeper causes, including political annexations, economic exploitation, heavy taxation, disrespect for Indian traditions, and social reforms imposed by the British without understanding Indian society. Important leaders of the revolt included Mangal Pandey, Rani Lakshmibai of Jhansi, Bahadur Shah Zafar, Tatya Tope, Nana Sahib, and Begum Hazrat Mahal.Although the revolt was eventually suppressed by the British, it marked a significant turning point. The East India Company was abolished, and control of India was transferred directly to the British Crown through the Government of India Act 1858. The uprising is regarded as the first national struggle for Indian independence, laying the foundation for future resistance against British rule.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Indian_Rebellion_of_1857.jpg/500px-Indian_Rebellion_of_1857.jpg'
    },
    {
      year: '1947',
      title: 'Indian Independence',
      description: 'India gained independence from British colonial rule after a long non-violent struggle led by Mahatma Gandhi.',
      location: 'New Delhi, India',
      category: 'Modern India',
      extraDescription: 'Indian Independence was achieved on 15 August 1947, marking the end of nearly 200 years of British colonial rule. The struggle for independence was long and involved multiple movements, leaders, and ideologies. It began in the 19th century with early reformers and nationalists, but gained momentum in the 20th century under the leadership of figures like Mahatma Gandhi, Jawaharlal Nehru, Subhas Chandra Bose, Sardar Vallabhbhai Patel, and many others.Mahatma Gandhi led mass movements such as the Non-Cooperation Movement, Civil Disobedience Movement, and the Quit India Movement, all based on non-violence and civil resistance. Alongside these, revolutionary activities by freedom fighters like Bhagat Singh, Chandrasekhar Azad, and Sukhdev inspired the youth. The Indian National Congress, Muslim League, and other political groups played crucial roles in mobilizing the masses.Post World War II, Britain faced economic hardship and increasing pressure from Indian leaders and the public. This, along with widespread protests and communal tensions, led the British to agree to transfer power. The country was divided into India and Pakistan during independence, resulting in massive migration and communal violence. Indian Independence not only brought freedom but also laid the foundation for the largest democracy in the world.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Flag_of_India.svg/500px-Flag_of_India.svg.png'
    },
    {
      year: '1950',
      title: 'Constitution of India Comes into Effect',
      description: 'India became a republic with its own constitution on 26th January 1950.',
      location: 'New Delhi, India',
      category: 'Modern India',
      extraDescription: 'The Constitution of India came into effect on 26 January 1950, marking the birth of India as a sovereign, democratic republic. Although India gained independence from British rule on 15 August 1947, it was still governed under the Government of India Act 1935. To establish a permanent legal framework, a Constituent Assembly was formed in 1946, chaired by Dr. B. R. Ambedkar, who is regarded as the principal architect of the Constitution.After nearly three years of deliberations, the Constitution was adopted on 26 November 1949 and officially implemented on 26 January 1950 to honor the date on which the Declaration of Indian Independence was proclaimed in 1930. The Indian Constitution is the longest written constitution in the world, encompassing a detailed framework for governance, including fundamental rights, duties, directive principles, and the structure of the government at the central and state levels.With the enforcement of the Constitution, Dr. Rajendra Prasad became the first President of India, and the country officially became a republic. This event established India as a nation governed by its own laws and chosen representatives, reflecting the values of justice, liberty, equality, and fraternity.',
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