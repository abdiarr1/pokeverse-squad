import React from 'react';

const Error = () => {
  return (
    <div className="p-10">
      <div
        class="bg-red-100 border-l-4 border-red-500 text-orange-700 p-4"
        role="alert"
      >
        <p class="font-bold">Error</p>
        <p>Sorry, there was an error...</p>
      </div>
    </div>
  );
};

export default Error;
