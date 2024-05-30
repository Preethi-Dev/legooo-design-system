import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Card from "./Card";
import { CardHead } from "./CardHead";
import { CardActions } from "./CardActions";
import { Meta } from "./Meta";
import { CARD_IMG_URL } from "./Card.helpers";
import { ThemeProvider } from "styled-components";
import * as myThemes from "../../../tokens";

export default {
  title: "Components/Card",
  component: Card,
  render: (props) => (
    <Card {...props}>
      <Meta title={"Europe Street beat"} description={"www.instagram.com"} />
    </Card>
  ),
};

export const BasicCard = {
  render: (props) => (
    <Card
      $title="Default size card"
      $extra={<a href="#">More</a>}
      $bordered
      {...props}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  ),
};

export const SimpleCard = {
  render: (props) => (
    <Card $bordered {...props}>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  ),
};

export const CustomizedCard = {
  argTypes: {
    $size: {
      control: "inline-radio",
      options: ["small", "default"],
    },
    $bordered: {
      control: "boolean",
    },
    $head: {
      control: "boolean",
    },
    $title: {
      control: "text",
      if: { arg: "$head" },
    },
    $extra: {
      if: { arg: "$head" },
    },
    $setCover: {
      control: "boolean",
    },
    $cover: {
      if: { arg: "$setCover" },
    },
    $setActions: {
      control: "boolean",
    },
    $actions: {
      if: { arg: "$setActions" },
    },
  },
  args: {
    $size: "default",
    $bordered: true,
    $setCover: true,
    $cover: <img src={CARD_IMG_URL} alt="example" />,
    $title: "Card Title",
    $extra: <a href="#">More</a>,
    $actions: [
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ],
  },
};

export const MoreConfigurationCard = {
  argTypes: {
    $size: {
      control: "inline-radio",
      options: ["small", "default"],
    },
    $bordered: {
      control: "boolean",
    },
    $head: {
      control: "boolean",
    },
    $title: {
      control: "text",
      if: { arg: "$head" },
    },
    $extra: {
      if: { arg: "$head" },
    },
    $setCover: {
      control: "boolean",
    },
    $cover: {
      if: { arg: "$setCover" },
    },
    $setActions: {
      control: "boolean",
    },
    $actions: {
      if: { arg: "$setActions" },
    },
  },
  args: {
    $size: "default",
    $bordered: true,
    $head: true,
    $title: "Card Title",
    $extra: <a href="#">More</a>,
    $setCover: true,
    $cover: <img src={CARD_IMG_URL} alt="example" />,
    $setActions: true,
    $actions: [
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ],
  },
};

export const Head = {
  args: {
    $title: "Card Title",
    $extra: <a href="#">More</a>,
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <CardHead {...props} />
    </ThemeProvider>
  ),
};

export const Actions = {
  args: {
    $actions: [
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ],
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <CardActions {...props} />
    </ThemeProvider>
  ),
};

export const Content = {
  args: {
    title: "Europe Street beat",
    description: "www.instagram.com",
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <Meta {...props} />
    </ThemeProvider>
  ),
};
