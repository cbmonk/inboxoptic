import React, { useState } from 'react';

export default function ProtonMailScanButton() {
  const [isScanning, setIsScanning] = useState(false);

  const handleClick = async () => {
    setIsScanning(true);
    console.log('ProtonMail button clicked!'); // Dummy action
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
                  mb-4 w-48 h-12`}
    >
      <img src="/assets/proton-logo.svg" alt="ProtonMail Logo" className="w-6 h-6" />
      {isScanning ? 'Scanning...' : 'Proton'}
    </button>
  );
} 