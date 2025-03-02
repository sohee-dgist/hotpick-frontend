import React from 'react';
import HotDealCard from './HotDealCard';

const HotDealList = ({ hotDeals }) => {
  return (
    <div>
      {hotDeals.map((deal) => (
        <HotDealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
};

export default HotDealList;