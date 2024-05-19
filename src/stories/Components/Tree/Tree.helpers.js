import {
  CaretDownFilled,
  CaretRightFilled,
  DownOutlined,
  MinusCircleOutlined,
  PlusSquareOutlined,
  RightOutlined,
} from "@ant-design/icons";

export const generateTreeSwitcher = ({ type, expanded }) => {
  switch (type) {
    case "square":
      return expanded ? <MinusCircleOutlined /> : <PlusSquareOutlined />;
    case "cheveron":
      return expanded ? <DownOutlined /> : <RightOutlined />;
    default:
    case "caret":
      return expanded ? <CaretDownFilled /> : <CaretRightFilled />;
  }
};

export const findKey = (data, defaultExpandedKeys) => {
  if (defaultExpandedKeys.includes(data.key)) {
    return true;
  } else {
    if (data.children) {
      for (const childData of data.children) {
        return findKey(childData, defaultExpandedKeys);
      }
    } else {
      return false;
    }
  }
};
