export const generateSize = (size) => {
  switch (size) {
    case "small":
      return "1.5rem";
    case "medium":
      return "2rem";
    case "large":
      return "2.5rem";
    default:
      return /(px|rem|em)$/.test(size) ? size : "2rem";
  }
};

export const generateTextSize = (size) => {
  switch (size) {
    case "small":
      return ".75rem";
    case "medium":
      return ".875rem";
    case "large":
      return "1rem";
    default:
      return "1.25rem";
  }
};
