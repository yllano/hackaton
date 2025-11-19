
import React from 'react';
import { Card } from './Card';
import { ChartPlaceholder } from './ChartPlaceholder';

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-grid">
      <Card>
        <h2 className="card-title">Revenue Overview</h2>
        <p className="card-content">A detailed look at revenue streams.</p>
        <ChartPlaceholder color="lavender" title="Revenue" />
      </Card>
      <Card>
        <h2 className="card-title">Pricing Tiers</h2>
        <p className="card-content">Current dynamic pricing distribution.</p>
        <ChartPlaceholder color="sky" title="Tiers" />
      </Card>
      <Card>
        <h2 className="card-title">User Activity</h2>
        <p className="card-content">Monitor user engagement and actions.</p>
        <br />
        <button className="pill-button">View Report</button>
      </Card>
       <Card>
        <h2 className="card-title">Conversion Rate</h2>
        <p className="card-content">Track the conversion funnel performance.</p>
         <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <span style={{ fontSize: '3rem', fontWeight: '700' }}>5.2%</span>
        </div>
      </Card>
    </div>
  );
};
