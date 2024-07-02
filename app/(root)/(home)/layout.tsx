import { Metadata } from 'next';
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: 'AryaExam',
  description: 'An Online Exam Proctoring System made by CDAC DBDA Batch of March 2024.',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />
        
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
      <footer>
    <Analytics/>
  </footer>
    </main>
    
  );
};

export default RootLayout;
