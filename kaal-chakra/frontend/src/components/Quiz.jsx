// This file has been moved to pages/Quiz.jsx. Please use that file for the Quiz route.

import React, { useState } from 'react';

const generateQuizQuestions = (event) => [
  {
    question: `When did the event \"${event.title}\" take place?`,
    options: [event.date, '1942', '1950', '1930'],
    answer: event.date,
  },
  {
    question: `Where did the event \"${event.title}\" occur?`,
    options: [event.location, 'Mumbai', 'Kolkata', 'Chennai'],
    answer: event.location,
  },
  {
    question: `What is the main category of this event?`,
    options: [event.category, 'Sports', 'Science', 'Art'],
    answer: event.category,
  },
  {
    question: `Who played a crucial role in this event?`,
    options: [event.significance?.split(' ')[0] || 'Unknown', 'Gandhi', 'Nehru', 'Patel'],
    answer: event.significance?.split(' ')[0] || 'Unknown',
  },
  {
    question: `What is the significance of this event?`,
    options: [event.significance, 'No significance', 'Minor event', 'Not sure'],
    answer: event.significance,
  },
];

const Quiz = ({ event, onClose }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const questions = generateQuizQuestions(event);

  const handleOption = (option) => {
    const updated = [...selected];
    updated[current] = option;
    setSelected(updated);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const score = selected.filter((ans, idx) => ans === questions[idx].answer).length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500">✖</button>
        {!showScore ? (
          <>
            <h2 className="text-lg font-bold mb-4">Quiz</h2>
            <div className="mb-4">
              <p className="font-semibold mb-2">Q{current + 1}: {questions[current].question}</p>
              <div className="space-y-2">
                {questions[current].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOption(opt)}
                    className={`block w-full text-left px-4 py-2 rounded border transition mb-1 ${selected[current] === opt ? 'bg-amber-300 border-amber-500' : 'bg-gray-100 border-gray-300 hover:bg-amber-100'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={onClose}
                className="px-4 py-1 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
              >
                Cancel
              </button>
              <div>
                <button
                  onClick={handlePrev}
                  disabled={current === 0}
                  className="mr-2 px-4 py-1 rounded bg-amber-200 text-amber-900 hover:bg-amber-300 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={selected[current] == null}
                  className="px-4 py-1 rounded bg-amber-600 text-white hover:bg-amber-700"
                >
                  {current === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Quiz Completed!</h2>
            <p className="mb-2">Your Score: <span className="font-bold">{score} / {questions.length}</span></p>
            <button onClick={onClose} className="mt-4 px-4 py-1 rounded bg-amber-600 text-white hover:bg-amber-700">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
