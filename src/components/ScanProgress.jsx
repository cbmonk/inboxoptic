import { useEffect, useState } from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';

export default function ScanProgress() {
  const { isScanning } = useSubscriptions();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isScanning]);

  if (!isScanning) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h3 className="text-lg font-semibold mb-4">Scanning your inbox...</h3>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div 
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-sm text-gray-600">
          Finding your email subscriptions...
        </p>
      </div>
    </div>
  );
} 