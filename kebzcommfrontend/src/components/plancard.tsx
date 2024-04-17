// PhonePlanCard.tsx

import React from 'react';
import { PhonePlan, Superplan } from '../types';
import { Link } from 'react-router-dom';
import { removeDevice, removeUserPlan } from '../api';




interface PhonePlanCardProps {
  superplan: Superplan;
  onClick: () => void;
}

export const PhonePlanCard: React.FC<PhonePlanCardProps> = ({ superplan, onClick }) => {
  const plan = superplan.planObj
  const currentuser = sessionStorage.getItem('userId')

  if (!plan)
    throw new Error('No plan found!');

  let editLink = `/editplan`;
  return (
    <>
      <th>{plan.planName}</th>
      <td>{plan.price}</td>
      <td>{plan.planDescription}</td>
      <td>{plan.deviceLimit}</td>
      <td>{plan.textLimit}</td>
      <td>{plan.minuteLimit}</td>
      <td>{plan.dataLimit}</td>
      <td>
        <Link to={editLink} state={{
          pathname: editLink,
          state: { superplan } // Pass the superplan object as state
        }as any} className='btn btn-info'>Edit</Link>
      </td>
      <td>
        <button onClick={() => {removeUserPlan(currentuser,superplan.associatedUserPlanID)}} className='btn btn-danger'>Remove</button>
      </td>
    </>
  );
}

export const PhonePlanCardExpanded: React.FC<PhonePlanCardProps> = ({ superplan, onClick }) => {
  const plan = superplan.planObj
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{plan?.planName}</h5>
        <p className="card-text">Price: {plan?.price}</p>
        <p className="card-text">{plan?.planDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Device Limit: {plan?.deviceLimit}</li>
          <li className="list-group-item">Text Limit: {plan?.textLimit}</li>
          <li className="list-group-item">Minute Limit: {plan?.minuteLimit}</li>
          <li className="list-group-item">Data Limit: {plan?.dataLimit}</li>
        </ul>
      </div>
    </div>
  );
}

