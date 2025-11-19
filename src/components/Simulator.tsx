
import React, { useState } from 'react';
import { Card } from './Card';
import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { DollarSignIcon } from './icons/DollarSignIcon';
import { TrophyIcon } from './icons/TrophyIcon';

interface ImpactCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  type: 'positive' | 'negative' | 'neutral';
}

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, value, label, type }) => (
  <div className="impact-card">
    <div className={`icon ${type === 'neutral' ? '' : type}`}>
      {icon}
    </div>
    <div className="text">
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  </div>
);

export const Simulator: React.FC = () => {
  const [price, setPrice] = useState(48);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  // Dummy data based on price
  const projectedSales = Math.round(1000 - (price - 45) * 20);
  const marginImpact = ((price - 45) * 0.5).toFixed(2);

  return (
    <Card className="simulator-card">
      <h2 className="card-title">Simulador "What-If"</h2>
      <p className="card-content">Arrastra el slider para explorar el impacto de diferentes precios.</p>
      
      <div className="slider-container">
        <input 
          type="range" 
          min="40" 
          max="55" 
          value={price} 
          onChange={handleSliderChange} 
        />
        <div style={{textAlign: 'center', marginTop: '0.5rem', fontSize: '1.5rem', fontWeight: 700}}>
          ${price}
        </div>
      </div>

      <div className="impact-cards-container">
        <ImpactCard 
          icon={<TrendingUpIcon />}
          value={`${projectedSales} uds.`}
          label="Proyección de Venta"
          type={price > 45 ? 'negative' : 'positive'}
        />
        <ImpactCard 
          icon={<DollarSignIcon />}
          value={`+${marginImpact}%`}
          label="Impacto en Margen"
          type={parseFloat(marginImpact) >= 0 ? 'positive' : 'negative'}
        />
        <ImpactCard 
          icon={<TrophyIcon />}
          value={price > 49 ? 'Líder' : 'Competitivo'}
          label="Posición vs Competencia"
          type="neutral"
        />
      </div>
    </Card>
  );
};
