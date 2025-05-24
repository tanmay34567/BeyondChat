
import { 
  Route, 
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InboxPage from './pages/InboxPage';
import FinAIAgentPage from './pages/FinAIAgentPage';
import KnowledgePage from './pages/KnowledgePage';
import ReportsPage from './pages/ReportsPage';
import OutboundPage from './pages/OutboundPage';
import ContactsPage from './pages/ContactsPage';
import GetSetUpPage from './pages/GetSetUpPage';
import SearchPage from './pages/SearchPage';
import SettingsPage from './pages/SettingsPage';
import './index.css';

// Create router with future flags enabled
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/inbox" element={<InboxPage />} />
      <Route path="/fin-ai-agent" element={<FinAIAgentPage />} />
      <Route path="/knowledge" element={<KnowledgePage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/outbound" element={<OutboundPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/get-set-up" element={<GetSetUpPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </>
  ),
  {
    // Enable future flags for React Router v7 compatibility
    future: {
      // These are the supported future flags in v6.30.1
      v7_normalizeFormMethod: true
    }
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;