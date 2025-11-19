import React from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { ProductsIcon } from './icons/ProductsIcon';
import { SimulatorIcon } from './icons/SimulatorIcon';
import { SettingsIcon } from './icons/SettingsIcon';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo" />
      <nav className="sidebar-nav">
        <div 
          className={`nav-item ${currentView === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          <HomeIcon />
        </div>
        <div 
          className={`nav-item ${currentView === 'products' ? 'active' : ''}`}
          onClick={() => onNavigate('products')}
        >
          <ProductsIcon />
        </div>
        <div 
          className={`nav-item ${currentView === 'simulator' ? 'active' : ''}`}
          onClick={() => onNavigate('simulator')}
        >
          <SimulatorIcon />
        </div>
        <div 
          className={`nav-item ${currentView === 'settings' ? 'active' : ''}`}
          onClick={() => onNavigate('settings')}
        >
          <SettingsIcon />
        </div>
      </nav>
    </aside>
  );
};