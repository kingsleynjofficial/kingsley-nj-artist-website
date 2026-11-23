import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'KINGSLEY NJ | Official Website',
  description: 'Official website of KINGSLEY NJ and SEINT MUSIC.'
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}