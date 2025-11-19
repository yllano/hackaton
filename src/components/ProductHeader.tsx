
import React from 'react';
import { Card } from './Card';

export const ProductHeader: React.FC = () => {
  return (
    <Card className="product-header-card">
      <img src="https://placehold.co/80x80/c084fc/white?text=Producto" alt="Product" className="product-image" />
      <div className="product-info">
        <h1>Café de Altura - Grano Premium</h1>
        <div className="product-badges">
          <span className="badge demand">Alta Demanda</span>
          <span className="badge stock">Stock Bajo</span>
        </div>
      </div>
    </Card>
  );
};
