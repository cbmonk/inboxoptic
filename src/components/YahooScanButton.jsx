import React, { useState } from 'react';

export default function YahooScanButton() {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0); // Add state for progress

  const handleClick = async () => {
    if (isScanning) return; // Prevent multiple clicks
    setIsScanning(true);
    setProgress(0); // Reset progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10; // Increment progress
      });
    }, 500); // Adjust interval for scanning progress

    console.log('Yahoo button clicked!'); // Dummy action
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
    clearInterval(interval); // Clear interval after scanning
    setIsScanning(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isScanning} // Disable button while scanning
      className={`bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-md
                  disabled:bg-gray-100 disabled:text-gray-400 transition-all duration-200
                  flex justify-center items-center gap-3 text-lg shadow-md hover:shadow-lg ${isScanning ? 'opacity-50' : ''} 
                  mb-4 w-48 h-12 relative`}
    >
      <img src="/assets/yahoo-logo.svg" alt="Yahoo Logo" className="w-6 h-6" />
      {isScanning ? 'Scanning...' : 'Yahoo'}
      {isScanning && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" style={{ width: `${progress}%` }}></div>
      )}
    </button>
  );
} 