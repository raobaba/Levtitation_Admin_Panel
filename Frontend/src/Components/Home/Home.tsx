import React from 'react';
import { Link } from 'react-router-dom';
import Routing from '../Route/Routing';

const Home: React.FC = () => {
  return (
    <div className=' container mx-auto w-full border-pink-900'>
      <nav className="bg-blue-500 p-4 flex justify-between w-full">
        <div className="text-white text-xl font-bold">Levitation</div>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block ml-2 " >
            {/* Display on larger screens */}
            <Link to="/login" className="text-white">
              Login
            </Link>
            <Link to="/register" className="text-white ml-5 ">
              Register
            </Link>
          </div>
          <div className="block sm:hidden">
            {/* Display on smaller screens */}
            <button
              className="text-white p-2"
              onClick={() => alert('Open the menu here')}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
      <div className="container w-full">
        {/* Your main content goes here */}
        <h1 className="text-2xl font-semibold">Welcome to Levitation</h1>
        <p className="text-gray-700 ">
          <Routing />
        </p>
      </div>
    </div>
  );
};

export default Home;

