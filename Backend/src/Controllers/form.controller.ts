import { Request, Response } from 'express';
import FormSubmission from '../Models/form.models';

// Create a new form submission and return the saved submission
export const createFormSubmission = async (req: Request, res: Response): Promise<void> => {
  try {
    const formData = req.body; // Assuming you've used body-parser middleware
    const formSubmission = new FormSubmission(formData);
    await formSubmission.save();

    res.status(201).json({
      message: 'Form submission saved successfully',
      submission: formSubmission,
    });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: 'Error saving form submission', details: err.message });
  }
};

// Capture geolocation data
export const Geolocation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { latitude, longitude, status } = req.body; // Assuming you've used body-parser middleware
    const geolocationData = new FormSubmission({ latitude, longitude, status });

    res.status(201).json({
      message: 'Geolocation data captured successfully',
      submission: geolocationData, // Send the same data in the response
    });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: 'Error saving geolocation data', details: err.message });
  }
};

