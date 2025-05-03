import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type GameDashboardControlsFilterProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
};

const GameDashboardControlsFilter = (
  props: GameDashboardControlsFilterProps
) => {
  const { value, onChange, options, placeholder } = props;
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default GameDashboardControlsFilter;
