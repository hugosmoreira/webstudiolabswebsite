import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/theme.css';
import './styles/landing.css';
import PageShell from './ui/PageShell.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageShell>
      <PrivacyPage />
    </PageShell>
  </StrictMode>
);
