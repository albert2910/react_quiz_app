import {useCallback, useRef, useState} from "react";
import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    // chua hieu lam
    const activeQuestionIndex =userAnswers.length ;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizComplete} alt="Trophy icon"/>
            <h2>Quiz Completed!</h2>
        </div>
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSkipAnswer = {handleSkipAnswer}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>

    );
}