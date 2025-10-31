import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Msaddi',
  description: 'Msaddi Company Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
