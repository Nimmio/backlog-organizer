"use client";

import React from "react";
import { Button } from "../ui/button";
import ConfirmPopover from "../confirmPopover/confirm-popover";
import { deleteGame } from "@/app/actions";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import AppTooltip from "../tooltip/tooltip";

interface DeleteGamePopoverProps {
  id: number;
  redirectTo?: string;
}

const DeleteGamePopover = (props: DeleteGamePopoverProps) => {
  const { id, redirectTo } = props;
  const router = useRouter();

  const handleDelete = () => {
    deleteGame({ id }).then(() => {
      if (redirectTo) router.push(redirectTo);
    });
  };

  return (
    <AppTooltip text="Delete">
      <ConfirmPopover
        trigger={<Trash />}
        isDescrutive
        confirmButtonText="Delete"
        description="Delete Game?"
        onConfirm={handleDelete}
      />
    </AppTooltip>
  );
};

export default DeleteGamePopover;
