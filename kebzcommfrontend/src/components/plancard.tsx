// PhonePlanCard.tsx

import React from 'react';
import { PhonePlan } from '../types';




interface PhonePlanCardProps {
  plan: PhonePlan;
  onClick: () => void;
}

export const PhonePlanCard: React.FC<PhonePlanCardProps> = ({ plan, onClick }) => {
  let editLink = `/editplan/${plan.id}`;
  return (
    <>
        <th>{plan.name}</th>
        <td>{plan.price}</td>
        <td>{plan.description}</td>
        <td>{plan.deviceLimit}</td>
        <td>{plan.textLimit}</td>
        <td>{plan.minuteLimit}</td>
        <td>{plan.dataLimit}</td>
        <td><a className='btn btn-info' href={editLink}>Edit</a></td>
    </>
  );
}

