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
        <th>{plan.planName}</th>
        <td>{plan.price}</td>
        <td>{plan.planDescription}</td>
        <td>{plan.deviceLimit}</td>
        <td>{plan.textLimit}</td>
        <td>{plan.minuteLimit}</td>
        <td>{plan.dataLimit}</td>
        <td><a className='btn btn-info' href={editLink}>Edit</a></td>
    </>
  );
}

export const PhonePlanCardExpanded: React.FC<PhonePlanCardProps> = ({ plan, onClick }) => {
  let editLink = `/editplan/${plan.planId}`;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{plan.planName}</h5>
        <p className="card-text">Price: {plan.price}</p>
        <p className="card-text">{plan.planDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Device Limit: {plan.deviceLimit}</li>
          <li className="list-group-item">Text Limit: {plan.textLimit}</li>
          <li className="list-group-item">Minute Limit: {plan.minuteLimit}</li>
          <li className="list-group-item">Data Limit: {plan.dataLimit}</li>
        </ul>
      </div>
    </div>
  );
}

