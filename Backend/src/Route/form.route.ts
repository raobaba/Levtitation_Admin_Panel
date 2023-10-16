import express from 'express';
import { createFormSubmission, Geolocation } from '../Controllers/form.controller';
const formRouter = express.Router();

// Define the route for form submission
formRouter.post('/submit', createFormSubmission);
formRouter.post('/geolocation', Geolocation);

export default formRouter;
