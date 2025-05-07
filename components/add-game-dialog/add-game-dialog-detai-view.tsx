import { SearchGame } from "@/types/igdb/game";
import Image from "next/image";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { getUrl } from "@/lib/igdb/cover";
import { format, fromUnixTime } from "date-fns";
import { Button } from "../ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import { getStatusAsArray } from "@/lib/status";

interface AddGameDialogDetailViewProps {
  game: SearchGame;
  onBack: () => void;
  onAddGame: ({
    id,
    platform,
    status,
  }: {
    id: number;
    platform: string;
    status: string;
  }) => void;
}

const AddGameDialogDetailView = (props: AddGameDialogDetailViewProps) => {
  const { game, onBack, onAddGame } = props;

  const [selectedPlatform, setSelectedPlatform] = useState<string>("none");
  const [selectedStatus, setSelectedStatus] = useState<string>("BACKLOG");

  const handleAddGame = () => {
    onAddGame({
      id: game.id,
      platform: selectedPlatform,
      status: selectedStatus,
    });
  };

  return game ? (
    <div className="grid md:grid-cols-[200px_1fr] gap-6 py-4">
      {game.cover && game.cover.url !== "" ? (
        <div className="aspect-[3/4] relative mx-auto md:mx-0 w-full max-w-[200px] mt-[8]">
          <Image
            src={getUrl(game.cover.url as string, "cover_big")}
            alt={game.name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-[3/4] relative mx-auto md:mx-0 w-full max-w-[200px] mt-[8]"></div>
      )}

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">{game.name}</h1>
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground">
            Release Date
          </h4>
          <p>
            {game.first_release_date
              ? format(fromUnixTime(game.first_release_date), "dd.MM.yyyy")
              : "Release date unknown"}
          </p>
        </div>
        {game.genres && game.genres.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">
              Genres
            </h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {game.genres.map((genre) => (
                <Badge key={genre.id} variant="secondary">
                  {genre.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {game.platforms && game.platforms.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">
              Available Platforms
            </h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {game.platforms.map((platform) => (
                <Badge key={platform.id} variant="outline">
                  {platform.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {game.summary && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">
              Summary
            </h4>
            <p className="text-sm mt-1">{game.summary}</p>
          </div>
        )}
        <div className="flex">
          <div className="space-y-2">
            <Label htmlFor="platform">Platform</Label>
            <Select
              value={selectedPlatform}
              onValueChange={(value) => setSelectedPlatform(value)}
            >
              <SelectTrigger id="platform" className="min-w-[250]">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key="none" value="none">
                  None
                </SelectItem>
                {game.platforms?.map((platform) => (
                  <SelectItem key={platform.id} value={platform.name}>
                    {platform.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 ml-4">
            <Label htmlFor="status">Status</Label>
            <Select
              value={selectedStatus}
              onValueChange={(value) => setSelectedStatus(value)}
            >
              <SelectTrigger id="status" className="min-w-[250]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {getStatusAsArray().map((status) => (
                  <SelectItem key={status.key} value={status.key}>
                    {status.translation.en}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex">
          <Button className="mr-4" variant="secondary" onClick={onBack}>
            <ArrowLeft />
            Back
          </Button>

          <Button onClick={() => handleAddGame()}>
            <Plus />
            Add
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <>Game Details Loading</>
  );
};

export default AddGameDialogDetailView;
