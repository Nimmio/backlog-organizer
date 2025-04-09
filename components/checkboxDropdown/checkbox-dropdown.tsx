import React, { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface checkboxDropdownProps {
  keepOpen?: boolean;
  elements: {
    label: string;
    isActive: boolean;
    key: string;
  }[];
  trigger: ReactNode;
  menuLabel?: string;
  onElementClicked: (key: string) => void;
}

const CheckboxDropdown = (props: checkboxDropdownProps) => {
  const { keepOpen, elements, trigger, menuLabel, onElementClicked } = props;

  const handleClick = (e: React.MouseEvent, key: string) => {
    if (keepOpen) e.preventDefault();
    onElementClicked(key);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {menuLabel && (
          <>
            <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>{" "}
            <DropdownMenuSeparator />
          </>
        )}
        {elements.map((element) => (
          <DropdownMenuCheckboxItem
            key={element.key}
            checked={element.isActive}
            onClick={(e) => handleClick(e, element.key)}
          >
            {element.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CheckboxDropdown;
