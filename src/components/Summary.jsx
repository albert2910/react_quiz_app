import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({userAnswers}) {

    const TOTAL_ANSWERS = QUESTIONS.length;
    const skippedAnswers = userAnswers.filter( answer => answer === null);
    const correctAnswers = userAnswers.filter( (answer, index) => answer === QUESTIONS[index].answers[0]);

    // const percentSkipped = (countSkippedAnswers/TOTAL_ANSWERS * 100).toFixed(2);
    // const percentCorrect = (countCorrectAnswers/TOTAL_ANSWERS * 100).toFixed(2);
    // const percentIncorrect = (countIncorrectAnswers/TOTAL_ANSWERS * 100).toFixed(2);
    const percentSkipped = Math.round(skippedAnswers.length/TOTAL_ANSWERS * 100);
    const percentCorrect = Math.round(correctAnswers.length/TOTAL_ANSWERS * 100);
    const percentIncorrect = 100 - percentSkipped - percentCorrect;


    return (
        <div id="summary">
            <img src={quizComplete} alt="Trophy icon"/>
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{percentSkipped}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{percentCorrect}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{percentIncorrect}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';

                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{[QUESTIONS[index].text]}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    );
                })}

            </ol>
        </div>
    );
}