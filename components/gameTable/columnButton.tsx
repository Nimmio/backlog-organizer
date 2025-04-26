import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import AppTooltip from "../tooltip/tooltip";

interface ColumnButtonProps {
  link?: string;
  icon: ReactNode;
  tooltip: string;
  onClick?: () => void;
}

const ColumnButton = (props: ColumnButtonProps) => {
  const { icon, link, tooltip, onClick } = props;

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <AppTooltip text={tooltip}>
      <Button asChild variant="ghost" onClick={() => handleClick()}>
        {link ? <Link href={link}>{icon}</Link> : <>{icon}</>}
      </Button>
    </AppTooltip>
  );
};

export default ColumnButton;
