import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin, Send, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { isDarkMode } = useTheme();
  const { toast } = useToast ? useToast() : { toast: () => {} };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);

    if (toast) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
    }

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@kaalchakra.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 854xxxxxx',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Solapur, Maharashtra',
      description: 'Come visit our research center'
    },
    {
      icon: Clock,
      title: 'Response Time',
      info: '24-48 hours',
      description: 'We typically respond within'
    }
  ];

  return (
    <div className={`min-h-screen ${
      isDarkMode ? 'bg-gray-900' : 'bg-amber-50'
    }`}>
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('/images/Main_Baground.png')`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-amber-200' : 'text-amber-900'
          }`}>
            Contact Us
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-amber-100' : 'text-amber-700'
          }`}>
            Have questions about history or our platform? We'd love to hear from you. 
            Reach out to our team of historians and educators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-amber-200' : 'text-amber-900'
            }`}>
              Get In Touch
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? 'bg-gray-800/50 border-amber-700/30'
                        : 'bg-white/50 border-amber-200/30'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        isDarkMode ? 'bg-amber-600/20' : 'bg-amber-200/50'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          isDarkMode ? 'text-amber-400' : 'text-amber-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold mb-1 ${
                          isDarkMode ? 'text-amber-200' : 'text-amber-900'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`font-medium mb-1 ${
                          isDarkMode ? 'text-amber-300' : 'text-amber-700'
                        }`}>
                          {item.info}
                        </p>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className={`mt-8 p-6 rounded-lg backdrop-blur-sm border ${
              isDarkMode 
                ? 'bg-gray-800/50 border-amber-700/30' 
                : 'bg-white/50 border-amber-200/30'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 ${
                isDarkMode ? 'text-amber-200' : 'text-amber-900'
              }`}>
                Why Contact Us?
              </h3>
              <ul className={`space-y-2 text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>• Ask questions about specific historical events</li>
                <li>• Request new content or topics to be covered</li>
                <li>• Report issues or provide feedback</li>
                <li>• Inquire about educational partnerships</li>
                <li>• Get help with using the platform</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className={`p-8 rounded-xl backdrop-blur-md border ${
              isDarkMode 
                ? 'bg-gray-800/50 border-amber-700/30' 
                : 'bg-white/50 border-amber-200/30'
            }`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-amber-200' : 'text-amber-900'
              }`}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${
                    isDarkMode ? 'text-amber-200' : 'text-amber-700'
                  }`}>
                    <User className="inline mr-2" size={16} />
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${
                      isDarkMode 
                        ? 'bg-gray-700 border-amber-600 text-amber-100 placeholder-amber-300' 
                        : 'bg-white border-amber-300 text-amber-900 placeholder-amber-600'
                    }`}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${
                    isDarkMode ? 'text-amber-200' : 'text-amber-700'
                  }`}>
                    <Mail className="inline mr-2" size={16} />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${
                      isDarkMode 
                        ? 'bg-gray-700 border-amber-600 text-amber-100 placeholder-amber-300' 
                        : 'bg-white border-amber-300 text-amber-900 placeholder-amber-600'
                    }`}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${
                    isDarkMode ? 'text-amber-200' : 'text-amber-700'
                  }`}>
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`${
                      isDarkMode 
                        ? 'bg-gray-700 border-amber-600 text-amber-100 placeholder-amber-300' 
                        : 'bg-white border-amber-300 text-amber-900 placeholder-amber-600'
                    }`}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className={`block text-sm font-medium ${
                    isDarkMode ? 'text-amber-200' : 'text-amber-700'
                  }`}>
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`${
                      isDarkMode 
                        ? 'bg-gray-700 border-amber-600 text-amber-100 placeholder-amber-300' 
                        : 'bg-white border-amber-300 text-amber-900 placeholder-amber-600'
                    }`}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;