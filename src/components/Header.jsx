import logoQuizz from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header>
            <img src={logoQuizz} alt="Quiz logo"/>
            <h1>ReactQuizz</h1>
        </header>
    );
}