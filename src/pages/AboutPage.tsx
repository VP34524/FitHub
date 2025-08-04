import React from 'react';
import { Activity, Brain, Users, Target, Clock, Shield } from 'lucide-react';
import { ThemeConfig } from '../types';

interface AboutPageProps {
  theme: ThemeConfig;
}

export function AboutPage({ theme }: AboutPageProps) {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Plans',
      description: 'Personalized workout and nutrition plans created by advanced AI technology.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Guidance',
      description: 'AI-assisted consultations to help you achieve your fitness goals.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Goal Tracking',
      description: 'Track your progress and adjust your plans for optimal results.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time Efficient',
      description: 'Workouts tailored to fit your schedule and lifestyle.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe & Reliable',
      description: 'Science-based approach to fitness and nutrition.'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Holistic Approach',
      description: 'Comprehensive plans covering both exercise and nutrition.'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About FitHub</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Revolutionizing fitness with AI-powered personalization, making expert-level guidance 
            accessible to everyone, anywhere, anytime.
          </p>
        </div>
      </div>

      <div className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`${theme.primary} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At FitHub, we believe that everyone deserves access to high-quality fitness guidance. 
            Our mission is to democratize personal training by leveraging artificial intelligence 
            to provide personalized, science-based fitness and nutrition plans at a fraction of 
            traditional costs.
          </p>
        </div>
      </div>
    </div>
  );
}