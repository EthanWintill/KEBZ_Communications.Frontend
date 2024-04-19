import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPlans } from '../api';
import { PhonePlan } from '../types';

const PlanGallery: React.FC = () => {
    const [plans, setPlans] = useState<PhonePlan[]>([]);
    const [activeTab, setActiveTab] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const fetchedPlans = await getAllPlans();
                setPlans(fetchedPlans);
            } catch (error) {
                console.error('Failed to fetch plans:', error);
            }
        };

        fetchPlans();
    }, []);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const handleGetStarted = () => {
        const token = localStorage.getItem('token');
        token ? navigate('/home') : navigate('/register');
    };

    const formatLimit = (limit: number) => limit === -1 ? 'Unlimited' : `${limit}`;

    return (
        <div className="container-fluid px-5" style={{ height: '90vh',  maxWidth: '100vw' }}>
            <h2>Discover Our Premier Plans.</h2>
            <ul className="nav nav-tabs justify-content-center" style={{ marginBottom: '20px' }}>
                {plans.map((plan, index) => (
                    <li className="nav-item" key={plan.planId}>
                        <a className={`nav-link ${index === activeTab ? 'active' : ''}`}
                           onClick={() => handleTabClick(index)}
                            style={{ cursor: 'pointer' }}>
                            {plan.planName}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="tab-content" style={{ padding: '20px', height: '80vh' }}>
                {plans.length > 0 && (
                    <div className="card mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                        <div style={{ flex: '0 0 50%', display: 'flex', justifyContent: 'center', paddingLeft: '20px' }}>
                            <img src={`/publicassets/plans/${plans[activeTab].planId}.jpg`} className="img-fluid" style={{ maxHeight: '80%' }} alt="Plan" />
                        </div>
                        <div className="card-body" style={{ flex: '1' }}>
                            <h5 className="card-title" style={{ fontSize: '2rem' }}>{plans[activeTab].planName}</h5>
                            <p className="card-text" style={{ fontSize: '1.2rem' }}>{plans[activeTab].planDescription}</p>
                            <ul className="list-unstyled">
                                <li style={{ fontSize: '1.1rem' }}>Price: ${plans[activeTab].price}</li>
                                <li style={{ fontSize: '1.1rem' }}>Data Limit: {formatLimit(plans[activeTab].dataLimit)}</li>
                                <li style={{ fontSize: '1.1rem' }}>Text Limit: {formatLimit(plans[activeTab].textLimit)}</li>
                            </ul>
                            <button onClick={handleGetStarted} className="btn btn-primary mt-3">Get Started</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlanGallery;
