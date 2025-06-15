import React from 'react';
import Quiz from '../components/Quiz';
import { useLocation, useNavigate } from 'react-router-dom';

const QuizRoutePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // Accept event data from location state or fallback to a default event
    const event = location.state?.event || {
        title: 'Sample Event',
        date: '1947',
        location: 'Delhi',
        category: 'History',
        significance: 'Independence of India',
    };

    return (
        <Quiz event={event} onClose={() => navigate(-1)} />
    );
};

export default QuizRoutePage;
