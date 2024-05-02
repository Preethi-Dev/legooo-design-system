import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export const generateStatusIcon = ({ $status, step }) => {
  switch ($status) {
    case "finished":
      return <CheckOutlined />;
    case "current":
    case "wait":
      return step || 2;
    case "error":
      return <CloseOutlined />;
    default:
      return step || 2;
  }
};

export const generateStatusBgColor = (status) => {
  switch (status) {
    case "finished":
      return "Steps-controlItemBgActive";
    case "current":
      return "Steps-colorPrimary";
    case "wait":
      return "Steps-colorSplit";
    case "error":
      return "Steps-colorError";
    default:
      return "Steps-colorPrimary";
  }
};

export const generateStatusFgColor = (status) => {
  switch (status) {
    case "current":
    case "error":
      return "Steps-colorBgContainer";
    case "finished":
      return "Steps-colorPrimary";
    case "wait":
      return "Steps-colorText";
    default:
      return "Steps-colorBgContainer";
  }
};

export const generateTitleColor = (status) => {
  switch (status) {
    case "finished":
    case "current":
      return "Steps-colorText";
    case "wait":
      return "Steps-colorTextDescription";
    case "error":
      return "Steps-colorError";
    default:
      return "Steps-colorText";
  }
};

export const generateIconColor = (status) => {
  switch (status) {
    case "finished":
    case "current":
      return "Steps-colorPrimary";
    case "wait":
      return "Steps-colorTextDescription";
    case "error":
      return "Steps-colorError";
    default:
      return "Steps-colorPrimary";
  }
};

export const generateDescriptionColor = (status) => {
  switch (status) {
    case "finished":
      return "Steps-colorTextDescription";
    case "current":
      return "Steps-colorText";
    case "wait":
      return "Steps-colorTextDescription";
    case "error":
      return "Steps-colorError";
    default:
      return "Steps-colorTextDescription";
  }
};

export const generateIndex = (items) => items.map((item, index) => index + 1);

export const findStatusByCurrent = (current, index) => {
  if (current === index) {
    return "current";
  } else if (index > current) {
    return "wait";
  } else if (index < current) {
    return "finished";
  } else {
    return undefined;
  }
};
