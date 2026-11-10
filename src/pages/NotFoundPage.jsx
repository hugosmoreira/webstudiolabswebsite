import Icon from '../ui/Icon.jsx';

export default function NotFoundPage() {
  return (
    <section className="doc-page nf-page grid-bg">
      <div className="wrap">
        <div className="nf">
          <span className="mono nf-code">404</span>
          <h1 className="h1" style={{ marginTop: 12 }}>
            Page not found.
          </h1>
          <p className="lead" style={{ marginTop: 14 }}>
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <div className="hero-btns" style={{ justifyContent: 'center' }}>
            <a href="/" className="btn btn-primary btn-lg">
              Go to the homepage
              <Icon name="arrowRight" size={17} />
            </a>
            <a href="/#contact" className="btn btn-ghost btn-lg">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
