// src/pages/HomePage.tsx

import React, { useState, useEffect } from 'react';
import { getUserPlans, getUserPlanDevices,addUserPlan , getAllPlans } from '../api';
import { PhonePlanCard } from '../components/plancard';
import DeviceCard from '../components/devicecard';
import { PhonePlan, Device } from '../types';


const HomePage: React.FC = () => {
    const [plans, setPlans] = useState<PhonePlan[]>([]);
    const [selectedplanId, setSelectedplanId] = useState<string | null>(null);
    const [devicesByPlan, setDevicesByPlan] = useState<{ [planId: string]: Device[] }>({});
    const [allPlans, setAllPlans] = useState<PhonePlan[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch plans for the current user
            const fetchedPlans = await getUserPlans("current user");
            setPlans(fetchedPlans);

            // Fetch devices for each plan
            const devicesMap: { [planId: string]: Device[] } = {};
            await Promise.all(
                fetchedPlans.map(async (plan: { planId: string; }) => {
                    const devices = await getUserPlanDevices(plan.planId, "");
                    devicesMap[plan.planId] = devices;
                })
            );
            setDevicesByPlan(devicesMap);

           // Fetch all plans for dropdown
            const allPlansData = await getAllPlans();
            setAllPlans(allPlansData);            
        };

        fetchData();
    }, []);

    const togglePlan = async (planId: string) => {
        // If the plan is already selected, deselect it
        if (selectedplanId === planId) {
            setSelectedplanId(null);
            setDevicesByPlan({});
            return;
        }

        // Fetch devices for the selected plan
        const devices = await getUserPlanDevices(planId, "currentuser");
        setDevicesByPlan((prevDevicesByPlan) => ({ ...prevDevicesByPlan, [planId]: devices }));
        setSelectedplanId(planId);
    };

    if (!plans) {
        return <div>Loading...</div>
    }

    const handleAddPlan = async (planId: string) => {
        // Assign the selected plan to the current user
        let currentUser: string = "TODO FILL GET CURRENT USER"
        await addUserPlan(currentUser, planId);
    };
    return (
        <div className="home-page container">
            <h2>Phone Plans</h2>
            <table className='table table-responive table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Plan Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Device Limit</th>
                        <th>Text Limit</th>
                        <th>Minute Limit</th>
                        <th>Data Limit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {plans.map((plan) => (
                        <>
                            <tr onClick={() => togglePlan(plan.planId)} >
                                <PhonePlanCard plan={plan} onClick={() => togglePlan(plan.planId)} key={plan.planId} />
                            </tr>

                            {selectedplanId === plan.planId && (
                                <>
                                    <tr className='table-sm'>
                                        <th></th><th></th><th></th>
                                        <th colSpan={1}>
                                            <h3>Devices</h3>
                                        </th>
                                        <th></th><th></th><th></th>
                                    </tr>
                                    <tr className='table-sm'>
                                        <th></th>
                                        <th></th>
                                        <th>Manufactorer</th>
                                        <th>Model</th>
                                        <th>Phone Number</th>
                                        <th>IMEI</th>
                                        <th></th>
                                        <th></th>
                                    </tr>

                                    {devicesByPlan[plan.planId]?.map((device) => (
                                        <tr className='table-sm'>
                                            <DeviceCard key={device.id} device={device} />
                                        </tr>
                                    ))}
                                </>
                            )}
                        </>
                    ))}

                </tbody>
            </table>
            <div className="row justify-content-end">
                <div className="col-3">
                    <div className='dropdown'>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {allPlans.map((plan) => (
                                <button className="dropdown-item" onClick={() => { handleAddPlan(plan.planId) }} key={plan.planId} value={plan.planId}> {plan.planName}</button>
                            ))}
                        </div>
                        <button className='btn btn-dark btn-lg text-right' type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Add Plan</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;
