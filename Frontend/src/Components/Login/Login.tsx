import React, { useState } from 'react';
import axios from 'axios';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    // Perform client-side validation
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/authentication/login', formData);

      if (response.status === 200) {
        // Authentication successful, you can redirect the user here
        // You may use React Router for navigation
        alert('Login successful');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred while trying to log in:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-fit flex items-center justify-center">
      <div className="bg-white mt-24 mb-4 p-8 rounded shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form>
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
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-700"
          >
            Login
          </button>
          <p>Don't have an account Register</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
