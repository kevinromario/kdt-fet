/* eslint-disable @next/next/no-html-link-for-pages */

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">
        <div className="back-home">Back to Home</div>
      </a>
    </div>
  );
}
