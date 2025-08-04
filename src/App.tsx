import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Theme, themes } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CustomizePage } from './pages/CustomizePage';

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('slate');

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${themes[currentTheme].background}`}>
        <Navbar theme={themes[currentTheme]} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage theme={themes[currentTheme]} />} />
            <Route path="/about" element={<AboutPage theme={themes[currentTheme]} />} />
            <Route 
              path="/customize" 
              element={
                <CustomizePage 
                  currentTheme={currentTheme}
                  onThemeChange={setCurrentTheme}
                  theme={themes[currentTheme]}
                />
              } 
            />
          </Routes>
        </main>

        <Footer theme={themes[currentTheme]} />
      </div>
    </BrowserRouter>
  );
}

export default App;