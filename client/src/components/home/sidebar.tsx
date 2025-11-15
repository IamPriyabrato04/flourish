'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import Link from 'next/link';
import { CreditCardIcon, Folder, Home, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useSession } from 'next-auth/react';
import SignoutButton from '../login/Signout-button';

const items = [
  { title: 'Home', icon: Home, href: '/home', active: false },
  { title: 'Projects', icon: Folder, href: '/home/projects', active: false },
  { title: 'Billing', icon: CreditCardIcon, href: '/billing', active: false },
  { title: 'Settings', icon: Settings, href: '/home/settings', active: false },
];

export const HomeSidebar = () => {
  const { data: session } = useSession();

  return (
    <Sidebar
      variant="floating"
      collapsible="none"
      className="bg-primary-foreground flex h-screen w-fit flex-col rounded-xl shadow-xl not-sm:hidden"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col space-y-1 gap-y-2">
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    size="lg"
                    isActive
                    className={`h-fit ${item.active ? 'bg-gray-200' : ''}`}
                  >
                    <Link
                      href={item.href}
                      className="group flex flex-col items-center rounded-lg p-1 transition-all duration-200 hover:bg-gray-700/60"
                    >
                      <item.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                      <span className="text-xs font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer with Avatar + Logout */}
      <SidebarFooter className="mt-auto pb-10">
        <div className="flex flex-col items-center gap-y-2">
          <Avatar className="h-12 w-12 border-2 border-gray-600 shadow-md">
            <AvatarImage
              src={session?.user?.image || 'https://github.com/shadcn.png'}
            />
            <AvatarFallback className="bg-gray-700 text-white">
              {session?.user?.name?.[0] ?? 'U'}
            </AvatarFallback>
          </Avatar>
          <span className="max-w-[70px] truncate text-[10px] text-gray-700">
            {session?.user?.name || 'Guest'}
          </span>
          <SignoutButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
