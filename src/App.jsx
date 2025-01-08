import { SubscriptionProvider } from './context/SubscriptionContext';
import LandingPage from './components/LandingPage';
import ScanProgress from './components/ScanProgress';

export default function App() {
  return (
    <SubscriptionProvider>
      <LandingPage />
      <ScanProgress />
    </SubscriptionProvider>
  );
}
