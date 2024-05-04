import Avatar from "./Avatar";
import Badge from "../Badge";
import { generateIconNames } from "../Button";
import { AvatarGroup } from "./AvatarGroup";
import { AVATAR_IMG_URL } from "./Avatar.constants";

export default {
  title: "Components/Avatar",
  component: Avatar,
};

export const Basic = {
  argTypes: {
    type: {
      control: "inline-radio",
      options: ["icon", "text", "image"],
    },
    src: {
      control: "text",
      if: { arg: "type", eq: "image" },
    },
    $text: {
      control: "text",
      if: { arg: "type", eq: "text" },
    },
    $icon: {
      control: "select",
      options: generateIconNames(),
      if: { arg: "type", eq: "icon" },
    },
    shape: {
      control: "inline-radio",
      options: ["circle", "square"],
    },
  },
  args: {
    type: "image",
    size: "medium",
    shape: "circle",
    $text: "k",
    $icon: "UserOutlined",
  },

  render: (props) => <Avatar {...props}></Avatar>,
};

export const Group = {
  render: () => (
    <AvatarGroup>
      <Avatar
        $text="L"
        size="medium"
        type="text"
        style={{ backgroundColor: "#FF4D4F", color: "#fff" }}
      />
      <Avatar size="medium" src={AVATAR_IMG_URL} />
      <Avatar
        $text="k"
        size="medium"
        type="text"
        style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
      />
    </AvatarGroup>
  ),
};

export const WithBadge = {
  render: () => (
    <div style={{ display: "inline-flex", gap: "1rem", alignItems: "center" }}>
      <Badge $count={2} $status="error" size="small">
        <Avatar $icon="UserOutlined" size="large" type="icon" />
      </Badge>
      <Badge $count={2} $status="error" size="small" $dot>
        <Avatar $icon="UserOutlined" size="medium" type="icon" />
      </Badge>
    </div>
  ),
};
