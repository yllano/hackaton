
import React from 'react';
import { ProductHeader } from './ProductHeader';
import { PriceComparator } from './PriceComparator';
import { Simulator } from './Simulator';
import { InfluenceFactors } from './InfluenceFactors';
import { FloatingActionButton } from './FloatingActionButton';

export const ProductDetailView: React.FC = () => {
  return (
    <>
      <div className="product-detail-grid">
        <ProductHeader />
        <PriceComparator />
        <Simulator />
        <InfluenceFactors />
      </div>
      <FloatingActionButton />
    </>
  );
};
