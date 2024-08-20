import React from 'react';
import './CustomButtons.css';

const CustomButtons = () => {
    return (
        <div className="container-fluid custom-button-container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button className="btn custom-btn">Personal Details</button>
                </div>
                <div className="col-auto">
                    <button className="btn custom-btn">Education</button>
                </div>
                <div className="col-auto">
                    <button className="btn custom-btn">Work & Skills</button>
                </div>
                <div className="col-auto">
                    <button className="btn custom-btn">Certifications</button>
                </div>
                <div className="col-auto">
                    <button className="btn custom-btn">Event Activities</button>
                </div>
                <div className="col-auto">
                    <button className="btn custom-btn">Build Resume</button>
                </div>
            </div>
        </div>
    );
};

export default CustomButtons;


      .custom-button-container {
    padding: 20px;
    background-color: #123524; /* Adjust this according to your design */
}

.custom-btn {
    border-radius: 20px;
    padding: 10px 20px;
    margin: 5px;
    border: 2px solid #00ffcc; /* Border color to match UI */
    background-color: transparent;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
}

.custom-btn:hover {
    background-color: #00ffcc; /* Hover background color */
    color: #ffffff;
}

@media (max-width: 768px) {
    .custom-btn {
        font-size: 0.9rem;
        padding: 8px 16px;
    }
}
