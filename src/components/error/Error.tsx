import React from 'react';
import '../common/styles/Styles.css';

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
