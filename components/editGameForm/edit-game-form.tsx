"use client";
import React from "react";
import GameForm, { GameFormProps } from "../gameForm/game-form";
import { editGame } from "@/app/actions";
import { useRouter } from "next/navigation";
import { Game } from "@/generated/prisma";

interface EditGameFormProps extends Omit<GameFormProps, "onSubmit"> {
  id: number;
}

const EditGameForm = (props: EditGameFormProps) => {
  const { id } = props;
  const router = useRouter();
  const handleSubmit = (values: Omit<Game, "id">) => {
    editGame({ id, ...values }).then(() => router.push("/"));
  };
  return <GameForm onSubmit={handleSubmit} {...props} />;
};

export default EditGameForm;
