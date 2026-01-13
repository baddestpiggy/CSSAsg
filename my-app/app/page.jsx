<<<<<<< HEAD
=======
<<<<<<< HEAD


export default function App() {

  return (
    <h1>hiii</h1>
  
  )
}
=======
'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Globe, Menu, X, Star } from 'lucide-react';

// Main App Component
export default function WondersOfTheWorld() {
  const [currentWonder, setCurrentWonder] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visitedWonders, setVisitedWonders] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
>>>>>>> 898f894c9ce24ca2b36c8125de79682e8ccd4dc0
>>>>>>> cecca06b8e603c6ce86192e8ab71e3814f9c2156
