import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mount-media-links.mountmedia.chatgpt.site'),
  title: 'Mount Media — Stories worth climbing for',
  description: 'An independent creative studio making films, campaigns, and culture move.',
  openGraph: {
    title: 'Mount Media',
    description: 'Stories worth climbing for.',
    images: [{ url: '/og.png', width: 1734, height: 907, alt: 'Mount Media — Stories worth climbing for.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mount Media',
    description: 'Stories worth climbing for.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
