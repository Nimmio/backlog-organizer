import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface GameDashboardControlsFilterProps {
  value: number;
  onChange: (value: string) => void;
  options: number[];
  placeholder: string;
}

const GameDashboardControlsLimit = (
  props: GameDashboardControlsFilterProps
) => {
  const { onChange, options, placeholder, value } = props;
  return (
    <Select value={value.toString()} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option.toString()}>
            Show {option === 0 ? "All" : option.toString()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default GameDashboardControlsLimit;
