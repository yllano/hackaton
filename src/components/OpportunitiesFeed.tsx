
import React from 'react';
import { Card } from './Card';

const opportunities = [
  { id: 1, text: 'Competidor X subió precios en Brasil.' },
  { id: 2, text: 'Alta demanda detectada en el producto SKU-123.' },
  { id: 3, text: 'Bajo stock para el producto más elástico.' },
  { id: 4, text: 'Costo de materia prima ha disminuido un 5%.' },
];

export const OpportunitiesFeed: React.FC = () => {
  return (
    <Card className="opportunities-card">
      <h2 className="card-title">Oportunidades en Tiempo Real</h2>
      <div className="opportunities-list">
        {opportunities.map(op => (
          <div key={op.id} className="opportunity-item">
            <span>{op.text}</span>
            <button className="pill-button">Ajustar</button>
          </div>
        ))}
      </div>
    </Card>
  );
};
