
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HomeDashboard } from './components/HomeDashboard';

// I'll move the old icon components to the new icons folder structure for consistency
import { SunIcon } from './components/icons/SunIcon';
import { MoonIcon } from './components/icons/MoonIcon';


type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const body = window.document.body;
    body.classList.remove(theme === 'light' ? 'dark' : 'light');
    body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-content">
        <Header onToggleTheme={toggleTheme} />
        <main>
          <HomeDashboard />
        </main>
      </div>
    </div>
  );
}

// Since I've moved the Sun and Moon icons, I need to recreate them in the new location
// and update the ThemeSwitcher to point to the new location.
// I will do that in the next steps. For now, this will cause an error.
// I will first create the new icon files.

export default App;
