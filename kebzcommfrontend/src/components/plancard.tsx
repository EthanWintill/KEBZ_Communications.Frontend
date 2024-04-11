// PhonePlanCard.tsx

import React from 'react';
import { PhonePlan } from '../types';




interface PhonePlanCardProps {
  plan: PhonePlan;
  onClick: () => void;
}

export const PhonePlanCard: React.FC<PhonePlanCardProps> = ({ plan, onClick }) => {
  let editLink = `/editplan/${plan.planId}`;
  return (
    <>
        <th>{plan.PlanName}</th>
        <td>{plan.Price}</td>
        <td>{plan.PlanDescription}</td>
        <td>{plan.DeviceLimit}</td>
        <td>{plan.TextLimit}</td>
        <td>{plan.MinuteLimit}</td>
        <td>{plan.DataLimit}</td>
        <td><a className='btn btn-info' href={editLink}>Edit</a></td>
    </>
  );
}

