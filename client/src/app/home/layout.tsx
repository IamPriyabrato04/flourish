import { HomeSidebar } from '@/components/home/sidebar'
import { SidebarProvider } from 'components/ui/sidebar'
import React from 'react'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <SidebarProvider defaultOpen={false}>
                <HomeSidebar />
                <main>
                    {children}
                </main>
            </SidebarProvider>
        </>
    )
}

export default Layout