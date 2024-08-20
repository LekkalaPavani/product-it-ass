import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css'; 

const CreateAssessment = () => {
    const [assessments, setAssessments] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get('/assessments')
            .then(response => {
                console.log(response);
                setAssessments(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    // const handleStatusButtonClick = (status) => {
    //     alert(`Status button clicked for: ${status}`);
    // };

    const handleNewAssessmentClick = () => {
        navigate('/newassessment');
    };

    return (
        <div className="assessment-container">
            <h1 className='heading1'>Product IT Assessment</h1>
            <hr/> 
            
            <table>
                <thead>
                    <tr>
                        <th>SRL No</th>
                        <th>Set Name</th>
                        <th>Created By</th>
                        <th>Domain</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {assessments.map((assessment, index) => (
                        <tr key={assessment.id}>
                            <td>{index + 1}</td>
                            <td>{assessment.setname}</td>
                            <td>{assessment.createdby}</td>
                            <td>{assessment.domain}</td>
                            <td>
                                <button 
                                    className="status-btn" 
                                    
                                >
                                    {assessment.status}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='a-container'>
            <button className="new-assessment-btn"
            onClick={handleNewAssessmentClick}>New Assessment +</button>
            </div>
           
        </div>
    );
};

export default CreateAssessment;
