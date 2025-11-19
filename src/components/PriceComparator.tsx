
import React from 'react';
import { Card } from './Card';
import { ArrowUpIcon } from './icons/ArrowUpIcon';

export const PriceComparator: React.FC = () => {
  return (
    <Card className="price-comparator-card">
      <div className="price-point">
        <span className="label">Precio Actual</span>
        <span className="price">$45</span>
      </div>
      <div className="price-arrow">
        <ArrowUpIcon />
        <span className="percentage">+6%</span>
      </div>
      <div className="price-point highlight">
        <span className="label">Sugerido por IA</span>
        <span className="price">$48</span>
      </div>
    </Card>
  );
};
