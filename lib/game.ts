const Mapping = {
  WANT_TO_BUY: "Want to buy",
  PREORDER: "Preorder",
  TO_PLAY: "To play",
  PLAYING: "Playing",
  COMPLETED: "Completed",
  DROPPED: "Dropped",
};

export const statusTranslation = (
  status:
    | "WANT_TO_BUY"
    | "PREORDER"
    | "TO_PLAY"
    | "PLAYING"
    | "COMPLETED"
    | "DROPPED"
): string => {
  return Mapping[status];
};
