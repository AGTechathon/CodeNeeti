import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';

const QuizPage = () => {
  const { isDarkMode } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correct: 1
    },
    {
      question: "Who was the first person to walk on the Moon?",
      options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Yuri Gagarin"],
      correct: 1
    },
    {
      question: "Which ancient civilization built the Pyramids of Giza?",
      options: ["Mesopotamians", "Greeks", "Egyptians", "Romans"],
      correct: 2
    },
    {
      question: "In what year did the Berlin Wall fall?",
      options: ["1987", "1988", "1989", "1990"],
      correct: 2
    },
    {
      question: "Who was the first emperor of Rome?",
      options: ["Julius Caesar", "Augustus", "Nero", "Trajan"],
      correct: 1
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const finalScore = selectedAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
      }, 0);
      setScore(finalScore);
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excellent! You're a history expert!";
    if (percentage >= 60) return "Good job! You know your history well!";
    if (percentage >= 40) return "Not bad! Keep learning about history!";
    return "Keep studying! History has many fascinating stories to discover!";
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return isDarkMode ? 'text-green-400' : 'text-green-600';
    if (percentage >= 60) return isDarkMode ? 'text-blue-400' : 'text-blue-600';
    if (percentage >= 40) return isDarkMode ? 'text-yellow-400' : 'text-yellow-600';
    return isDarkMode ? 'text-red-400' : 'text-red-600';
  };

  if (showResults) {
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
          <div className="max-w-2xl mx-auto text-center">
            <div className={`p-8 rounded-xl backdrop-blur-md border ${
              isDarkMode 
                ? 'bg-gray-800/50 border-amber-700/30' 
                : 'bg-white/50 border-amber-200/30'
            }`}>
              <Award className={`w-16 h-16 mx-auto mb-6 ${getScoreColor()}`} />
              
              <h1 className={`text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-amber-200' : 'text-amber-900'
              }`}>
                Quiz Complete!
              </h1>

              <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>

              <p className={`text-xl mb-6 ${
                isDarkMode ? 'text-amber-100' : 'text-amber-700'
              }`}>
                {getScoreMessage()}
              </p>

              <div className="space-y-4 mb-8">
                {questions.map((question, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700/50' : 'bg-amber-100/50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${
                        isDarkMode ? 'text-amber-300' : 'text-amber-700'
                      }`}>
                        Question {index + 1}
                      </span>
                      {selectedAnswers[index] === question.correct ? (
                        <CheckCircle className="text-green-500" size={20} />
                      ) : (
                        <XCircle className="text-red-500" size={20} />
                      )}
                    </div>
                    <p className={`text-sm mt-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {question.question}
                    </p>
                    <p className={`text-xs mt-1 ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}>
                      Correct: {question.options[question.correct]}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleRestart}
                className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center"
              >
                <RotateCcw className="mr-2" size={18} />
                Take Quiz Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${
      isDarkMode ? 'bg-gray-900' : 'bg-amber-50'
    }`}>
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('/images/Main_Baground.png')`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-amber-200' : 'text-amber-900'
            }`}>
              History Quiz
            </h1>
            <div className={`text-sm ${
              isDarkMode ? 'text-amber-300' : 'text-amber-700'
            }`}>
              Question {currentQuestion + 1} of {questions.length}
            </div>
            
            {/* Progress Bar */}
            <div className={`w-full h-2 rounded-full mt-4 ${
              isDarkMode ? 'bg-gray-700' : 'bg-amber-200'
            }`}>
              <div
                className="h-full bg-amber-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className={`p-8 rounded-xl backdrop-blur-md border mb-8 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-amber-700/30' 
              : 'bg-white/50 border-amber-200/30'
          }`}>
            <h2 className={`text-xl font-semibold mb-6 ${
              isDarkMode ? 'text-amber-200' : 'text-amber-900'
            }`}>
              {questions[currentQuestion].question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswers[currentQuestion] === index
                      ? isDarkMode
                        ? 'border-amber-500 bg-amber-600/20 text-amber-200'
                        : 'border-amber-500 bg-amber-100 text-amber-900'
                      : isDarkMode
                        ? 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-amber-600 hover:bg-gray-600/50'
                        : 'border-gray-300 bg-white/50 text-gray-700 hover:border-amber-400 hover:bg-amber-50'
                  }`}
                >
                  <span className={`inline-block w-8 h-8 rounded-full mr-3 text-center leading-8 text-sm font-medium ${
                    selectedAnswers[currentQuestion] === index
                      ? 'bg-amber-600 text-white'
                      : isDarkMode
                        ? 'bg-gray-600 text-gray-300'
                        : 'bg-gray-200 text-gray-600'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-md font-semibold border transition-all ${
                currentQuestion === 0
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : isDarkMode 
                    ? 'border-amber-600 text-amber-300 hover:bg-amber-600 hover:text-white' 
                    : 'border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white'
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className={`px-8 py-3 rounded-md font-semibold transition-all ${
                selectedAnswers[currentQuestion] === undefined
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-amber-600 hover:bg-amber-500 text-white'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;