import mongoose, { Document, Schema } from 'mongoose';

// Define the FormSubmission schema
interface IFormSubmission extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  files: string[];
  geolocation: {
    latitude: number;
    longitude: number;
    status: boolean
  };
  options: {
    option1: boolean;
    option2: boolean;
    option3:boolean;
  };
  timestamp: Date;
}

const formSubmissionSchema = new Schema<IFormSubmission>({
  name: String,
  email: String,
  phone: String,
  address: String,
  files: [String],  // Assuming file paths, you can use GridFS for file storage
  geolocation: {
    latitude: Number,
    longitude: Number,
    status: Boolean
  },
  options: {
    option1: Boolean,
    option2: Boolean,
    option3: Boolean
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create a model using the schema
const FormSubmission = mongoose.model<IFormSubmission>('FormSubmission', formSubmissionSchema);

export default FormSubmission;
