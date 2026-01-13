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