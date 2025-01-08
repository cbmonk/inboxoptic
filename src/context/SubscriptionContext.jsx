import { createContext, useState, useContext } from 'react';
import { subscriptions as dummyData } from '../data/dummyData';

const SubscriptionContext = createContext();

export function SubscriptionProvider({ children }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [isScanning, setIsScanning] = useState(false);

  const scanInbox = () => {
    setIsScanning(true);
    // Simulate API call with setTimeout
    setTimeout(() => {
      setSubscriptions(dummyData);
      setIsScanning(false);
    }, 2000);
  };

  const unsubscribe = (id) => {
    setSubscriptions(subscriptions.map(sub =>
      sub.id === id ? { ...sub, isUnsubscribed: true } : sub
    ));
  };

  return (
    <SubscriptionContext.Provider value={{
      subscriptions,
      isScanning,
      scanInbox,
      unsubscribe
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export const useSubscriptions = () => useContext(SubscriptionContext); 