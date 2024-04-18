// PhonePlanCard.tsx

import React, { useState, useEffect }from 'react';
import { PhonePlan, Superplan, UserPlan } from '../types';
import { Link } from 'react-router-dom';
import { getUserPlans, getUserPlansAsUserPlans, removeDevice, removeUserPlan } from '../api';




interface PhonePlanCardProps {
  superplan: Superplan;
  onClick: () => void;
}

export const PhonePlanCard: React.FC<PhonePlanCardProps> = ({ superplan, onClick }) => {
  const plan = superplan.planObj
  const currentuser = sessionStorage.getItem('userId')
  const [fetchedUserPlans, setUserPlans] = useState<UserPlan[]>([]);
  const [index, setIndex] = useState<number | null>(null);
  const [matchingPlan, setMatchingPlan] = useState<UserPlan | null>(null);

  useEffect(() => {
    const fetchUserPlans = async () => {
      try {
        const plans = await getUserPlansAsUserPlans(currentuser);
        setUserPlans(plans);

        const index = plans.findIndex(currPlan => currPlan.userPlanId === superplan.associatedUserPlanID);        
        setIndex(index);

        if (index != -1) {
          setMatchingPlan(plans[index]);
        } else {
          console.log("associated: " + superplan.associatedUserPlanID);
          plans.forEach((element) => console.log(element));
        }
      } catch (error) {
        console.error('Error fetching user plans:', error);
      }
    };

    fetchUserPlans();
  }, [superplan.associatedUserPlanID]);

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
      <td>{String(matchingPlan?.startDate).split('T')[0]}</td>
      <td>{String(matchingPlan?.endDate).split('T')[0]}</td>
      <td>
        <Link to={editLink} state={{
          pathname: editLink,
          state: { superplan } // Pass the superplan object as state
        }as any} className='btn btn-info' style={{marginBottom: '5px'}}>Edit</Link>
        <button onClick={() => {
              removeUserPlan(currentuser, superplan.associatedUserPlanID);
              setTimeout(() => {
                window.location.reload();
              }, 500);
        }} className="btn btn-danger" style={{marginTop: '5px'}}>Remove Plan</button>
      </td>
    </>
  );
}

export const PhonePlanCardExpanded: React.FC<PhonePlanCardProps> = ({ superplan, onClick }) => {
  const plan = superplan.planObj
  const currentuser = sessionStorage.getItem('userId')
  const [fetchedUserPlans, setUserPlans] = useState<UserPlan[]>([]);
  const [index, setIndex] = useState<number | null>(null);
  const [matchingPlan, setMatchingPlan] = useState<UserPlan | null>(null);

  useEffect(() => {
    const fetchUserPlans = async () => {
      try {
        const plans = await getUserPlansAsUserPlans(currentuser);
        setUserPlans(plans);

        const index = plans.findIndex(currPlan => currPlan.userPlanId === superplan.associatedUserPlanID);        
        setIndex(index);

        if (index != -1) {
          setMatchingPlan(plans[index]);
        } else {
          console.log("associated: " + superplan.associatedUserPlanID);
          plans.forEach((element) => console.log(element));
        }
      } catch (error) {
        console.error('Error fetching user plans:', error);
      }
    };

    fetchUserPlans();
  }, [superplan.associatedUserPlanID]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{plan?.planName}</h5>
        <p className="card-text">Price: ${plan?.price}</p>
        <p className="card-text">{plan?.planDescription}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Device Limit: {plan?.deviceLimit}</li>
          <li className="list-group-item">Text Limit: {plan?.textLimit === -1 ? 'Unlimited' : plan?.textLimit}</li>
          <li className="list-group-item">Minute Limit: {plan?.minuteLimit === -1 ? 'Unlimited' : plan?.minuteLimit}</li>
          <li className="list-group-item">Data Limit: {plan?.dataLimit === -1 ? 'Unlimited' : plan?.dataLimit}</li>
          <li className="list-group-item">Start Date: {String(matchingPlan?.startDate).split('T')[0]}</li>
          <li className="list-group-item">End Date: {String(matchingPlan?.endDate).split('T')[0]}</li>
        </ul>
      </div>
    </div>
  );
}

