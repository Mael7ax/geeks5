import React, { useState } from 'react';
import styles from './Quiz.module.css';

export const Quiz = () => {
    // Вопрос и ответы можно вынести в отдельный файл, если будет несколько
    const questionData = {
        question: 'Насколько процентов использоваль ChatGpt?',
        answers: ['5%', '50%', '100%', '0.1%'],
        correctAnswer: '50%',
    };

    const { question, answers, correctAnswer } = questionData;

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answer) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(answer);
        }
    };

    const isCorrect = selectedAnswer === correctAnswer;

    return (
        <div className={styles.quizContainer}>
            <h2>{question}</h2>
            <div className={styles.answers}>
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(answer)}
                        className={`${styles.answerButton} ${
                            selectedAnswer
                                ? answer === correctAnswer
                                    ? styles.correct
                                    : answer === selectedAnswer
                                        ? styles.incorrect
                                        : ''
                                : ''
                        }`}
                        disabled={selectedAnswer !== null}
                    >
                        {answer}
                    </button>
                ))}
            </div>

            {selectedAnswer && (
                <div className={isCorrect ? styles.correctText : styles.incorrectText}>
                    {isCorrect ? 'ПРАВИЛЬНО!' : 'НЕПРАВИЛЬНО!'}
                </div>
            )}
        </div>
    );
};

