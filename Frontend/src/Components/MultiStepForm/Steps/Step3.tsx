// Step3.tsx
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Step3: React.FC<{ formData: any, setFormData: any }> = ({ formData, setFormData }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options).filter((opt) => opt.selected).map((opt) => opt.value);
    setFormData({
      ...formData,
      step3Data: {
        ...formData.step3Data,
        [name]: selectedOptions,
      },
    });
  };

  return (
    <div>
      <h2>Step 3: Multi-Field Select Dropdown</h2>
      <div>
        <label>Select Options:</label>
        <select name="selectedOptions" multiple onChange={handleSelectChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      {/* Add more input fields for Step 3 as needed */}
    </div>
  );
};

export default Step3;
