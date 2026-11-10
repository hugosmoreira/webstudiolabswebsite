import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function PageShell({ children }) {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
