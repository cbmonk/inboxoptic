import React from 'react';
import { useSubscriptions } from '../context/SubscriptionContext';

export default function SubscriptionList({ subscriptions }) {
  const { unsubscribe } = useSubscriptions();

  if (!subscriptions || subscriptions.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mt-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Your Subscriptions</h2>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {subscriptions.length} Found
        </span>
      </div>
      <div className="grid gap-4 mb-20">
        {subscriptions.map((subscription, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow p-6 flex items-center justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-800">{subscription.sender}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  subscription.isUnsubscribed 
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800'
                }`}>
                  {subscription.isUnsubscribed ? 'inactive' : 'active'}
                </span>
              </div>
              <p className="text-sm text-gray-500">{subscription.email}</p>
              <div className="flex gap-8 text-sm text-gray-600">
                <span>Frequency: {subscription.frequency}</span>
                <span>Last email: {subscription.lastEmail}</span>
              </div>
            </div>
            {!subscription.isUnsubscribed && (
              <button 
                onClick={() => unsubscribe(subscription.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                Unsubscribe
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 