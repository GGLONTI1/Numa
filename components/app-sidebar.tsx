import {
  BookAIcon,
  BookIcon,
  BookOpen,
  Calendar,
  Globe2Icon,
  Home,
  Inbox,
  Search,
  Settings,
  User2Icon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
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
          <a href="/signIn" className="flex items-center ">
            <User2Icon className="h-5 w-5" />
            <span>Sign In</span>
          </a>
        </SidebarMenuButton>
      </div>
    </Sidebar>
  );
}
