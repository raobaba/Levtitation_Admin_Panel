import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Actions/authActions'; // Update the import path

interface RegistrationForm {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<RegistrationForm>({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    // Dispatch the register action with the form data
    dispatch(register(formData.name, formData.email, formData.password));
  };

  return (
    <div className="bg-gray-100 min-h-fit flex items-center justify-center">
      <div className="bg-white mt-6 p-8 rounded shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Registration</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              id="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              id="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none"
              id="password"
            />
          </div>
          <button
            type="button"
            onClick={handleRegistration}
            className="w-full bg-blue-500 text-white rounded py-2 hover-bg-blue-700"
          >
            Register
          </button>
          <p>Already have an Account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
