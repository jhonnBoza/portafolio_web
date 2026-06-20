import type { Metadata } from 'next';
import { Rajdhani, Poppins, Dancing_Script } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import RightNav from '@/components/RightNav';
import ConstellationBg from '@/components/ConstellationBg';
import { personalInfo } from '@/lib/data';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
});
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});
const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} — ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  authors: [{ name: personalInfo.name }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${rajdhani.variable} ${poppins.variable} ${dancing.variable}`}>
      <body className="bg-[#060606] text-white">
        {/* Animated constellation background */}
        <ConstellationBg />
        <Sidebar />
        <RightNav />
        {/* Main content sits clear of the fixed sidebar (left) and right-nav (right) */}
        <main className="min-h-screen xl:ml-[540px] xl:mr-[130px]">
          {children}
        </main>
      </body>
    </html>
  );
}
