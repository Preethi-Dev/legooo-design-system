export const generateColorForTag = (color) => {
  switch (color) {
    case "success":
      return "Tag-colorSuccess";
    case "processing":
      return `Tag-colorInfo`;
    case "error":
      return `Tag-colorError`;
    case "warning":
      return `Tag-colorWarning`;
    default:
      return `Tag-colorText`;
  }
};

export const generateBgForTag = (color) => {
  switch (color) {
    case "success":
      return "Tag-colorSuccessBg";
    case "processing":
      return `Tag-colorInfoBg`;
    case "error":
      return `Tag-colorErrorBg`;
    case "warning":
      return `Tag-colorWarningBg`;
    default:
      return `Tag-colorFillSecondary`;
  }
};

export const defaultColors = [
  "default",
  "success",
  "processing",
  "error",
  "warning",
];

export const generateBorderClrForTag = (color) => {
  switch (color) {
    case "success":
      return "Tag-colorSuccessBorder";
    case "processing":
      return `Tag-colorInfoBorder`;
    case "error":
      return `Tag-colorErrorBorder`;
    case "warning":
      return `Tag-colorWarningBorder`;
    default:
      return `Tag-colorBorder`;
  }
};
