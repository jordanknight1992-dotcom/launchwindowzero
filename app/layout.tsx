import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Launch Window Zero',
  description:
    'A science fiction novel about a civilization discovering that expansion and survival are not the same thing.',
  openGraph: {
    title: 'Launch Window Zero',
    description: 'The first signal changed everything.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-void text-starlight min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
