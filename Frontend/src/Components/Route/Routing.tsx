// App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginRoute from '../Login/Login'; // Import LoginRoute component
import RegistrationRoute from '../Registration/Registration'; // Import RegistrationRoute component
import MultiStepFormRoute from '../MultiStepForm/MultiStepForm'; // Import MultiStepFormRoute component
import SubmissionTableRoute from '../SubmissionTable/SubmissionTable'; // Import SubmissionTableRoute component

function Routing() {
  return (
    <Routes>
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/registration" element={<RegistrationRoute />} />
      <Route path="/multiStepForm" element={<MultiStepFormRoute />} />
      <Route path="/submissionTable" element={<SubmissionTableRoute />} />
    </Routes>
  );
}

export default Routing;
