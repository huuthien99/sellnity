"use client";
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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/constants";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (pathname === "/" && url === "/") {
      return true;
    } else if (pathname !== "/" && url !== "/") {
      return pathname.startsWith(url);
    }
    return false;
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-[60px]">
        <SidebarGroupLabel
          className={cn(
            "flex justify-between h-[100%]",
            "group-data-[collapsible=icon]:mt-0 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:opacity-[1]"
          )}
        >
          <p
            className={cn(
              "group-data-[collapsible=icon]:hidden",
              "font-bold text-[18px]"
            )}
          >
            SELLNITY
          </p>
          <SidebarTrigger className="cursor-pointer" />
        </SidebarGroupLabel>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {MenuItem.map((item) => (
                <SidebarMenuItem className="h-10" key={item.title}>
                  <SidebarMenuButton
                    className="h-full"
                    isActive={isActive(item.url)}
                    asChild
                  >
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
    </Sidebar>
  );
}
