import { useSubscriptions } from '../context/SubscriptionContext';

export default function SubscriptionCard({ subscription }) {
  const { unsubscribe } = useSubscriptions();
  const { id, name, email, frequency, lastEmail, isUnsubscribed } = subscription;

  const displayStatus = isUnsubscribed ? 'inactive' : status;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${
          displayStatus === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {displayStatus}
        </span>
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <span>Frequency: {frequency}</span>
        <span>Last email: {new Date(lastEmail).toLocaleDateString()}</span>
      </div>

      {displayStatus === 'active' && (
        <button
          onClick={() => unsubscribe(id)}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded
                   transition-colors duration-200"
        >
          Unsubscribe
        </button>
      )}
    </div>
  );
} 