import { headers } from 'next/headers';

export const BlopTop = async () => {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';
  const isHome = pathname === '/';
  return (
    <div className={isHome ? 'blob-top-left' : 'display-none'}>
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
  );
};
