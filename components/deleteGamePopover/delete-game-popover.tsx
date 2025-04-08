"use client";

import React from "react";
import { Button } from "../ui/button";
import ConfirmPopover from "../confirmPopover/confirm-popover";
import { deleteGame } from "@/app/actions";
import { useRouter } from "next/navigation";

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
    <ConfirmPopover
      trigger={<Button variant="secondary">Delete Game</Button>}
      isDescrutive
      confirmButtonText="Delete"
      description="Delete Game?"
      onConfirm={handleDelete}
    />
  );
};

export default DeleteGamePopover;
