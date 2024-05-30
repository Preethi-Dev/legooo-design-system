import Dropdown from "./Dropdown";
import { ButtonStories, generateIconNames } from "../Button";
import { DropdownMenuItem } from "./DropdownMenuItem";
import { DropdownMenu } from "./DropdownMenu";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

const menuItems = ["Menu Item 1", "Menu Item 2", "Menu Item 3", "Menu Item 4"];
const moreMenuItems = [
  "kurta",
  "shoes",
  "jeans",
  "t-shirt",
  "socks",
  "dress",
  "handbag",
  "earrings",
  "scarf",
  "sweater",
  "pants",
  "hat",
  "jacket",
  "boots",
];

export const Basic = {
  parameters: {
    controls: {
      exclude: ["$danger", "$shape", "$block", "$dropdown", "$type"],
    },
  },
  argTypes: {
    ...ButtonStories.default.argTypes,
    $placement: {
      control: "select",
      options: [
        "bottomLeft",
        "bottom",
        "bottomRight",
        "topLeft",
        "top",
        "topRight",
      ],
    },
  },
  args: {
    ...ButtonStories.default.args,
    $dropdown: true,
    $type: "Default",
    label: "Select an item",
    $items: menuItems,
  },
};

export const DropdownItem = {
  parameters: {
    controls: {
      exclude: ["$placement", "$theme"],
    },
  },
  argTypes: {
    label: {
      control: "text",
    },
    $arrow: {
      control: "boolean",
    },
    $icon: {
      control: "boolean",
    },
    $setIcon: {
      if: { arg: "$icon", truthy: true },
      control: "select",
      options: generateIconNames(),
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    label: "Select an item",
    $arrow: true,
    $icon: true,
    $setIcon: generateIconNames()[19],
    disabled: false,
  },

  render: ({ label, $selected, $arrow, $icon, $setIcon, disabled }) => (
    <DropdownMenuItem
      label={label}
      $selected={$selected}
      $arrow={$arrow}
      $icon={$icon}
      $setIcon={$setIcon}
      disabled={disabled}
    />
  ),
};

export const Menu = {
  parameters: {
    controls: {
      exclude: ["$theme"],
    },
  },
  argTypes: {
    /*
     * Arrow Placement
     */
    $placement: {
      control: "select",
      options: [
        "bottomLeft",
        "bottom",
        "bottomRight",
        "topLeft",
        "top",
        "topRight",
      ],
    },
  },
  args: {
    $placement: "bottom",
    $items: menuItems,
  },
  render: ({ $placement, $items }) => (
    <DropdownMenu $placement={$placement} $items={$items} />
  ),
};

export const Placements = {
  parameters: {
    controls: {
      exclude: [
        "$danger",
        "$shape",
        "$block",
        "$dropdown",
        "$type",
        "label",
        "$size",
        "disabled",
        "$icon",
        "$items",
        "$setIcon",
        "$theme",
      ],
    },
  },
  argTypes: {
    $placement: {
      control: "select",
      options: [
        "bottomLeft",
        "bottom",
        "bottomRight",
        "topLeft",
        "top",
        "topRight",
      ],
    },
  },
  args: {
    ...ButtonStories.default.args,
    $dropdown: true,
    $type: "Default",
    label: "custom position",
    $items: menuItems,
  },
};

export const Arrows = {
  parameters: {
    controls: {
      exclude: ["$items", "$theme"],
    },
  },
  argTypes: {
    /*
     * Arrow Placement
     */
    $placement: {
      control: "select",
      options: [
        "bottomLeft",
        "bottom",
        "bottomRight",
        "topLeft",
        "top",
        "topRight",
      ],
    },
  },
  args: {
    $placement: "bottom",
    $items: menuItems,
  },
  render: ({ $placement, $items }) => (
    <DropdownMenu $placement={$placement} $items={$items} />
  ),
};

export const ScrollMenu = {
  parameters: {
    controls: {
      exclude: ["$placement", "$theme"],
    },
  },
  argTypes: {
    /*
     * Arrow Placement
     */
    $placement: {
      control: "select",
      options: [
        "bottomLeft",
        "bottom",
        "bottomRight",
        "topLeft",
        "top",
        "topRight",
      ],
    },
  },
  args: {
    $placement: "bottom",
    $items: moreMenuItems,
  },
  render: ({ $placement, $items }) => (
    <DropdownMenu $placement={$placement} $items={$items} />
  ),
};
