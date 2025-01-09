import Header from './Header';
import GoogleScanButton from './GoogleScanButton';
import OutlookScanButton from './OutlookScanButton';
import YahooScanButton from './YahooScanButton';
import ProtonMailScanButton from './ProtonMailScanButton';
import Features from './Features';
import SubscriptionList from './SubscriptionList';
import { useSubscriptions } from '../context/SubscriptionContext';

export default function LandingPage() {
  const { scanInbox, isScanning, subscriptions } = useSubscriptions();

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-emerald-50 to-emerald-100 font-['Inter']">
      <div className="w-full min-h-screen px-4 flex flex-col items-center justify-start pt-16">
        <Header />
        <div className="mt-0 mb-12">
          <Features />
        </div>
        <GoogleScanButton scanInbox={scanInbox} isScanning={isScanning} />
        <OutlookScanButton scanInbox={scanInbox} isScanning={isScanning} />
        <YahooScanButton scanInbox={scanInbox} isScanning={isScanning} />
        <ProtonMailScanButton scanInbox={scanInbox} isScanning={isScanning} />
        <SubscriptionList subscriptions={subscriptions} />
      </div>
    </div>
  );
}
