
import React from 'react';

interface ChartPlaceholderProps {
  color: 'lavender' | 'sky';
  title: string;
}

export const ChartPlaceholder: React.FC<ChartPlaceholderProps> = ({ color, title }) => {
  return (
    <div className={`chart-placeholder ${color}`}>
      {title}
    </div>
  );
};
