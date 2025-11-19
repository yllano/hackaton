
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { HomeDashboard } from './components/HomeDashboard';
import { ProductDetailView } from './components/ProductDetailView';

type Theme = 'light' | 'dark';
type View = 'home' | 'products' | 'simulator' | 'settings';

// A simple placeholder for views that are not yet created
const PlaceholderView: React.FC<{ viewName: string }> = ({ viewName }) => (
  <div style={{ padding: '2rem', fontSize: '1.5rem', color: 'var(--text-secondary)'}}>
    Vista para <strong>{viewName}</strong> no implementada todavía.
  </div>
);


function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [currentView, setCurrentView] = useState<View>('home');

useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeDashboard />;
      case 'products':
        return <ProductDetailView />;
      case 'simulator':
        return <PlaceholderView viewName="Simulador" />;
      case 'settings':
        return <PlaceholderView viewName="Configuración" />;
      default:
        return <HomeDashboard />;
    }
  }

  return (
    <div className="app-wrapper">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <div className="main-content">
        <Header onToggleTheme={toggleTheme} />
        <main>
          {renderView()}
        </main>
      </div>
    </div>
  );
}

export default App;
