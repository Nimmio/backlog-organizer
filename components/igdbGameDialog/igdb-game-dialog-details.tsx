"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface GameProps {
  name: string;
  releaseDate: string;
  genres: string[] | undefined;
  platforms: string[] | undefined;
  description: string | undefined;
  onBack?: () => void;
  coverImage?: string;
}

export default function GameDetails(params: GameProps) {
  const {
    description,
    genres,
    name,
    platforms,
    releaseDate,
    onBack,
    coverImage,
  } = params;
  return (
    <div className="w-full bg-background">
      <div className="p-4">
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

      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Game Cover Image */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border border-border">
            <Image
              src={coverImage || "/placeholder.svg"}
              alt={`${name} cover`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />
          </div>
        </div>

        {/* Game Details */}
        <div className="flex-1">
          <div className="pb-4">
            <>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-sm text-muted-foreground">
                Released: {releaseDate}
              </p>
            </>
          </div>

          <div className="grid gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium leading-none">Genres</h3>

              <div className="flex flex-wrap gap-2">
                {genres &&
                  genres.map((genre) => (
                    <Badge key={genre} variant="secondary">
                      {genre}
                    </Badge>
                  ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium leading-none">Platforms</h3>

              <div className="flex flex-wrap gap-2">
                {platforms &&
                  platforms.map((platform) => (
                    <Badge key={platform} variant="outline">
                      {platform}
                    </Badge>
                  ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="text-sm font-medium leading-none">Description</h3>

              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
