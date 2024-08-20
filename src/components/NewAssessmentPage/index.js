import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './index.css'; 

const NewAssessmentPage = () => {
    const [setName, setSetName] = useState('');
    const [domain, setDomain] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/createassessment");
       
    };

    return (
        <div className="new-assessment-page">
            <h1 className="heading1">Product IT Assessment</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='set-container'>
                <div className="form-group">
                    <label htmlFor="setname">Set Name:</label>
                    <input
                        type="text"
                        id="setname"
                        value={setName}
                        onChange={(e) => setSetName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="domain">Domain:</label>
                    <input
                        type="text"
                        id="domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        required
                    />
                </div>
                </div>
                <div className='button-container'><button type="submit" className="submit-btn">Enter</button></div>
                
            </form>
        </div>
    );
};

export default NewAssessmentPage;
