import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface DeleteConfirmationProps {
  gameName: string;
  onDeleteConfirm: () => void;
}

const DeleteConfirmation = (props: DeleteConfirmationProps) => {
  const { gameName, onDeleteConfirm } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-70 p-0" align="end">
        <div className="p-4 pb-0">
          <div className="font-medium">Delete Game</div>
          <div className="text-sm text-muted-foreground mt-1">
            Are you sure you want to delete{" "}
            <span className="font-semibold">{gameName}</span>?
            <div> This action cannot be undone.</div>
          </div>
        </div>
        <div className="flex border-t p-3 gap-2 justify-end mt-2">
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => {
              onDeleteConfirm();
              setOpen(false);
            }}
          >
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DeleteConfirmation;
