import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css'; // Adjust the path based on your file structure

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Notes App',
  description: 'AI-enhanced Notes App with rich text, media, and code snippet support',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        {/* You can also add a header here if needed */}
        {children}
      </body>
    </html>
  );
}
