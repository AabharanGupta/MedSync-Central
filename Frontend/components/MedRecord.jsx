import React, { useState } from 'react';
import axios from 'axios';

const MedicalReportForm = () => {
    const [username, setUsername] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [temperature, setTemperature] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reportData = {
            username,
            weight: parseFloat(weight),
            height: parseFloat(height),
            bloodPressure,
            temperature: parseFloat(temperature),
            diagnosis,
            feedback
        };

        try {
            const response = await axios.post('http://localhost:7001/medical/feedback', reportData);
            setSuccessMessage('Medical report created successfully!');
            setError('');
            // Clear the form fields after successful submission
            setUsername('');
            setWeight('');
            setHeight('');
            setBloodPressure('');
            setTemperature('');
            setDiagnosis('');
            setFeedback('');
        } catch (err) {
            setError('Failed to create medical report. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Create Medical Report</h2>

            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <form onSubmit={handleSubmit} className="medical-report-form">
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="weight">Weight (kg)</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="height">Height (cm)</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="bloodPressure">Blood Pressure</label>
                    <input
                        type="text"
                        id="bloodPressure"
                        value={bloodPressure}
                        onChange={(e) => setBloodPressure(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="temperature">Temperature (°C)</label>
                    <input
                        type="number"
                        id="temperature"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="diagnosis">Diagnosis</label>
                    <input
                        type="text"
                        id="diagnosis"
                        value={diagnosis}
                        onChange={(e) => setDiagnosis(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="feedback">Feedback (Optional)</label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                </div>

                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default MedicalReportForm;
