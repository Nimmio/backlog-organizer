
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "../ui/badge"

interface ImageBackgroundCardProps {
  title: string
  description: string
  imageSrc: string
  altText: string
  buttonText?: string
  onButtonClick?: () => void
}

export default function ImageBackgroundCard({
  title = "Card Title",
  description = "This is a card with an image background using Next.js Image component.",
  imageSrc = "/placeholder.svg?height=600&width=800",
  altText = "Background image",
  buttonText = "Learn More",
  onButtonClick = () => {},
}: ImageBackgroundCardProps) {
  return (
    <Card className="w-full max-w-md h-[400px] overflow-hidden relative border-0 shadow-lg">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
        />
        {/* Gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full">
        <CardHeader>
          <CardTitle className="text-white text-2xl border rounded-xl p-2">{title}</CardTitle>
          <CardDescription className="text-gray-200">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">{/* Additional content can go here */}</CardContent>
        <CardFooter className="pt-6">
          <Button onClick={onButtonClick} variant="secondary" className="w-full">
            {buttonText}
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}

