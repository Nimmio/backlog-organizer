import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useDebounce } from "use-debounce";
import { SearchGame } from "@/types/igdb/game";
import AddGameDialogSearchGameCard from "./add-game-dialog-search-game-card";
import { searchGame } from "@/app/(withNavigation)/actions";

interface AddGameDialogSearchProps {
  onSelectGame: (id: number) => void;
}

const AddGameDialogSearch = (props: AddGameDialogSearchProps) => {
  const { onSelectGame } = props;
  const [searchQuery, setsearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchGame[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery) {
      setIsLoading(true);
      searchGame({ search: debouncedSearchQuery, filterEditions: true }).then(
        (games) => {
          setSearchResults(games);
          setIsLoading(false);
        }
      );
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchQuery]);

  return (
    <div className="mx-auto py-8 min-w-full">
      <div className="flex gap-2 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search for games..."
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((game) => (
            <AddGameDialogSearchGameCard
              key={game.id}
              game={game}
              onClick={() => onSelectGame(game.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          {searchQuery && !isLoading
            ? "No games found. Try a different search term."
            : "Search for games to get started"}
        </div>
      )}
    </div>
  );
};

export default AddGameDialogSearch;
