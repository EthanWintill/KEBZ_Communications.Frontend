// PhonePlanCard.tsx

import React, { useState, useEffect }from 'react';
import { PhonePlan, Superplan, UserPlan } from '../types';
import { Link } from 'react-router-dom';
import { getUserPlans, getUserPlansAsUserPlans, removeDevice, removeUserPlan } from '../api';


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
  const [fetchedUserPlans, setUserPlans] = useState<UserPlan[]>([]);
  const [index, setIndex] = useState<number | null>(null);
  const [matchingPlan, setMatchingPlan] = useState<UserPlan | null>(null);

  useEffect(() => {
    const fetchUserPlans = async () => {
      try {
        const plans = await getUserPlansAsUserPlans();
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
          state: { superplan } // Pass the superplan object as state
        }as any} className='btn btn-info' style={{marginBottom: '5px'}}>Edit</Link>
        <button onClick={() => {
              removeUserPlan(superplan.associatedUserPlanID);
              setTimeout(() => {
                window.location.reload();
              }, 500);
        }} className="btn btn-danger" style={{marginTop: '5px'}}>Remove Plan</button>
      </td>
    </>
  );
}

export const PhonePlanCardExpanded: React.FC<ExpandedPhonePlanCardProps> = ({ superplan }) => {
  const plan = superplan.planObj
  const currentuser = sessionStorage.getItem('userId')
  const [fetchedUserPlans, setUserPlans] = useState<UserPlan[]>([]);
  const [index, setIndex] = useState<number | null>(null);
  const [matchingPlan, setMatchingPlan] = useState<UserPlan | null>(null);

  useEffect(() => {
    const fetchUserPlans = async () => {
      try {
        const plans = await getUserPlansAsUserPlans();
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

