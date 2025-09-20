"use client"
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import Link from 'next/link'
import { CreditCardIcon, Folder, Home, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useSession } from 'next-auth/react'
import SignoutButton from '../login/Signout-button'


const items = [
    {
        title: "Home",
        icon: "Home",
        href: "/",
        active: true,
    },
    {
        title: "Projects",
        icon: "Folder",
        href: "/home/projects",
        active: false,
    },
    {
        title: "Billing",
        icon: "CreditCardIcon",
        href: "/billing",
        active: false,
    },
    {
        title: "Settings",
        icon: "Settings",
        href: "/settings",
        active: false,
    }
]
export const HomeSidebar = () => {
    const { data: session } = useSession();

    return (
        <Sidebar variant="floating" collapsible="none" className="h-screen bg-indigo-600 w-min flex flex-col rounded-r-xl  text-2xl font-mono">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className='w-min text-white rounded-lg p-1'>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.icon} >
                                    <SidebarMenuButton asChild size={'lg'} isActive={item.active}>
                                        <Link href={`${item.href}`} className='flex flex-col justify-center items-center h-max rounded-md focus:bg-indigo-400 transition-colors mb-1'>
                                            {item.icon === "Home" && <Home className='w-12 h-12' />}
                                            {item.icon === "Folder" && <Folder className='w-12 h-12 ' />}
                                            {item.icon === "CreditCardIcon" && <CreditCardIcon className='w-12 h-12' />}
                                            {item.icon === "Settings" && <Settings className='w-12 h-12 ' />}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SignoutButton />
                <Avatar className='h-12 w-12 ml-3'>
                    <AvatarImage src={session?.user?.image || "https://github.com/shadcn.png"} />
                    <AvatarFallback>{session?.user?.name}</AvatarFallback>
                </Avatar>
            </SidebarFooter>
        </Sidebar>
    )
}
