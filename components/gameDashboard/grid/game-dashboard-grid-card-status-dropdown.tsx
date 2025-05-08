import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Status } from "@/generated/prisma";
import { getStatusAsArray, getStatusColor } from "@/lib/status";
import React from "react";

interface GameDashboardGridCardStatusDropdownProps {
  statusAsString: Status;
  onChange: (newStatus: Status) => void;
}

const GameDashboardGridCardStatusDropdown = (
  props: GameDashboardGridCardStatusDropdownProps
) => {
  const { statusAsString, onChange } = props;

  const handleChange = (newStatus: Status) => {
    onChange(newStatus);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Badge
          className={`mt-2 cursor-pointer ${
            getStatusColor(statusAsString) || "bg-gray-500"
          } hover:${getStatusColor(statusAsString) || "bg-gray-600"}`}
        >
          {statusAsString}
        </Badge>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {getStatusAsArray().map((status) => (
          <DropdownMenuItem
            key={status.key}
            onClick={() => {
              handleChange(status.key as Status);
            }}
            className={
              status.translation.en === statusAsString ? "font-bold" : ""
            }
          >
            {status.translation.en}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GameDashboardGridCardStatusDropdown;
