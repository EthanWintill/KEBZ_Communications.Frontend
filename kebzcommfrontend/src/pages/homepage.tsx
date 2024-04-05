// src/pages/HomePage.tsx

import React, { useState, useEffect } from 'react';
import { getPlansFromUser, getDevicesFromPlan, assignPlanToUser, getAllPlans} from '../api';
import { PhonePlanCard } from '../components/plancard';
import DeviceCard from '../components/devicecard';
import { useNavigate } from "react-router-dom";
import { PhonePlan, Device } from '../types';


const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState<PhonePlan[]>([]);
    const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
    const [devicesByPlan, setDevicesByPlan] = useState<{ [planId: number]: Device[] }>({});
    const [allPlans, setAllPlans] = useState<PhonePlan[]>([]);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch plans for the current user
            const fetchedPlans = await getPlansFromUser();
            setPlans(fetchedPlans);

            // Fetch devices for each plan
            const devicesMap: { [planId: number]: Device[] } = {};
            await Promise.all(
                fetchedPlans.map(async (plan) => {
                    const devices = await getDevicesFromPlan(plan.id);
                    devicesMap[plan.id] = devices;
                })
            );
            setDevicesByPlan(devicesMap);

            // Fetch all plans for dropdown
            const allPlansData = await getAllPlans();
            setAllPlans(allPlansData);
        };

        fetchData();
    }, []);

    const togglePlan = async (planId: number) => {
        // If the plan is already selected, deselect it
        if (selectedPlanId === planId) {
            setSelectedPlanId(null);
            setDevicesByPlan({});
            return;
        }

        // Fetch devices for the selected plan
        const devices = await getDevicesFromPlan(planId);
        setDevicesByPlan((prevDevicesByPlan) => ({ ...prevDevicesByPlan, [planId]: devices }));
        setSelectedPlanId(planId);
    };

    const handleAddPlan = async (planId: number) => {
        // Assign the selected plan to the current user
        let currentUser: string = "TODO FILL GET CURRENT USER"
        await assignPlanToUser(currentUser, planId);
    };

    const handleEditPlan = (planId: number) => {
        navigate(`/editplan/${planId}`)
    }

    return (
        <div className="home-page">
            <h2>Phone Plans</h2>
            {plans.map((plan) => (
                <div key={plan.id} className='container'>
                    <PhonePlanCard plan={plan} onClick={() => togglePlan(plan.id)} />
                    <div className="grid">
                        {selectedPlanId === plan.id &&
                            devicesByPlan[plan.id]?.map((device) => (
                                <DeviceCard key={device.id} device={device} />
                            )) }
                    </div>
                    <button onClick={() => handleEditPlan(plan.id)}>Edit</button>
                </div>
            ))}
            <div>
                <button onClick={() => setShowDropdown(!showDropdown)}>Add Plan</button>
                {showDropdown && (
                    <select onChange={(e) => handleAddPlan(Number(e.target.value))}>
                        <option value="">Select a Plan</option>
                        {allPlans.map((plan) => (
                            <option key={plan.id} value={plan.id}>
                                {plan.name}
                            </option>
                        ))}
                    </select>
                )}
            </div>
        </div>
    );
};

export default HomePage;
