import React from 'react';
import { Theme, themes } from '../types';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  return (
    <div className="fixed top-4 right-4 flex gap-2">
      {Object.keys(themes).map((theme) => (
        <button
          key={theme}
          onClick={() => onThemeChange(theme as Theme)}
          className={`w-6 h-6 rounded-full ${themes[theme as Theme].primary} 
            ${currentTheme === theme ? 'ring-2 ring-offset-2 ring-black' : ''}`}
          aria-label={`Switch to ${theme} theme`}
        />
      ))}
    </div>
  );
}