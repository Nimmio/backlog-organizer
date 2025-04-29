"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";

interface GameProps {
  name: string;
  releaseDate: string;
  genres: string[] | undefined;
  platforms: string[] | undefined;
  description: string | undefined;
  onBack?: () => void;
}

export default function GameDetails(params: GameProps) {
  const { description, genres, name, platforms, releaseDate, onBack } = params;
  const genreLoading = !genres;
  const platformLoading = !platforms;
  const descriptionLoading = !description;
  return (
    <div className="w-full max-w-2xl border-border rounded-lg bg-background">
      <div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>
      <Separator className="mt-2 mb-2" />
      <div className="pb-2">
        <>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-muted-foreground">
            Released: {releaseDate}
          </p>
        </>
      </div>

      <div className="py-4 grid gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium leading-none">Genres</h3>
          {genreLoading ? (
            <div className="flex flex-wrap gap-2 mt-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Badge key={genre} variant="secondary">
                  {genre}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium leading-none">Platforms</h3>
          {platformLoading ? (
            <div className="flex flex-wrap gap-2 mt-2">
              <Skeleton className="h-6 w-28 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <Badge key={platform} variant="outline">
                  {platform}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="text-sm font-medium leading-none">Description</h3>
          {descriptionLoading ? (
            <div className="space-y-2 mt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
