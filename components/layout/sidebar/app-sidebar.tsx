import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, LucideIcon } from "lucide-react";
import Link from "next/link";
import SidebarUser from "./user/sidebar-user";

export interface ISidebarLinks {
  groups: {
    label?: string;
    elements: {
      label: string;
      link: string;
      icon?: LucideIcon;
    }[];
  }[];
}

interface AppSidebarProps {
  links: ISidebarLinks;
  variant?: "sidebar" | "floating" | "inset";
  side?: "left" | "right";
}

const AppSidebar = (props: AppSidebarProps) => {
  const { links, variant = "sidebar", side = "left" } = props;
  return (
    <Sidebar variant={variant} side={side}>
      <SidebarHeader />
      <SidebarContent>
        {links.groups.map((group, index) => (
          <SidebarGroup key={`sidebar_group_${index}`}>
            {group.label ? <span>{group.label}</span> : ""}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.elements.map((element) => (
                  <SidebarMenuItem key={element.label}>
                    <SidebarMenuButton asChild>
                      <Link href={element.link}>
                        {element.icon ? <element.icon /> : ""}
                        <span>{element.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
