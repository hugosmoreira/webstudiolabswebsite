import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/theme.css';
import './styles/landing.css';
import PageShell from './ui/PageShell.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageShell>
      <NotFoundPage />
    </PageShell>
  </StrictMode>
);
