import React from 'react';
import { useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import './fromData.css';


const DataToDisplay = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <div className="no-data">No data to display</div>;
  }

  return (
    <div className="data-container">
      <h1 className="title">Submitted Details</h1>
      <p className="data-field"><strong>First Name:</strong> {formData.firstName}</p>
      <p className="data-field"><strong>Last Name:</strong> {formData.lastName}</p>
      <p className="data-field"><strong>Username:</strong> {formData.username}</p>
      <p className="data-field"><strong>Email:</strong> {formData.email}</p>
      <p className="data-field"><strong>Phone No.:</strong> {formData.phoneNo}</p>
      <p className="data-field"><strong>Country:</strong> {formData.country}</p>
      <p className="data-field"><strong>City:</strong> {formData.city}</p>
      <p className="data-field"><strong>PAN No.:</strong> {formData.panNo}</p>
      <p className="data-field"><strong>Aadhar No.:</strong> {formData.aadharNo}</p>
    </div>
  );
};

export default DataToDisplay;
