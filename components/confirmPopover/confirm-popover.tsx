"useClient";
import React, { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

interface ConfirmPopoverProps {
  trigger: ReactNode;
  description: string;
  confirmButtonText?: string;
  isDescrutive?: boolean;
  onConfirm: () => void;
}

const ConfirmPopover = (props: ConfirmPopoverProps) => {
  const {
    trigger,
    description,
    isDescrutive = false,
    confirmButtonText = "Confirm",
    onConfirm,
  } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent>
        <p>{description}</p>
        <Button
          variant={isDescrutive ? "destructive" : "default"}
          onClick={onConfirm}
        >
          {confirmButtonText}
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default ConfirmPopover;
