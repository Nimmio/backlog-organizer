import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Platform } from "@/generated/prisma";
import { ChevronDown } from "lucide-react";
import React from "react";

interface GameDashboardGridCardPlatformDropdownProps {
  currentPlatform: string;
  platformOptions: Platform[];
  onChange: (newPlatform: string) => void;
}

const GameDashboardGridCardPlatformDropdown = (
  props: GameDashboardGridCardPlatformDropdownProps
) => {
  const { currentPlatform, platformOptions, onChange } = props;

  const handleChange = (newPlatform: string) => onChange(newPlatform);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground cursor-pointer">
        {currentPlatform}
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {[{ id: 0, name: "None" }, ...platformOptions].map((platformOption) => (
          <DropdownMenuItem
            key={platformOption.id}
            onClick={() => handleChange(platformOption.name)}
            className={
              platformOption.name === currentPlatform ? "font-bold" : ""
            }
          >
            {platformOption.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GameDashboardGridCardPlatformDropdown;
