"use client";

import {
  Globe2Icon,
  Home,
  BookOpen,
  User2Icon,
  LogOutIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { logOut } from "@/lib/appwrite/auth";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Discover",
    url: "/discover",
    icon: Globe2Icon,
  },
  {
    title: "Laws",
    url: "/laws",
    icon: BookOpen,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    try {
      await logOut();
      console.log("User logged out successfully");
      router.push("/signIn");
    } catch (error: any) {
      console.error("Failed to log out:", error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <div className="p-4">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold">Numa</span>
              </Link>
            </div>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="p-4 border-t border-b">
        <SidebarMenuButton asChild>
          <Link href="/signIn" className="flex items-center ">
            <User2Icon className="h-5 w-5" />
            <span>Sign In</span>
          </Link>
        </SidebarMenuButton>
      </div>
      <div className="p-4">
        <SidebarMenuButton
          className="flex items-center gap-2"
          onClick={handleLogOut}
          disabled={loading}
        >
          <LogOutIcon className="h-5 w-5" />
          <span>{loading ? "Logging Out..." : "Log Out"}</span>
        </SidebarMenuButton>
      </div>
    </Sidebar>
  );
}
