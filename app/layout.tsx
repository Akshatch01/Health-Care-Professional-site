import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dr. Jennifer Hahm - Compassionate Healthcare',
  description: 'Providing personalized, evidence-based medical care with a focus on preventive health and patient-centered treatment approaches.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}