
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="bg-black text-white rounded-full p-2 flex items-center justify-center w-10 h-10 relative">
        <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center">
          <div className="relative w-6 h-6">
            <div className="absolute left-0 top-0 w-4 h-1.5 border border-white" />
            <div className="absolute right-0 bottom-1 w-3 h-3 border border-white transform rotate-12" style={{ borderRadius: '1px' }} />
            <div className="absolute left-0.5 top-2 w-1.5 h-4 border border-white transform -rotate-12" />
          </div>
        </div>
      </div>
      <span className="text-xl font-bold tracking-tight">Homie Services</span>
    </Link>
  );
};

export default Logo;
