// IncrementingNumber.js
import React, { useState, useEffect } from 'react';

const IncrementingNumber = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 84 ? prevCount + 1 : 84));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-4xl sm:text-2xl font-bold text-gray-100 whitespace-nowrap "> {count}%</h2>
    </div>
  );
};

export default IncrementingNumber;
