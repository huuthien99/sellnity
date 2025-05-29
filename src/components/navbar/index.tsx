"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { MenuItem } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Administrations from "../icons/Administrations";
import Documentation from "../icons/Documentation";
import Share from "../icons/Share";

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

  const { open } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      bgColorSidebar="bg-[#F1F1F1] shadow-[1px_1px_20px_-5px_#00000040] border-0"
      className=" group-data-[side=left]:border-0"
    >
      {/* <SidebarHeader className="h-[60px]">
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
      </SidebarHeader> */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {MenuItem.map((item) => (
                <SidebarMenuItem className="h-10" key={item.title}>
                  <SidebarMenuButton
                    className="h-full group-data-[collapsible=icon]:p-2! font-medium text-[16px] text-[#7C7C7C] data-[active=true]:bg-[#D3D3D3] data-[active=true]:text-[#005B86] gap-6"
                    isActive={isActive(item.url)}
                    asChild
                  >
                    <Link className={open ? "" : "ml-[18px]"} href={item.url}>
                      <item.icon
                        color={isActive(item.url) ? "#005B86" : "#7C7C7C"}
                      />
                      <span className={open ? "" : "sr-only"}>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="h-10">
                <SidebarMenuButton
                  className="h-full group-data-[collapsible=icon]:p-2! font-medium text-[16px] text-[#7C7C7C] data-[active=true]:bg-[#D3D3D3] data-[active=true]:text-[#005B86] gap-6"
                  asChild
                >
                  <Link className={open ? "" : "ml-[18px]"} href={""}>
                    <Administrations />
                    <span className={open ? "" : "sr-only"}>
                      Administrations
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem className="h-10">
                <SidebarMenuButton
                  className="h-full group-data-[collapsible=icon]:p-2! font-medium text-[16px] text-[#7C7C7C] data-[active=true]:bg-[#D3D3D3] data-[active=true]:text-[#005B86] gap-6"
                  asChild
                >
                  <Link className={open ? "" : "ml-[18px]"} href={""}>
                    <Documentation />
                    <span className={open ? "" : "sr-only"}>Documentation</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className="h-12 pt-[13px] mb-[27px] ">
                <SidebarMenuButton
                  className="gap-6 group-data-[collapsible=icon]:ml-[16px]
                  group-data-[collapsible=icon]:[&>svg]:sr-only
                  group-data-[collapsible=icon]:[&>img]:size-10
                  pl-0
                  "
                >
                  {open ? (
                    <Image src="/logo.png" alt="logo" width={134} height={32} />
                  ) : (
                    <p>
                      <Image
                        src="/logo-small.png"
                        alt="logo"
                        width={32}
                        height={28}
                      />
                    </p>
                  )}
                  <Share />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
