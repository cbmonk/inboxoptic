export default function ScanButton({ scanInbox, isScanning }) {
  return (
    <button
      onClick={scanInbox}
      disabled={isScanning}
      className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-md
                 disabled:bg-gray-100 disabled:text-gray-400 transition-all duration-200
                 flex items-center gap-3 text-lg shadow-md hover:shadow-lg"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6428 12.2409C21.6428 11.5161 21.5809 10.8177 21.4665 10.1455H12V14.0682H17.3996C17.1707 15.3391 16.4691 16.4091 15.3891 17.1545V19.6932H18.6182C20.3809 17.9455 21.6428 15.3391 21.6428 12.2409Z" fill="#4285F4"/>
        <path d="M12 22C14.7 22 16.9636 21.1046 18.6182 19.6932L15.3891 17.1545C14.4927 17.7545 13.3455 18.1273 12 18.1273C9.39545 18.1273 7.19091 16.4091 6.40364 14.1H3.0709V16.7159C4.71545 19.8591 8.09091 22 12 22Z" fill="#34A853"/>
        <path d="M6.40364 14.1C6.20454 13.5 6.09091 12.8591 6.09091 12.2C6.09091 11.5409 6.20454 10.9 6.40364 10.3V7.68409H3.0709C2.38636 9.03636 2 10.5682 2 12.2C2 13.8318 2.38636 15.3636 3.0709 16.7159L6.40364 14.1Z" fill="#FBBC05"/>
        <path d="M12 6.27273C13.4018 6.27273 14.6636 6.74545 15.6636 7.70455L18.5455 4.82273C16.9591 3.34545 14.6955 2.4 12 2.4C8.09091 2.4 4.71545 4.54091 3.0709 7.68409L6.40364 10.3C7.19091 8.00909 9.39545 6.27273 12 6.27273Z" fill="#EA4335"/>
      </svg>
      {isScanning ? 'Scanning...' : 'Scan Gmail'}
    </button>
  );
} 