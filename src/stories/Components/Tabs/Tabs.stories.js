import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tab } from "./Tab";
import Button from "../Button";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const items = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

export const Basic = {
  parameters: {
    controls: {
      include: ["items", "defaultActiveKey"],
    },
  },
  argTypes: {
    tabPosition: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    items: items,
    defaultActiveKey: "1",
    tabPosition: "horizontal",
  },
};

export const Centered = {
  parameters: {
    controls: {
      include: ["centered"],
    },
  },
  argTypes: {
    tabPosition: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    items: items,
    defaultActiveKey: "1",
    tabPosition: "horizontal",
    centered: true,
  },
};

const IconItems = [AppleOutlined, AndroidOutlined].map((Icon, i) => {
  const id = String(i + 1);
  return {
    key: id,
    label: `Tab ${id}`,
    children: `Tab ${id}`,
    icon: <Icon />,
  };
});

export const Icon = {
  parameters: {
    controls: {
      include: ["items"],
    },
  },
  args: {
    items: IconItems,
    defaultActiveKey: "2",
  },
  render: (props) => <Tabs {...props} />,
};

export const Position = {
  parameters: {
    controls: {
      include: ["tabPosition"],
    },
  },
  argTypes: {
    tabPosition: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    items: items,
    defaultActiveKey: "1",
    tabPosition: "vertical",
  },
};

export const ExtraContent = {
  parameters: {
    controls: {
      include: ["tabBarExtraContent"],
    },
  },
  argTypes: {
    tabPosition: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    items: items,
    defaultActiveKey: "1",
    tabPosition: "horizontal",
    tabBarExtraContent: {
      left: (
        <Button
          $shape="Default"
          $size="Default"
          $type="Default"
          label="Left Extra Content"
        />
      ),
      right: (
        <Button
          $shape="Default"
          $size="Default"
          $type="Default"
          label="Right Extra Content"
        />
      ),
    },
  },
};

export const HorizontalSlide = {
  parameters: {
    controls: {
      include: ["items"],
    },
  },
  args: {
    defaultActiveKey: "0",
    tabPosition: "horizontal",
    items: new Array(30).fill(null).map((_, i) => ({
      label: `Tab-${i}`,
      key: String(i),
      disabled: i === 28,
      children: `Content of tab ${i}`,
    })),
  },
  render: (props) => <Tabs {...props} />,
};

export const VerticalSlide = {
  parameters: {
    controls: {
      include: ["items"],
    },
  },
  args: {
    defaultActiveKey: "0",
    tabPosition: "vertical",
    items: new Array(30).fill(null).map((_, i) => ({
      label: `Tab-${i}`,
      key: String(i),
      disabled: i === 28,
      children: `Content of tab ${i}`,
    })),
  },
  render: (props) => <Tabs {...props} />,
};

export const Size = {
  parameters: {
    controls: {
      include: ["size"],
    },
  },
  argTypes: {
    tabPosition: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
    },
    size: {
      controls: "inline-radio",
      options: ["small", "medium", "large"],
    },
  },
  args: {
    items: items,
    defaultActiveKey: "1",
    tabPosition: "horizontal",
    size: "large",
  },
};

export const Atom = {
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"],
    },
    selected: {
      control: "boolean",
    },
  },
  args: {
    label: "Tab 1",
    size: "medium",
    icon: <AndroidOutlined />,
    selected: false,
  },
  render: (props) => <Tab {...props} />,
};
