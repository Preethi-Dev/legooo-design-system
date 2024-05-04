export const generateBadgeBgColor = (status) => {
  switch (status) {
    case "success":
      return "Badge-colorSuccess";
    case "error":
      return "Badge-colorError";
    case "processing":
      return "Badge-colorPrimary";
    case "warning":
      return "Badge-colorWarning";
    default:
      return "Badge-colorTextPlaceholder";
  }
};
