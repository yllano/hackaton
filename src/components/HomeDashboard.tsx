
import React from 'react';
import { KpiCard } from './KpiCard';
import { MainChart } from './MainChart';
import { OpportunitiesFeed } from './OpportunitiesFeed';

import { TrendingUpIcon } from './icons/TrendingUpIcon';
import { DollarSignIcon } from './icons/DollarSignIcon';
import { ZapIcon } from './icons/ZapIcon';
import { AlertTriangleIcon } from './icons/AlertTriangleIcon';

export const HomeDashboard: React.FC = () => {
  return (
    <div className="home-dashboard">
      <KpiCard 
        title="Margen Actual"
        value="+15%"
        color="lavender"
        icon={<TrendingUpIcon />}
      />
      <KpiCard 
        title="Ingresos Totales"
        value="$1.2M"
        color="sky"
        icon={<DollarSignIcon />}
      />
      <KpiCard 
        title="Elasticidad Promedio"
        value="-1.8"
        color="pink"
        icon={<ZapIcon />}
      />
      <KpiCard 
        title="Alertas Activas"
        value="3"
        color="gray"
        icon={<AlertTriangleIcon />}
      />

      <MainChart />
      
      <OpportunitiesFeed />
    </div>
  );
};
