import React from "react";
import GameDashboardControlsSearch from "./game-dashboard-controls-search";
import GameDashboardControlsFilter from "./game-dashboard-controls-filter";
import GameDashboardControlsLimit from "./game-dashboard-controls-limit";

type inputProps = {
  value: string | number;
  onChange: (value: string | number) => void;
};

type selectInputProps = inputProps & {
  options: string[] | number[];
};

interface GameDashboardControlsProps {
  search: inputProps;
  statusFilter: selectInputProps;
  platformFilter: selectInputProps;
  limitProps: selectInputProps;
}

const GameDashboardControls = (props: GameDashboardControlsProps) => {
  const { search, statusFilter, platformFilter, limitProps } = props;
  const { value: searchValue, onChange: onSearchChange } = search;
  const {
    value: statusFilterValue,
    onChange: onStatusFilterChange,
    options: statusFilterOptions,
  } = statusFilter;

  const {
    value: platformFilterValue,
    onChange: onPlatformFilterChange,
    options: platformFilterOptions,
  } = platformFilter;

  const {
    value: limitValue,
    onChange: onLimitChange,
    options: limitOptions,
  } = limitProps;

  return (
    <div className="grid gap-4 mb-6 md:grid-cols-4">
      <GameDashboardControlsSearch
        value={searchValue as string}
        onChange={onSearchChange}
      />
      <GameDashboardControlsFilter
        value={statusFilterValue as string}
        placeholder="Filter by Status"
        onChange={onStatusFilterChange}
        options={statusFilterOptions as string[]}
      />

      <GameDashboardControlsFilter
        value={platformFilterValue as string}
        placeholder="Filter by Platform"
        onChange={onPlatformFilterChange}
        options={platformFilterOptions as string[]}
      />
      <GameDashboardControlsLimit
        value={limitValue as number}
        placeholder="Set Game Count"
        onChange={onLimitChange}
        options={limitOptions as number[]}
      />
    </div>
  );
};

export default GameDashboardControls;
