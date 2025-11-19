
import React from 'react';
import { Card } from './Card';

interface KpiCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: 'lavender' | 'sky' | 'pink' | 'gray';
}

// A simple sparkline placeholder
const Sparkline = () => (
  <svg width="100%" height="40" viewBox="0 0 100 40" className="sparkline">
    <defs>
      <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--icon-active-color)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="var(--icon-active-color)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path 
      d="M 0,30 C 10,10 20,15 30,20 S 50,30 60,15 S 80,5 90,10 S 100,20 100,20" 
      stroke="var(--icon-active-color)" 
      fill="url(#sparkline-gradient)" 
      strokeWidth="2"
    />
  </svg>
);


export const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon, color }) => {
  return (
    <Card className="kpi-card">
      <div className="kpi-card-content">
        <div className={`kpi-icon-wrapper ${color}`}>
          {icon}
        </div>
        <span className="kpi-value">{value}</span>
        <span className="kpi-title">{title}</span>
      </div>
      <Sparkline />
    </Card>
  );
};
