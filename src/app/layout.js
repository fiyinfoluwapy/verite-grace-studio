import './globals.css';
import { Oleo_Script, Cormorant_Garamond, Poppins, Playfair_Display, Rouge_Script } from 'next/font/google';
import Navbar from './components/navbar';

// Load fonts using next/font/google
const oleo = Oleo_Script({
  variable: '--font-oleo',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['600', '700'],
});

const rougeScript = Rouge_Script({
  variable: '--font-rouge-script',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata = {
  title: 'Vérité Grace Studio',
  description: 'Unisex salon gallery and booking site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${cormorant.variable} ${oleo.variable} ${rougeScript.variable}`}>
      <body className="bg-white text-gray-800" style={{ fontFamily: 'var(--font-poppins)' }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
