import React from "react";
import AppCard from "../card/app-card";

interface GameCardProps {
  name: string;
  platform: string;
}

const GameCard = (props: GameCardProps) => {
  const { name, platform } = props;

  const cardContent = <span>Platform: {platform}</span>;

  return <AppCard content={cardContent} title={name} />;
};

export default GameCard;
