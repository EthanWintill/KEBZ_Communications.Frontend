// PhonePlanCard.tsx

import React from 'react';

interface PhonePlan {
  id: number;
  name: string;
  price: number;
  description: string;
  deviceLimit: number;
  textLimit: number;
  minuteLimit: number;
  dataLimit: number;
}



interface PhonePlanCardProps {
  plan: PhonePlan;
  onClick: () => void;
}

const PhonePlanCard: React.FC<PhonePlanCardProps> = ({ plan, onClick }) => {
  return (
    <div className="phone-plan-card" onClick={onClick}>
      <h3>{plan.name}</h3>
      <p>Price: ${plan.price}</p>
      <p>Description: {plan.description}</p>
      <p>Device Limit: {plan.deviceLimit}</p>
      <p>Text Limit: {plan.textLimit} messages</p>
      <p>Minute Limit: {plan.minuteLimit} minutes</p>
      <p>Data Limit: {plan.dataLimit} GB</p>
    </div>
  );
}

export default PhonePlanCard;
