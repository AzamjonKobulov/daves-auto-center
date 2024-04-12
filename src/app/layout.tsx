import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileMenuContextProvider from './contexts/MobileMenuContext';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Dave's Auto Center",
  description: 'Welcome to Dave’s Auto Center.“Utahs” best mechanics',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <MobileMenuContextProvider>
        <body className={poppins.className}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </MobileMenuContextProvider>
    </html>
  );
}
