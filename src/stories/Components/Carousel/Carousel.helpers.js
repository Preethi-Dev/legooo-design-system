export const generateSlickPosition = (position) => {
  switch (position) {
    case "Top":
      return `
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: row;
      `;
    case "Left":
      return `
      left: 0;
      top: 50%;
      transform: translateY(-50%);
       flex-direction: column;
      `;
    case "Bottom":
      return `
       bottom: 0;
      left: 50%;
      transform: translateX(-50%);
       flex-direction: row;
      `;
    case "Right":
      return `
      right: 0;
      top: 50%;
      transform: translateY(-50%);
       flex-direction: column;
      `;
    default:
      return `
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: row;
      `;
  }
};

export const generatePrevArrowPosition = (position) => {
  switch (position) {
    case "Top":
    case "Bottom":
      return `
      top: 50%;
  transform: translateY(-50%);
  left: 0;
      `;
    case "Left":
    case "Right":
      return `
      top: 0;
  transform: translateX(-50%);
  left: 50%;
      `;
    default:
      return `
      top: 50%;
  transform: translateY(-50%);
  left: 0;
      `;
  }
};

export const generateNextArrowPosition = (position) => {
  switch (position) {
    case "Top":
    case "Bottom":
      return `
      top: 50%;
  transform: translateY(-50%);
  right: 0;
      `;
    case "Left":
    case "Right":
      return `
      bottom: 0;
  transform: translateX(-50%);
  left: 50%;
      `;
    default:
      return `
      top: 50%;
  transform: translateY(-50%);
  right: 0;
      `;
  }
};
