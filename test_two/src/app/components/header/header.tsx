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
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          ☰
        </label>
        <div className="nav-links">
          <a href="/about">ABOUT</a>
          <a href="/pricing">PRICING</a>
          <a href="/contact">CONTACT</a>
          <a href="/login" className="login-btn">
            LOGIN
          </a>
        </div>
      </div>
    </nav>
  );
};
