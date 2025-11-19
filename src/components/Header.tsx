
import React from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { ThemeSwitcher } from './ThemeSwitcher';

interface HeaderProps {
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleTheme }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-greeting">Hola, Vanessa</h1>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <SearchIcon />
          <input type="text" placeholder="Buscar producto o simulación..." />
        </div>
        <ThemeSwitcher onToggle={onToggleTheme} />
      </div>
    </header>
  );
};
