import React from 'react';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

interface ThemeSwitcherProps {
  onToggle: () => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onToggle }) => {
  return (
    <button className="theme-switcher" onClick={onToggle} aria-label="Toggle theme">
      <SunIcon className="sun-icon" />
      <MoonIcon className="moon-icon" />
    </button>
  );
};