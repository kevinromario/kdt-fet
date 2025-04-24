import { headers } from 'next/headers';

/* eslint-disable @next/next/no-html-link-for-pages */
export const Header = async () => {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';
  const isHome = pathname === '/';

  return (
    <nav className={isHome ? '' : 'nav-fixed'}>
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
  );
};
