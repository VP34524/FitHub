// import React from 'react';
import { Link } from 'react-router';
import { Dumbbell, Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ThemeConfig } from '../types';

interface FooterProps {
  theme: ThemeConfig;
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer className={`${theme.primary} text-white py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell size={24} />
              <span className="text-xl font-bold">FitHub</span>
            </div>
            <p className="text-white/80">
              Your AI-powered fitness companion for personalized workout and nutrition plans.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white/80 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white/80 transition-colors">About</Link></li>
              <li><Link to="/customize" className="hover:text-white/80 transition-colors">Customize</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>Email: abc@gmail.com</li>
              <li>Phone: +91 12345-67890</li>
              <li>Address: 123 xyz street</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/" target="_blank" className="hover:text-white/80 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="hover:text-white/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" className="hover:text-white/80 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/" target="_blank" className="hover:text-white/80 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} FitHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}