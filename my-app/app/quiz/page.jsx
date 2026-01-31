"use client";

import React, { useState } from 'react';
import styles from './quiz.module.css';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions = [
    {
      question: "Which wonder is located in China?",
      options: ["Petra", "Great Wall of China", "Colosseum", "Taj Mahal"],
      correct: 1,
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80",
      funFact: "The Great Wall of China stretches over 13,000 miles!"
    },
    {
      question: "What is Petra also known as?",
      options: ["The Lost City", "The Rose City", "The Stone City", "The Ancient City"],
      correct: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Al_Deir_Petra.JPG",
      funFact: "Petra gets its nickname from the rose-red color of its sandstone!"
    },
    {
      question: "In which country is the Colosseum located?",
      options: ["Greece", "Spain", "Italy", "Turkey"],
      correct: 2,
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",
      funFact: "The Colosseum could hold up to 80,000 spectators!"
    },
    {
      question: "Chichén Itzá was built by which civilization?",
      options: ["Aztec", "Inca", "Maya", "Olmec"],
      correct: 2,
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80",
      funFact: "During equinoxes, shadows create the illusion of a serpent descending the pyramid!"
    },
    {
      question: "What is the elevation of Machu Picchu?",
      options: ["5,000 feet", "7,970 feet", "10,000 feet", "12,500 feet"],
      correct: 1,
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80",
      funFact: "Machu Picchu was unknown to the outside world until 1911!"
    },
    {
      question: "The Taj Mahal was built as a monument to whom?",
      options: ["A queen", "A king", "The emperor's wife", "A goddess"],
      correct: 2,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
      funFact: "It took 22 years and 20,000 workers to build the Taj Mahal!"
    },
    {
      question: "Where is Christ the Redeemer located?",
      options: ["São Paulo, Brazil", "Rio de Janeiro, Brazil", "Buenos Aires, Argentina", "Lima, Peru"],
      correct: 1,
      image: "https://images.unsplash.com/photo-1548963670-aaaa8f73a5e3?w=600&q=80",
      funFact: "Christ the Redeemer's arms stretch 92 feet wide!"
    }
  ];

  const handleAnswerClick = (answerIndex) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    const correct = selectedAnswer === questions[currentQuestion].correct;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, {
      question: questions[currentQuestion].question,
      selectedAnswer: selectedAnswer,
      correctAnswer: questions[currentQuestion].correct,
      isCorrect: correct
    }]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions([]);
    setShowFeedback(false);
    setIsCorrect(false);
  };

  const getScoreEmoji = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "🏆";
    if (percentage >= 80) return "🌟";
    if (percentage >= 60) return "👍";
    if (percentage >= 40) return "📚";
    return "💪";
  };
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.titleBox}>
            <h1 className={styles.title}>🌍 WONDERS QUIZ 🌍</h1>
          </div>
          <p className={styles.subtitle}>
            Test your knowledge about the Seven Wonders of the World
          </p>
        </div>
      </div>

      <div className={styles.quizContainer}>
        {!showResult ? (
          <div className={`${styles.quizCard} ${showFeedback ? styles.shake : ''}`}>
            <div className={styles.scoreCounter}>
              <span className={styles.scoreLabel}>Score:</span>
              <span className={styles.scoreValue}>{score}</span>
            </div>

            <div className={styles.progressBar}>
              <div 
                className={styles.progress}
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <div className={styles.questionNumber}>
              Question {currentQuestion + 1} of {questions.length}
            </div>

            <div className={styles.imageContainer}>
              <img 
                src={questions[currentQuestion].image} 
                alt="Wonder" 
                className={styles.questionImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>

            <h2 className={styles.question}>
              {questions[currentQuestion].question}
            </h2>

            <div className={styles.options}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`${styles.option} 
                    ${selectedAnswer === index ? styles.selected : ''} 
                    ${showFeedback && index === questions[currentQuestion].correct ? styles.correctAnswer : ''}
                    ${showFeedback && selectedAnswer === index && index !== questions[currentQuestion].correct ? styles.wrongAnswer : ''}
                  `}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showFeedback}
                >
                  <span className={styles.optionLetter}>{String.fromCharCode(65 + index)}</span>
                  <span className={styles.optionText}>{option}</span>
                  {showFeedback && index === questions[currentQuestion].correct && <span className={styles.checkMark}>✓</span>}
                  {showFeedback && selectedAnswer === index && index !== questions[currentQuestion].correct && <span className={styles.crossMark}>✗</span>}
                </button>
              ))}
            </div>

            {showFeedback && (
              <div className={`${styles.feedback} ${isCorrect ? styles.correctFeedback : styles.incorrectFeedback}`}>
                <div className={styles.feedbackIcon}>{isCorrect ? '🎉' : '😅'}</div>
                <div className={styles.feedbackText}>
                  {isCorrect ? 'Awesome! You got it right!' : 'Oops! Not quite right.'}
                </div>
                <div className={styles.funFact}>
                  <strong>Did you know?</strong> {questions[currentQuestion].funFact}
                </div>
              </div>
            )}

            {!showFeedback ? (
              <button
                className={styles.submitButton}
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </button>
            ) : (
              <button
                className={styles.nextButton}
                onClick={handleNextQuestion}
              >
                {currentQuestion + 1 === questions.length ? 'See Results 🎯' : 'Next Question →'}
              </button>
            )}
          </div>
        ) : (
          <div className={styles.resultCard}>
            <div className={styles.confetti}>🎊</div>
            <div className={styles.resultEmoji}>{getScoreEmoji()}</div>
            <h2 className={styles.resultTitle}>Quiz Complete!</h2>
            <div className={styles.scoreCircle}>
              <div className={styles.scoreText}>
                <span className={styles.scoreNumber}>{score}</span>
                <span className={styles.scoreTotal}>/ {questions.length}</span>
              </div>
            </div>
            <p className={styles.scoreMessage}>
              {score === questions.length && "Perfect Score! You're a true Wonders expert! 🏆"}
              {score >= questions.length * 0.7 && score < questions.length && "Excellent work! You really know your wonders! 🌟"}
              {score >= questions.length * 0.5 && score < questions.length * 0.7 && "Good job! Keep exploring! 🗺️"}
              {score < questions.length * 0.5 && "Keep learning about these amazing wonders! 📖"}
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>{score}</div>
                <div className={styles.statLabel}>Correct</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>{questions.length - score}</div>
                <div className={styles.statLabel}>Incorrect</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>{Math.round((score / questions.length) * 100)}%</div>
                <div className={styles.statLabel}>Accuracy</div>
              </div>
            </div>

            <div className={styles.reviewSection}>
              <h3 className={styles.reviewTitle}>📋 Review Your Answers</h3>
              {answeredQuestions.map((item, index) => (
                <div key={index} className={`${styles.reviewItem} ${item.isCorrect ? styles.correct : styles.incorrect}`}>
                  <div className={styles.reviewHeader}>
                    <span className={styles.reviewNumber}>Q{index + 1}</span>
                    <span className={styles.reviewStatus}>
                      {item.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                  </div>
                  <div className={styles.reviewQuestion}>
                    {item.question}
                  </div>
                  <div className={styles.reviewAnswer}>
                    <strong>Your answer:</strong> {questions[index].options[item.selectedAnswer]}
                    {!item.isCorrect && (
                      <div className={styles.correctAnswerText}>
                        <strong>Correct answer:</strong> {questions[index].options[item.correctAnswer]}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className={styles.restartButton} onClick={resetQuiz}>
              🔄 Retake Quiz
            </button>
          </div>
        )}
      </div>

      <footer className={styles.footer}>
        <p>© 2024 World History Project</p>
      </footer>
    </div>
  );
}
        
