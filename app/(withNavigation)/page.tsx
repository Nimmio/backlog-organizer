import GameCard from "@/components/gameCard/game-card";

export default function Home() {
  const DEMODATA: { name: string; platform: string }[] = [
    {
      name: "Cyberpunk 2077",
      platform: "PC",
    },
    {
      name: "Stardew Valley",
      platform: "Nintendo Switch",
    },
    {
      name: "Elden Ring",
      platform: "PlayStation 5",
    },
    {
      name: "Grand Theft Auto V",
      platform: "Xbox Series X",
    },
    {
      name: "The Legend of Zelda: Breath of the Wild",
      platform: "Nintendo Switch",
    },
    {
      name: "Hades",
      platform: "PC",
    },
    {
      name: "Red Dead Redemption 2",
      platform: "PlayStation 4",
    },
    {
      name: "Minecraft",
      platform: "Mobile",
    },
  ];

  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        {DEMODATA.map((element) => (
          <GameCard
            key={element.name}
            name={element.name}
            platform={element.platform}
          />
        ))}
      </div>
    </main>
  );
}
