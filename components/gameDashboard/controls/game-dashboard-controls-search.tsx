import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

type GameDashboardControlsSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

const GameDashboardControlsSearch = (
  props: GameDashboardControlsSearchProps
) => {
  const { value, onChange } = props;
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search games..."
        className="pl-8"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
};

export default GameDashboardControlsSearch;
