import Header from './Header';
import ScanButton from './ScanButton';
import Features from './Features';
import SubscriptionList from './SubscriptionList';
import { useSubscriptions } from '../context/SubscriptionContext';

export default function LandingPage() {
  const { scanInbox, isScanning, subscriptions } = useSubscriptions();

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-emerald-50 to-emerald-100 font-['Inter']">
      <div className="w-full min-h-screen px-4 flex flex-col items-center justify-start pt-20">
        <Header />
        <ScanButton scanInbox={scanInbox} isScanning={isScanning} />
        <Features />
        <SubscriptionList subscriptions={subscriptions} />
      </div>
    </div>
  );
}
