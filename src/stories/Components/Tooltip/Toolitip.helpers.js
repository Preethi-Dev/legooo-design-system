export const generateBgColor = (color) => {
  switch (color) {
    case "pink":
      return "rgba(235, 47, 150, 1)";
    case "red":
      return "rgba(245, 34, 45, 1)";
    case "yellow":
      return "rgba(250, 219, 20, 1)";
    case "orange":
      return "rgba(250, 140, 22, 1)";
    case "cyan":
      return "rgba(19, 194, 194, 1)";
    case "green":
      return "rgba(82, 196, 26, 1)";
    case "blue":
      return "rgba(24, 144, 255, 1)";
    case "purple":
      return "rgba(114, 46, 209, 1)";
    case "geekblue":
      return "rgba(47, 84, 235, 1)";
    case "magenta":
      return "rgba(235, 47, 150, 1)";
    case "vocano":
      return "rgba(250, 84, 28, 1)";
    case "gold":
      return "rgba(250, 173, 20, 1)";
    case "lime":
      return "rgba(160, 217, 17, 1)";
    case "black":
      return "rgba(0,0,0,0.75)";
    default:
      return color.includes("#" || "rgb" || "rgba" || "hsl" || "hsla")
        ? color
        : "rgba(0,0,0,0.75)";
  }
};

const generatePlacementByRect = (placement, rect) => {
  if (
    rect &&
    ["leftTop", "left", "leftBottom"].includes(placement) &&
    rect.left < 60
  ) {
    return placement.replace("left", "right");
  } else if (
    rect &&
    ["rightTop", "right", "rightBottom"].includes(placement) &&
    window.innerWidth - rect.right < 60
  ) {
    return placement.replace("right", "left");
  } else if (
    rect &&
    ["topLeft", "top", "topRight"].includes(placement) &&
    rect.top < 60
  ) {
    return placement.replace("top", "bottom");
  } else if (
    rect &&
    ["bottomRight", "bottom", "bottomRight"].includes(placement) &&
    window.innerHeight - rect.bottom < 60
  ) {
    return placement.replace("bottom", "top");
  } else {
    return placement;
  }
};

export const generateArrowPlacement = (placement, rect) => {
  placement = generatePlacementByRect(placement, rect);
  switch (placement) {
    case "bottomLeft":
      return `
        flex-direction: column-reverse;
        align-items: start;

        & svg{
            margin: 0 0.5rem;
            transform: rotate(180deg);
        }
      `;
    case "bottom":
      return `
        flex-direction: column-reverse;
        align-items: center;

        & svg{
            margin: 0 0.5rem;
            transform: rotate(180deg);
        }
      `;
    case "bottomRight":
      return `
        flex-direction: column-reverse;
        align-items: end;

        & svg{
            margin: 0 0.5rem;
            transform: rotate(180deg);
        }
      `;
    case "leftTop":
    case "left":
    case "leftBottom":
      return `
        flex-direction: row;
          align-items: center;

        & svg{
            
            margin-left: -0.2rem;
            transform: rotate(270deg);
        }
      `;
    case "rightTop":
    case "right":
    case "rightBottom":
      return `
      flex-direction: row-reverse;
      align-items: center;   

        & svg{
            margin-right: -0.2rem;
            transform: rotate(90deg);
        }
      `;
    case "topLeft":
      return `
        flex-direction: column;
        align-items: start;

        & svg{
            margin: 0 0.5rem;
        }
      `;
    case "top":
      return `
        flex-direction: column;
        align-items: center;

        & svg{
            margin: 0 0.5rem;
        }
      `;
    case "topRight":
      return `
        flex-direction: column;
        align-items: end;

        & svg{
            margin: 0 0.5rem;
        }
      `;
    default:
      return `
        flex-direction: column;
        align-items: start;

        & img{
            padding: 0 0.5rem;
        }
      `;
  }
};

export const generateTooltipPosition = (placement, rect) => {
  placement = generatePlacementByRect(placement, rect);
  switch (placement) {
    case "bottomLeft":
      return `
        top: ${rect.height - 5}px;
        left: 0%;
      `;
    case "bottom":
      return `
        top: ${rect.height - 5}px;
        left: 50%;
        transform: translateX(-50%);
      `;
    case "bottomRight":
      return `
         top: ${rect.height - 5}px;
         right: 0%;
      `;
    case "leftTop":
      return `
        right: ${rect.width}px;
        top: 0%;
      `;
    case "left":
      return `
        right: ${rect.width}px;
        top: 50%;
        transform: translateY(-50%);
      `;
    case "leftBottom":
      return `
        right: ${rect.width}px;
        bottom: 0%;
      `;
    case "rightTop":
      return `
        left: ${rect.width}px;
        top: 0%;
      `;
    case "right":
      return `
        left: ${rect.width}px;
        top: 50%;
        transform: translateY(-50%);
      `;
    case "rightBottom":
      return `
        left: ${rect.width}px;
        bottom: 0%;
      `;
    case "topLeft":
      return `
        bottom: ${rect.height + 5}px;
        left: 0%;
      `;
    case "top":
      return `
        bottom: ${rect.height + 5}px;
        left: 50%;
        transform: translateX(-50%);
      `;
    case "topRight":
      return `
        bottom: ${rect.height + 5}px;
        right: 0%;
      `;
    default:
      return `
        bottom: ${rect.height + 5}px;
        left: 50%;
        transform: translateX(-50%);
      `;
  }
};
