
import React from 'react';
import { Card } from './Card';

export const MainChart: React.FC = () => {
  return (
    <Card className="main-chart-card">
      <h2 className="card-title">Rendimiento de Precios Dinámicos vs. Estáticos</h2>
      <div className="main-chart-container">
        <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="main-chart-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--icon-active-color)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="var(--icon-active-color)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          <line x1="0" y1="50" x2="500" y2="50" stroke="var(--border-color)" strokeWidth="1" />
          <line x1="0" y1="100" x2="500" y2="100" stroke="var(--border-color)" strokeWidth="1" />
          <line x1="0" y1="150" x2="500" y2="150" stroke="var(--border-color)" strokeWidth="1" />

          {/* Static/Benchmark Line (Dotted) */}
          <path 
            d="M 0 100 C 50 90, 150 90, 200 110 S 300 140, 350 120 S 450 90, 500 100"
            stroke="var(--text-secondary)"
            fill="none"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Dynamic Pricing Area */}
          <path 
            d="M 0 150 C 50 120, 150 40, 200 60 S 300 100, 350 50 S 450 20, 500 30"
            fill="url(#main-chart-gradient)"
            stroke="none"
          />
          {/* Dynamic Pricing Line */}
          <path 
            d="M 0 150 C 50 120, 150 40, 200 60 S 300 100, 350 50 S 450 20, 500 30"
            stroke="var(--icon-active-color)"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </Card>
  );
};
