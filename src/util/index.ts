export const alterFormat = (phrase: string) =>
  phrase
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
