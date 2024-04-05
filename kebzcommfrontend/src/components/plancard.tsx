// PhonePlanCard.tsx

import React from 'react';
import { PhonePlan } from '../types';




interface PhonePlanCardProps {
  plan: PhonePlan;
  onClick: () => void;
}

export const PhonePlanCard: React.FC<PhonePlanCardProps> = ({ plan, onClick }) => {
  return (
    <>
    <h3>{plan.name}</h3>
    <div className="phone-plan-card grid" onClick={onClick}>
      <p>Price: ${plan.price}</p>
      <p>Description: {plan.description}</p>
      <p>Device Limit: {plan.deviceLimit}</p>
      <p>Text Limit: {plan.textLimit} messages</p>
      <p>Minute Limit: {plan.minuteLimit} minutes</p>
      <p>Data Limit: {plan.dataLimit} GB</p>
    </div>
    </>
  );
}

