// Step1.tsx
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Step1: React.FC<{ formData: any, setFormData: any }> = ({ formData, setFormData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      step1Data: {
        ...formData.step1Data,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <h2>Step 1: Basic Details</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.step1Data.name || ''} onChange={handleInputChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.step1Data.email || ''} onChange={handleInputChange} />
      </div>
      {/* Add more input fields for Step 1 as needed */}
    </div>
  );
};

export default Step1;
