import React from 'react';
import { Dumbbell, Brain, Calendar } from 'lucide-react';
import { ThemeConfig } from '../types';

interface HeroProps {
  theme: ThemeConfig;
}

export function Hero({ theme }: HeroProps) {
  return (
    <div className={`${theme.background} min-h-screen`}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold mb-6 ${theme.text}`}>
            FitHub
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-Powered Personalized Fitness Platform
          </p>
          <button className={`${theme.primary} text-white px-8 py-3 rounded-lg 
            hover:opacity-90 transition-opacity`}>
            <a href='#start'>Start Your Journey</a>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className={`${theme.primary} w-12 h-12 rounded-lg flex items-center 
              justify-center mb-4`}>
              <Brain className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Plans</h3>
            <p className="text-gray-600">Personalized workout and nutrition plans tailored to your goals</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className={`${theme.primary} w-12 h-12 rounded-lg flex items-center 
              justify-center mb-4`}>
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">1:1 Consultations</h3>
            <p className="text-gray-600">Schedule AI-assisted sessions for personalized guidance</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className={`${theme.primary} w-12 h-12 rounded-lg flex items-center 
              justify-center mb-4`}>
              <Dumbbell className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Monitor your fitness journey with smart analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
}