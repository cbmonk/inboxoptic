export default function Header() {
  return (
    <>
      <div className="mb-16">
        <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100" fill="none">
          <rect x="30" y="30" width="40" height="40" rx="4" fill="#fff" stroke="#4F46E5" strokeWidth="2" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#4F46E5" strokeWidth="2" />
          <circle cx="10" cy="50" r="4" fill="#4ADE80" />
          <circle cx="90" cy="50" r="4" fill="#4ADE80" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-gray-800">InboxOptic</h1>
      <p className="text-gray-600 mb-12 text-center max-w-md">
        Declutter your inbox by managing your email subscriptions efficiently.
      </p>
    </>
  );
} 