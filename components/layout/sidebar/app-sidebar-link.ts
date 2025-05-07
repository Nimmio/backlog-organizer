import { Home, Joystick } from "lucide-react";
import { ISidebarLinks } from "./app-sidebar";

const sidebarLinks: ISidebarLinks = {
  groups: [
    {
      elements: [
        { label: "Home", link: "/", icon: Home },
        { label: "Platforms", link: "/platforms", icon: Joystick },
      ],
    },
  ],
};

export default sidebarLinks;
