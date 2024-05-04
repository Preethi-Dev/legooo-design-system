import Badge from "./Badge";
import { Dot } from "./Dot";
import { BadgeExample } from "./BadgeExample";
import { NotificationOutlined } from "@ant-design/icons";

export default {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
};

export const Standalone = {
  argTypes: {
    $status: {
      control: "select",
      options: ["success", "error", "default", "warning", "processing"],
    },
    color: {
      control: {
        type: "color",
        presetColors: [
          "rgba(255, 133, 192, 1)",
          "rgba(255, 77, 79, 1)",
          "rgba(250, 219, 20, 1)",
          "rgba(250, 140, 22, 1)",
          "rgba(19, 194, 194, 1)",
          "rgba(82, 196, 26, 1)",
          "rgba(24, 144, 255, 1)",
          "rgba(114, 46, 209, 1)",
          "rgba(47, 84, 235, 1)",
          "rgba(235, 47, 150, 1)",
          "rgba(250, 84, 28, 1)",
          "rgba(250, 173, 20, 1)",
          "rgba(160, 217, 17, 1)",
          "rgba(217, 217, 217, 1)",
          "rgba(24, 144, 255, 1)",
        ],
      },
    },
  },
  args: {
    $status: "success",
  },
  render: (props) => (
    <div style={{ display: "inline-flex", position: "relative" }}>
      <Dot {...props} />
    </div>
  ),
};

export const Basic = {
  argTypes: {
    $count: "number",
    $overflowCount: { control: "number" },
    $dot: { control: "boolean" },
    size: {
      type: "inline-radio",
      options: ["default", "small"],
    },
    $status: Standalone.argTypes.$status,
    color: Standalone.argTypes.color,
    offset: { control: "array" },
  },
  args: {
    $count: 2,
    size: "default",
    $status: "error",
  },
};

export const OverflowCount = {
  argTypes: {
    $overflowCount: { control: "number" },
  },
  args: {
    $overflowCount: 10,
  },
  render: (props) => <BadgeExample {...props} />,
};

export const Example = {
  argTypes: {
    $dot: { control: "boolean" },
  },
  render: (props) => <BadgeExample {...props} />,
};

export const RedBadge = {
  parameters: {
    controls: {
      exclude: ["size"],
    },
  },

  argTypes: {
    color: Standalone.argTypes.color,
  },

  render: (props) => (
    <Badge $status={"error"} $dot offset={[1, 1]} color={props.color}>
      <NotificationOutlined style={{ fontSize: 16 }} />
    </Badge>
  ),
};
