import React from "react";
import GameDashboardControlsSearch from "./game-dashboard-controls-search";
import GameDashboardControlsFilter from "./game-dashboard-controls-filter";

type inputProps = {
  value: string;
  onChange: (value: string) => void;
};

type selectInputProps = inputProps & {
  options: string[];
};

interface GameDashboardControlsProps {
  search: inputProps;
  statusFilter: selectInputProps;
  platformFilter: selectInputProps;
}

const GameDashboardControls = (props: GameDashboardControlsProps) => {
  const { search, statusFilter, platformFilter } = props;
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
  return (
    <div className="grid gap-4 mb-6 md:grid-cols-3">
      <GameDashboardControlsSearch
        value={searchValue}
        onChange={onSearchChange}
      />
      <GameDashboardControlsFilter
        value={statusFilterValue}
        placeholder="Filter by Status"
        onChange={onStatusFilterChange}
        options={statusFilterOptions}
      />

      <GameDashboardControlsFilter
        value={platformFilterValue}
        placeholder="Filter by Platform"
        onChange={onPlatformFilterChange}
        options={platformFilterOptions}
      />
    </div>
  );
};

export default GameDashboardControls;
