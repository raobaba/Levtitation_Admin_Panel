import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <nav className="bg-blue-500 p-4 flex items-center justify-between">
        <div className="text-white text-xl font-bold">Levitation</div>
        <div className="flex space-x-4">
          <Link to="/login" className="text-white">
            Login
          </Link>
          <Link to="/register" className="text-white">
            Register
          </Link>
        </div>
      </nav>
      <div className="container mx-auto mt-8">
        {/* Your main content goes here */}
        <h1 className="text-2xl font-semibold">Welcome to Levitation</h1>
        <p className="text-gray-700 mt-4">
          This is the homepage content of your website.
        </p>
      </div>
    </div>
  );
};

export default Home;
