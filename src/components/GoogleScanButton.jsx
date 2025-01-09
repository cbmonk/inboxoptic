import React, { useState } from 'react';

export default function GoogleScanButton() {
  const [isScanning, setIsScanning] = useState(false);

  const handleClick = async () => {
    setIsScanning(true);
    console.log('Google button clicked!'); // Dummy action
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
    setIsScanning(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isScanning}
      className={`bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-md
                  disabled:bg-gray-100 disabled:text-gray-400 transition-all duration-200
                  flex justify-center items-center gap-3 text-lg shadow-md hover:shadow-lg ${isScanning ? 'opacity-50' : ''} 
                  mb-4 w-48 h-12`} // Center logos and text
    >
      <img src="/assets/gmail-logo.svg" alt="Google Logo" className="w-6 h-6" />
      {isScanning ? 'Scanning...' : 'Gmail'}
    </button>
  );
} 