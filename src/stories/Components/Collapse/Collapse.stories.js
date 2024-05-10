import Collapse from "./Collapse";
import { CollapseItem } from "./CollapseItem";
import { generateIconNames } from "../Button";

export default {
  title: "Components/Collapse",
  component: Collapse,
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const nestItem = [
  {
    key: "1",
    label: "This is panel nest panel",
    children: <p>{text}</p>,
  },
];

const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const nestItems = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <Collapse defaultActiveKey="1" items={nestItem} />,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

export const Basic = {
  parameters: {
    controls: {
      exclude: ["$bordered", "accordion", "showArrow"],
    },
  },
  argTypes: {
    $bordered: {
      control: "boolean",
    },
    accordion: {
      control: "boolean",
    },
    showArrow: {
      control: "boolean",
    },
  },
  args: {
    items: items,
    defaultActiveKey: ["1"],
    accordion: false,
    $bordered: true,
    showArrow: true,
  },
};

export const Accordion = {
  parameters: {
    controls: {
      exclude: ["$bordered", "showArrow", "items", "defaultActiveKey"],
    },
  },
  argTypes: {
    accordion: {
      control: "boolean",
    },
  },
  args: {
    items: items,
    defaultActiveKey: [],
    accordion: true,
    $bordered: true,
    showArrow: true,
  },
};

export const Nested = {
  parameters: {
    controls: {
      exclude: ["$bordered", "showArrow", "accordion", "defaultActiveKey"],
    },
  },

  args: {
    items: nestItems,
    defaultActiveKey: ["1"],
    accordion: false,
    $bordered: true,
    showArrow: true,
  },
};

export const Borderless = {
  parameters: {
    controls: {
      exclude: ["items", "showArrow", "accordion", "defaultActiveKey"],
    },
  },

  args: {
    items: items,
    defaultActiveKey: ["1"],
    accordion: false,
    $bordered: false,
    showArrow: true,
  },
};

export const NoArrow = {
  parameters: {
    controls: {
      exclude: ["items", "$bordered", "accordion", "defaultActiveKey"],
    },
  },

  args: {
    items: items,
    defaultActiveKey: ["1"],
    accordion: false,
    $bordered: true,
    showArrow: false,
  },
};

export const Item = {
  parameters: {
    controls: {
      exclude: ["items", "accordion", "defaultActiveKey"],
    },
  },
  argTypes: {
    text: {
      control: "text",
    },
    icon: {
      control: "select",
      options: generateIconNames(),
    },
    ...Basic.argTypes,
  },
  args: {
    text: "This is panel header 1",
    icon: "RightOutlined",
    content: <p>This is content</p>,
  },
  render: (props) => <CollapseItem {...props} />,
};
