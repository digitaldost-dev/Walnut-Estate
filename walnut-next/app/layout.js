import './globals.css';
import CustomCursor from '../components/CustomCursor';
import StickyContact from '../components/StickyContact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Walnut Estate — The evolution of the estate',
  description: 'Curating extraordinary living spaces for discerning individuals across Lucknow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-circle.png?v=3" type="image/png" />
        <link rel="shortcut icon" href="/favicon-circle.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/main-logo.png?v=3" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Nunito:wght@200;300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        <StickyContact />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
