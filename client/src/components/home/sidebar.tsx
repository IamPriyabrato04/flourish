"use client";
import React, { useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { CreditCardIcon, Folder, Home, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSession } from "next-auth/react";
import SignoutButton from "../login/Signout-button";

const items = [
  { title: "Home", icon: Home, href: "/home", active: false },
  { title: "Projects", icon: Folder, href: "/home/projects", active: false },
  { title: "Billing", icon: CreditCardIcon, href: "/billing", active: false },
  { title: "Settings", icon: Settings, href: "/home/settings", active: false },
];

export const HomeSidebar = () => {
  const { data: session } = useSession();
  useEffect(() => {
    const path = window.location.pathname;
    items.forEach((item) => (item.active = item.href === path));

    return () => {
      items.forEach((item) => (item.active = false));
    };
  }, [items]);

  return (
    <Sidebar
      variant="floating"
      collapsible="none"
      className="h-screen w-fit flex flex-col rounded-xl bg-primary-foreground shadow-xl not-sm:hidden"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col space-y-1 gap-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    size="lg"
                    isActive={item.active}
                    // onClick={() => {
                    //   if (item.href) {
                    //     window.location.href = item.href;
                    //   }
                    // }}
                    className={`h-fit ${item.active ? "bg-gray-200" : ""}`}
                  >
                    <Link
                      href={item.href}
                      className="flex flex-col items-center p-1 
                                 rounded-lg transition-all duration-200 
                                 hover:bg-gray-700/60 group"
                    >
                      <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
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
              src={session?.user?.image || "https://github.com/shadcn.png"}
            />
            <AvatarFallback className="bg-gray-700 text-white">
              {session?.user?.name?.[0] ?? "U"}
            </AvatarFallback>
          </Avatar>
          <span className="text-[10px] text-gray-700 truncate max-w-[70px]">
            {session?.user?.name || "Guest"}
          </span>
          <SignoutButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
