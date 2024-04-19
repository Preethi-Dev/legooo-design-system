import * as themes from "../../tokens";

export const rgbaToHex = (rgbaColor) => {
  // Extracting rgba values using regex
  const rgbaValues = rgbaColor.match(/\d+(\.\d+)?/g);

  // Converting rgba values to integers
  const r = parseInt(rgbaValues[0]);
  const g = parseInt(rgbaValues[1]);
  const b = parseInt(rgbaValues[2]);

  // Alpha value can be optional
  const alpha = rgbaValues[3] ? parseFloat(rgbaValues[3]) : 1.0;

  // Convert rgba to hex
  const rHex = r.toString(16).padStart(2, "0");
  const gHex = g.toString(16).padStart(2, "0");
  const bHex = b.toString(16).padStart(2, "0");

  // If alpha is 1, return hex without alpha
  if (alpha === 1.0) {
    return `#${rHex}${gHex}${bHex}`;
  } else {
    // Convert alpha to hex
    const alphaHex = Math.round(alpha * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${rHex}${gHex}${bHex}${alphaHex}`;
  }
};

//color token generator
export const colorTokensGenerator = (theme) => {
  const colors = [
    "blue",
    "purple",
    "cyan",
    "green",
    "magenta",
    "red",
    "orange",
    "yellow",
    "volcano",
    "geekblue",
    "lime",
    "gold",
  ];

  const colorTokens = [];

  colors.forEach((color) => {
    const colorPattern = new RegExp("^" + color + "-\\d+$");
    const colorObj = { [color]: {} };
    colorTokens.push(colorObj);
    Object.entries(themes[theme]).forEach(([key, value]) => {
      if (colorPattern.test(key)) {
        colorObj[color][key] = rgbaToHex(value.varValue);
      }
    });
  });

  return colorTokens;
};

export const capitalize = (word) => {
  return word
    .split("")
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
    .join("");
};
