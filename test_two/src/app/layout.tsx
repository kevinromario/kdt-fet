/* eslint-disable @next/next/no-html-link-for-pages */
import './styles/globals.scss';

export const metadata = {
  title: 'ERP Solution',
  description: 'Track your inventory and transactions with ease.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="nav-left">
            <a href="/">
              <div className="logo" />
              HOME
            </a>
          </div>
          <div className="nav-right">
            <a href="/about">ABOUT</a>
            <a href="/pricing">PRICING</a>
            <a href="/contact">CONTACT</a>
            <a href="/login" className="login-btn">
              LOGIN
            </a>
          </div>
        </nav>
        {children}
      </body>
      <div className="blob-top-left">
        <svg
          viewBox="0 0 600 400"
          xmlns="http://www.w3.org/2000/svg"
          className="blob-bg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#BAE6FF' }} />
              <stop offset="100%" style={{ stopColor: '#0fbbfb' }} />
            </linearGradient>
          </defs>
          <path
            d="M428,313.5Q371,387,280,357.5Q189,328,122,264Q55,200,113,130Q171,60,276,64Q381,68,436,134Q491,200,428,313.5Z"
            fill="url(#grad1)"
          />
        </svg>
      </div>
      <div className="blob-bottom-right">
        <svg viewBox="0 0 200 200">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#2196f3' }} />
              <stop offset="100%" style={{ stopColor: '#9c27b0' }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad2)"
            d="M36,-60.7C40.8,-59.6,34.8,-38.1,34.8,-24.6C34.7,-11.1,40.5,-5.6,42.3,1C44,7.6,41.8,15.2,40,25.5C38.3,35.9,37,49,30.5,48.2C23.9,47.5,11.9,33,-0.4,33.7C-12.8,34.5,-25.7,50.6,-33.2,51.8C-40.7,53.1,-42.9,39.6,-51.4,28.5C-59.9,17.3,-74.6,8.7,-72.7,1.1C-70.7,-6.4,-52.1,-12.9,-41.7,-20.7C-31.3,-28.5,-29.1,-37.6,-23.6,-38.3C-18,-39,-9,-31.1,3.3,-36.8C15.6,-42.5,31.2,-61.8,36,-60.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </html>
  );
}
