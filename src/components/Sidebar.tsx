
import React from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { ProductsIcon } from './icons/ProductsIcon';
import { SimulatorIcon } from './icons/SimulatorIcon';
import { SettingsIcon } from './icons/SettingsIcon';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo" />
      <nav className="sidebar-nav">
        <div className="nav-item active">
          <HomeIcon />
        </div>
        <div className="nav-item">
          <ProductsIcon />
        </div>
        <div className="nav-item">
          <SimulatorIcon />
        </div>
        <div className="nav-item">
          <SettingsIcon />
        </div>
      </nav>
    </aside>
  );
};
