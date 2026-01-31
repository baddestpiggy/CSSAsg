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
      image: "https://images.unsplash.com/photo-1579606032821-4e6d715c3c35?w=600&q=80",
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
}