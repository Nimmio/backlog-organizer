import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { SearchGame } from "@/types/igdb/game";
import AddGameDialogSearchGameCard from "./add-game-dialog-search-game-card";

interface AddGameDialogSearchProps {
  onSelectGame: (id: SearchGame) => void;
  searchInput: string;
  onChangeSearchInput: (newValue: string) => void;
  searchResults: SearchGame[];
  isLoading: boolean;
}

const AddGameDialogSearch = (props: AddGameDialogSearchProps) => {
  const {
    onSelectGame,
    searchInput,
    onChangeSearchInput,
    searchResults,
    isLoading,
  } = props;

  return (
    <div className="mx-auto py-8 min-w-full">
      <div className="flex gap-2 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search for games..."
            value={searchInput}
            onChange={(e) => onChangeSearchInput(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3">
          {searchResults.map((game) => (
            <AddGameDialogSearchGameCard
              key={game.id}
              game={game}
              onClick={() => onSelectGame(game)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          {searchInput && !isLoading
            ? "No games found. Try a different search term."
            : "Search for games to get started"}
        </div>
      )}
    </div>
  );
};

export default AddGameDialogSearch;
