import {
  CheckCircleFilled,
  CloseCircleFilled,
  InfoCircleFilled,
  LoadingOutlined,
} from "@ant-design/icons";

export const generateIconByType = (type) => {
  switch (type) {
    case "info":
      return <InfoCircleFilled />;
    case "success":
      return <CheckCircleFilled />;
    case "warning":
      return <InfoCircleFilled />;
    case "error":
      return <CloseCircleFilled />;
    case "loading":
      return <LoadingOutlined />;
    default:
      return <InfoCircleFilled />;
  }
};

export const generateColorTokenByType = (type) => {
  switch (type) {
    case "info":
      return "Message-colorInfo";
    case "success":
      return "Message-colorSuccess";
    case "warning":
      return "Message-colorWarning";
    case "error":
      return "Message-colorError";
    case "loading":
      return "Message-colorInfo";
    default:
      return "Message-colorInfo";
  }
};
