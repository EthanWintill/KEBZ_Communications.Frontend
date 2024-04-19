import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);  // Log the form data to the console
        alert("Thank you for your message. We will get back to you shortly.");
        setFormData({ name: '', email: '', message: '' });  // Reset the form fields
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Contact Us</h2>
                            <p className="card-text">Please use one of the following methods to reach out to us:</p>
                            <div className="card mb-3">
                                <div className="card-header bg-primary text-white">General Customer Care & Technical Support</div>
                                <div className="card-body">
                                    <p><strong>Call us:</strong> 1-800-KEBZ-001 or 1-800-KEBZ-002 (24/7)</p>
                                    <p><strong>Email:</strong> support@kebzcommunications.com</p>
                                    <p>For technical issues, please contact from a device not affected by the issues.</p>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header bg-primary text-white">KEBZ High Speed Internet Support</div>
                                <div className="card-body">
                                    <p><strong>Sales:</strong> 1-800-KEBZ-INT</p>
                                    <p><strong>Tech Support:</strong> 1-800-KEBZ-HELP</p>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header bg-primary text-white">International Callers</div>
                                <div className="card-body">
                                    <p>Call: +1-505-KEBZ-INT</p>
                                    <p>Calls from KEBZ handsets are free from roaming, airtime, or long distance charges.</p>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <div className="card-header bg-primary text-white">Contact us - TTY</div>
                                <div className="card-body">
                                    <p>TTY service is available for the Deaf, Hard of Hearing, or those with a Speech Disability.</p>
                                    <p>Dial: 711 to reach a Relay Agent.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
