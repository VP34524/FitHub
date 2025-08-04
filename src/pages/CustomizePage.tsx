import React from 'react';
import { Theme, themes, ThemeConfig } from '../types';
import { Palette, Sun, Moon, Zap, Heart, Leaf } from 'lucide-react';

interface CustomizePageProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  theme: ThemeConfig;
}

export function CustomizePage({ currentTheme, onThemeChange, theme }: CustomizePageProps) {
  const themeIcons = {
    slate: <Moon className="w-6 h-6" />,
    emerald: <Leaf className="w-6 h-6" />,
    violet: <Heart className="w-6 h-6" />,
    rose: <Palette className="w-6 h-6" />,
    amber: <Sun className="w-6 h-6" />,
    cyan: <Zap className="w-6 h-6" />
  };

  const themeNames = {
    slate: 'Midnight',
    emerald: 'Forest',
    violet: 'Royal',
    rose: 'Sunset',
    amber: 'Desert',
    cyan: 'Ocean'
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl font-bold mb-8 text-center ${theme.text}`}>
            Customize Your Experience
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Choose Your Theme</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {(Object.keys(themes) as Theme[]).map((themeKey) => (
                <button
                  key={themeKey}
                  onClick={() => onThemeChange(themeKey)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    currentTheme === themeKey
                      ? `${themes[themeKey].primary} text-white border-transparent`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    {themeIcons[themeKey]}
                  </div>
                  <p className="font-medium">{themeNames[themeKey]}</p>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Preview</h3>
              <div className={`${themes[currentTheme].primary} p-6 rounded-lg text-white`}>
                <p className="text-lg font-medium">Sample Text</p>
                <p className="opacity-80">This is how your theme will look across the site.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}