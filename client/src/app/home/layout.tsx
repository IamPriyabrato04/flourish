import { HomeSidebar } from '@/components/home/sidebar';
import AdvertisementBanner from '@/components/ui/advertisement-banner';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <main className="container h-screen max-w-screen overflow-hidden">
        <AdvertisementBanner />
        <SidebarProvider defaultOpen={false}>
          <HomeSidebar />
          {children}
        </SidebarProvider>
      </main>
    </>
  );
};

export default Layout;
