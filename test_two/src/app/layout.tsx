import { BlopBottom } from './components/blob/blopBottom';
import { BlopTop } from './components/blob/blopTop';
import { Header } from './components/header/header';
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
        <Header />
        {children}
        <BlopTop />
        <BlopBottom />
      </body>
    </html>
  );
}
