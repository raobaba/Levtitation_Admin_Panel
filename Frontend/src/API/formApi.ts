import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/form', // Adjust the API base URL
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const submitForm = (formData: any) => {
  return api.post('/submit', formData);
};

export const getSubmissions = () => {
  return api.get('/submissions');
};
