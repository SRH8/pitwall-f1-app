import React from 'react';
import './Error.css';

const Error: React.FC = () => {
  return (
    <div className='error'>
        <div className='error-message'>
          Oops! Something went wrong while loading the data
        </div>
    </div>
  );
}

export default Error;
