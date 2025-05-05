"use client";

import React from "react";
import ConfirmPopover from "../confirmPopover/confirm-popover";
import { Trash } from "lucide-react";
import AppTooltip from "../tooltip/tooltip";

const DeleteGamePopover = () => {
  const handleDelete = () => {};

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
