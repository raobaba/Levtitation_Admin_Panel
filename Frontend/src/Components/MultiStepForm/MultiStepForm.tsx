// MultiStepForm.tsx
import React, { useState, useEffect } from 'react';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
  });

  const steps = [Step1, Step2, Step3];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCancel = () => {
    setCurrentStep(1);
    setFormData({
      step1Data: {},
      step2Data: {},
      step3Data: {},
    });
  };

  const handleSubmit = () => {

  };

  useEffect(() => {
    if (currentStep > 3) {
        
      handleSubmit();
    }
  }, [currentStep]);

  const StepComponent = steps[currentStep - 1];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Multi-Step Form</h1>
        <StepComponent
          formData={formData}
          setFormData={setFormData}
        />
        <div className="mt-4">
          {currentStep > 1 && (
            <button
              className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button
              className="bg-blue-500 text-white rounded py-2 px-4 ml-2 hover:bg-blue-700"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-green-500 text-white rounded py-2 px-4 ml-2 hover:bg-green-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
          <button
            className="bg-gray-500 text-white rounded py-2 px-4 ml-2 hover:bg-gray-700"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
