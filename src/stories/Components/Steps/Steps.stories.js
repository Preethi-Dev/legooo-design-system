import Steps from "./Steps";
import { StepsItem } from "./StepsItem";
import { StepsItemIcon } from "./StepsItemIcon";
import { StepsTail } from "./StepsTail";
import { generateIconNames } from "../Button";
import { generateIndex } from "./Steps.helpers";
import { ThemeProvider } from "styled-components";
import * as myThemes from "../../../tokens";

export default {
  title: "Components/Steps",
  component: Steps,
};

const items = [
  {
    title: "Welcome",
    status: "finished",
    description: "Complete introductory setup.",
  },
  {
    title: "Upload photo",
    status: "finished",
    description: "Awaiting action completion.",
  },
  {
    title: "Your details",
    status: "current",
    description: "Pending user informations.",
  },
  {
    title: "Invite users",
    status: "wait",
    description: "Pending action completion.",
  },
  {
    title: "Confirmation",
    status: "wait",
    description: "Awaiting final verification.",
  },
];

const itemsWithError = [
  {
    title: "Welcome",
    status: "finished",
    description: "Complete introductory setup.",
  },
  {
    title: "Upload photo",
    status: "finished",
    description: "Awaiting action completion.",
  },
  {
    title: "Your details",
    status: "error",
    description: "Pending user informations.",
  },
  {
    title: "Invite users",
    status: "wait",
    description: "Pending action completion.",
  },
  {
    title: "Confirmation",
    status: "wait",
    description: "Awaiting final verification.",
  },
];

const itemsWithIcon = [
  {
    title: "Login",
    status: "finished",
    icon: "UserOutlined",
  },
  {
    title: "Verification",
    status: "finished",
    icon: "SolutionOutlined",
  },
  {
    title: "Pay",
    status: "current",
    icon: "LoadingOutlined",
  },
  {
    title: "Done",
    status: "wait",
    icon: "CheckOutlined",
  },
];

export const Basic = {
  argTypes: {
    direction: { control: "inline-radio", options: ["vertical", "horizontal"] },
    current: {
      control: "select",
      options: generateIndex(items),
    },
    $progressDot: "boolean",
    size: {
      control: "inline-radio",
      options: ["small", "medium"],
    },
  },
  args: {
    items: items,
    direction: "horizontal",
    $progressDot: false,
    size: "medium",
  },
};

export const Mini = {
  parameters: {
    controls: { exclude: ["current", "items"] },
  },
  argTypes: {
    ...Basic.argTypes,
    size: { control: "inline-radio", options: ["small", "medium"] },
  },
  args: {
    ...Basic.args,
    size: "small",
  },
};

export const WithIcon = {
  parameters: {
    controls: {
      exclude: [Object.keys(Basic.argTypes), "size", "items"].flat(),
    },
  },
  args: { ...Basic.args, direction: "horizontal", items: itemsWithIcon },
};

export const Vertical = {
  parameters: {
    controls: {
      exclude: ["$progressDot", "current", "size", "items"],
      include: ["direction", "$theme"],
    },
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["vertical", "horizontal"] },
  },
  args: { ...Basic.args, direction: "vertical" },
};

export const VerticalMini = {
  parameters: {
    controls: { exclude: ["current", "items"] },
  },
  argTypes: {
    ...Basic.argTypes,
    size: { control: "inline-radio", options: ["small", "medium"] },
  },
  args: {
    ...Basic.args,
    size: "small",
    direction: "vertical",
  },
};

export const DotStyle = {
  parameters: {
    controls: {
      exclude: ["$progressDot", "current", "size", "items"],
      include: ["direction", "$theme"],
    },
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["vertical", "horizontal"] },
  },
  args: { ...Basic.args, $progressDot: true },
};

export const ErrorState = {
  parameters: {
    controls: {
      exclude: ["current", "size", "items"],
    },
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["vertical", "horizontal"] },
  },
  args: { ...Basic.args, items: itemsWithError, direction: "vertical" },
};

export const SwitchStep = {
  parameters: {
    controls: {
      exclude: ["$progressDot", "size", "items"],
    },
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["vertical", "horizontal"] },
    current: {
      control: "select",
      options: generateIndex(items),
    },
  },
  args: { ...Basic.args, current: 3, direction: "vertical" },
};

export const Item = {
  argTypes: {
    direction: { control: "inline-radio", options: ["vertical", "horizontal"] },
    size: { control: "inline-radio", options: ["small", "medium"] },
    $status: {
      control: "select",
      options: ["finished", "current", "error", "wait"],
    },
    description: "boolean",
    title: "boolean",
    setDescription: "text",
    setTitle: "text",
    tail: "boolean",
    icon: {
      control: "select",
      options: generateIconNames(),
    },
    $progressDot: "boolean",
  },
  args: {
    direction: "horizontal",
    size: "default",
    $status: "finished",
    title: true,
    setTitle: "Title",
    description: true,
    setDescription: "This is a description.",
    tail: true,
    $progressDot: true,
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <StepsItem {...props} />
    </ThemeProvider>
  ),
};

export const ItemIcon = {
  args: {
    $status: "finished",
    size: "small",
  },
  argTypes: {
    $status: {
      control: "select",
      options: ["finished", "current", "error", "wait"],
    },
    size: {
      control: "inline-radio",
      options: ["default", "small"],
    },
  },

  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <StepsItemIcon {...props} />
    </ThemeProvider>
  ),
};

export const Tail = {
  parameters: {
    controls: {
      exclude: ["size"],
    },
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["vertical", "horizontal"] },
  },
  args: {
    direction: "vertical",
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <StepsTail {...props} />
    </ThemeProvider>
  ),
};
