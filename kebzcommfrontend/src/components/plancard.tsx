// PhonePlanCard.tsx

import React from 'react';
import { PhonePlan, Superplan } from '../types';
import { Link } from 'react-router-dom';
import { removeDevice, removeUserPlan } from '../api';


interface PhonePlanCardProps {
  superplan: Superplan;
  onClick: () => void;
}
interface ExpandedPhonePlanCardProps {
  superplan: Superplan;
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
      <td>{plan?.textLimit === -1 ? 'Unlimited' : plan?.textLimit}</td>
      <td>{plan?.minuteLimit === -1 ? 'Unlimited' : plan?.minuteLimit}</td>
      <td>{plan?.dataLimit === -1 ? 'Unlimited' : plan?.dataLimit}</td>
      <td>
        <Link to={editLink} state={{
          state: { superplan } // Pass the superplan object as state
        } as any} className='btn btn-info'>Edit</Link>
      </td>
      <td>
        <button onClick={() => {
          removeUserPlan(currentuser, superplan.associatedUserPlanID);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }} className="btn btn-danger">Remove Plan</button>
      </td>
    </>
  );
}

export const PhonePlanCardExpanded: React.FC<ExpandedPhonePlanCardProps> = ({ superplan }) => {
  const plan = superplan.planObj
  return (
    <div className="col-8">

      <div className="card">
        <div className="card-header">
          <div className="row">
            <h5 className="col-5">{plan?.planName}</h5>
            <h5 className="col-4 offset-3">${plan?.price}/Month</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="row justify-content-start">
            <strong className='col-4 offset-0'>
              <h5>Description</h5>
            </strong>
          </div>
          <div className="row justify-content-start">
            <p className="col-12 offset-0">{plan?.planDescription}</p>
          </div>
    <br />
          <div className="row">
            <h5 className='col-3'>{plan?.dataLimit === -1 ? 'Unlimited' : plan?.dataLimit} Data</h5>
            <h5 className='col-3'>{plan?.textLimit === -1 ? 'Unlimited' : plan?.textLimit} Texts</h5>
            <h5 className='col-3'>{plan?.minuteLimit === -1 ? 'Unlimited' : plan?.minuteLimit} Minutes</h5>
            <h5 className='col-3'>Up to {plan?.deviceLimit} Devices</h5>
          </div>
        </div>

      </div>
    </div>
  );
}

