import { Link } from "./Link";
import { generateIconNames } from "../Button";
import Breadcrumb from "./Breadcrumb";

export default {
  title: "components/Breadcrumb",
  component: Breadcrumb,
};

const items = [
  { title: "Home", icon: "HomeOutlined", dropdown: false },
  { title: "User1", href: "#" },
  { title: "dashboard", href: "https://react.dev/" },
];

const itemsMoreThan4 = [
  { title: "Home", icon: "HomeOutlined", dropdown: false },
  { title: "Catalog", href: "#" },
  { title: "Accessories", href: "#" },
  { title: "New Collection", href: "#" },
  { title: "Belts", href: "#" },
];

export const Basic = {
  argTypes: {
    $separator: {
      control: "text",
    },
    $showLastSeparator: {
      control: "boolean",
    },
  },

  args: {
    $separator: "/",
    $showLastSeparator: false,
    $items: items,
  },
};

export const Collapsed = {
  argTypes: Basic.argTypes,

  args: { ...Basic.arg, $items: itemsMoreThan4 },
};

export const BreadcrumbItem = {
  parameters: {
    controls: { exclude: ["$items", "$separator", "$showLastSeparator"] },
  },
  argTypes: {
    /**
     * Turn on icon
     */
    $icon: {
      control: "boolean",
    },
    /**
     * Set custom icon
     */
    $setIcon: {
      if: { arg: "$icon", truthy: true },
      control: "select",
      options: generateIconNames(),
    },
    /**
     * Turn on label
     */
    $text: {
      control: "boolean",
    },
    /**
     * Set Link text
     */
    $setText: {
      if: { arg: "$text", truthy: true },
      control: "text",
    },
    /**
     * Turn on dropdown
     */
    href: {
      control: "text",
    },
  },
  args: {
    $text: true,
    $setText: "Users",
    $icon: true,
    $setIcon: "UserOutlined",
    $dropdown: true,
    href: "https://react.dev/",
  },
  render: ({ $text, $setText, $icon, $setIcon, $dropdown, href }) => (
    <Link
      $text={$text}
      $setText={$setText}
      $icon={$icon}
      $setIcon={$setIcon}
      $dropdown={$dropdown}
      href={href}
    ></Link>
  ),
};
