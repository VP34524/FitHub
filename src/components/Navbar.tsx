import React from 'react';
import { Link, useLocation } from 'react-router';
import { Dumbbell } from 'lucide-react';
import { ThemeConfig } from '../types';

interface NavbarProps {
  theme: ThemeConfig;
}

export function Navbar({ theme }: NavbarProps) {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`${theme.primary} text-white shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell size={24} />
            <span className="text-xl font-bold">FitHub</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`hover:text-white/80 transition-colors ${
                isActive('/') ? 'font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-white/80 transition-colors ${
                isActive('/about') ? 'font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/customize"
              className={`hover:text-white/80 transition-colors ${
                isActive('/customize') ? 'font-semibold' : ''
              }`}
            >
              Customize
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}