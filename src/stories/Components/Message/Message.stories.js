import { StopOutlined } from "@ant-design/icons";
import { Atom } from "./Atom";
import Message from "./Message";
import { StackMessages } from "./StackMessages";

export default {
  title: "Components/Message",
  component: Message,
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "error", "warning", "loading"],
    },
  },
  args: {
    content: "This is a message",
    type: "info",
  },
};

export const Basic = {
  parameters: {
    controls: {
      exclude: ["duration"],
    },
  },
  render: (props) => <Atom {...props} />,
};

export const Custom = {
  parameters: {
    controls: {
      include: ["icon"],
    },
  },
  args: {
    type: "error",
    icon: <StopOutlined />,
    content: "Not allowed",
  },
  render: (props) => <Atom {...props} />,
};

export const NormalMessage = {
  args: {
    duration: 3,
  },
  render: (props) => (
    <div style={{ height: "10vh" }}>
      <Message {...props} />
    </div>
  ),
};

export const CustomDuration = {
  parameters: {
    controls: {
      include: ["duration"],
    },
  },
  args: {
    content:
      "This is a prompt message for success, and it will disappear in 10 seconds",
    type: "success",
    duration: 10,
  },
  render: (props) => (
    <div style={{ height: "10vh" }}>
      <Message {...props} />
    </div>
  ),
};

export const Loading = {
  parameters: {
    controls: {
      include: ["type"],
    },
  },
  args: {
    content: "Action in progress.",
    type: "loading",
  },
  render: (props) => (
    <div style={{ height: "10vh" }}>
      <Message {...props} />
    </div>
  ),
};

export const Example = {
  render: () => (
    <div style={{ height: "20vh" }}>
      <StackMessages />
    </div>
  ),
};
