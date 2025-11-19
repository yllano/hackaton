
import React from 'react';
import { Card } from './Card';

interface FactorProps {
  label: string;
  value: number;
}

const FactorItem: React.FC<FactorProps> = ({ label, value }) => (
  <div className="factor-item">
    <div className="info">
      <span className="label">{label}</span>
      <span className="value">{value}%</span>
    </div>
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export const InfluenceFactors: React.FC = () => {
  return (
    <Card className="influence-factors-card">
      <h2 className="card-title">Factores de Influencia</h2>
      <div className="factors-list">
        <FactorItem label="Estacionalidad" value={80} />
        <FactorItem label="Precios de Competencia" value={50} />
        <FactorItem label="Nivel de Stock" value={20} />
        <FactorItem label="Demanda Histórica" value={65} />
      </div>
    </Card>
  );
};
