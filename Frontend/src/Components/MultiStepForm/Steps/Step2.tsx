// Step2.tsx
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Step2: React.FC<{ formData: any, setFormData: any }> = ({ formData, setFormData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      step2Data: {
        ...formData.step2Data,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <h2>Step 2: Multi-File Upload</h2>
      <div>
        <label>File Upload:</label>
        <input type="file" name="file" multiple onChange={handleInputChange} />
      </div>
      {/* Add more input fields for Step 2 as needed */}
    </div>
  );
};

export default Step2;
