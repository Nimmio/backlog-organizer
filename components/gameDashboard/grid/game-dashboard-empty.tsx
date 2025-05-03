import React from "react";

const GameDashboardGridEmpty = () => {
  return (
    <div className="col-span-full text-center py-10">
      <p className="text-muted-foreground">
        No games found matching your filters.
      </p>
    </div>
  );
};

export default GameDashboardGridEmpty;
