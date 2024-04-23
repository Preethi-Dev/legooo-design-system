import Button from "./Button";
import { generateIconNames } from "./Button.helpers";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
    $type: "Primary",
    $shape: "Default",
    $size: "Default",
    $block: false,
    $danger: false,
    disabled: false,
    $icon: false,
    $setIcon: generateIconNames()[0],
  },
  argTypes: {
    $type: {
      control: "select",
      options: ["Primary", "Default", "Dashed", "Text", "Link"],
    },
    $shape: {
      control: "inline-radio",
      options: ["Default", "Round"],
    },
    $size: {
      control: "inline-radio",
      options: ["Default", "Small", "Large"],
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
      if: { arg: "$type", neq: "Link" },
      control: "boolean",
    },
  },
};

/**
 * indicate the main action, one primary button at most in one section
 */
export const Primary = {
  args: {
    $type: "Primary",
  },
};

/**
 * indicate a series of actions without priority
 */
export const Default = {
  args: {
    $type: "Default",
  },
};

/**
 * commonly used for adding more actions.
 */
export const Dashed = {
  args: {
    $type: "Dashed",
  },
};

/**
 * used for the most secondary action.
 */
export const Text = {
  args: {
    $type: "Text",
  },
};

/**
 * used for external links.
 */
export const Link = {
  args: {
    $type: "Link",
    href: "https://react.dev/",
  },
  argTypes: {
    href: {
      control: "text",
    },
  },
};

/**
 * used for the most secondary action.
 */
export const WithIcon = {
  args: {
    $type: "Primary",
    $icon: true,
    $setIcon: "AccountBookFilled",
  },
};

/**
 * Generated 120 Button variants for sample. It's variant possibility is more than that :)
 */
export const ButtonGroup = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {["Primary", "Default", "Dashed", "Text", "Link"].map((type) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button label={"Button"} $type={type} $size={"Small"} />

            <Button label={"Button"} $type={type} $size={"Default"} />

            <Button label={"Button"} $type={type} $size={"Large"} />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {["Primary", "Default", "Dashed", "Text", "Link"].map((type) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button
              label={"Button"}
              $type={type}
              $size={"Small"}
              $shape={"Round"}
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Default"}
              $shape={"Round"}
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Large"}
              $shape={"Round"}
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {["Primary", "Default", "Dashed", "Text", "Link"].map((type) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button
              label={"Button"}
              $type={type}
              $size={"Small"}
              $danger={true}
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Default"}
              $danger={true}
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Large"}
              $danger={true}
            />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {["Primary", "Default", "Dashed", "Text", "Link"].map((type) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button
              label={"Button"}
              $type={type}
              $size={"Small"}
              $shape={"Round"}
              $danger={true}
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Default"}
              $shape={"Round"}
              $danger={true}
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Large"}
              $shape={"Round"}
              $danger={true}
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {["Primary", "Default", "Dashed", "Text", "Link"].map((type) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button
              label={"Button"}
              $type={type}
              $size={"Small"}
              $icon
              $setIcon="AccountBookFilled"
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Default"}
              $icon
              $setIcon="AccountBookFilled"
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Large"}
              $icon
              $setIcon="AccountBookFilled"
            />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {["Primary", "Default", "Dashed", "Text", "Link"].map((type) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button
              label={"Button"}
              $type={type}
              $size={"Small"}
              $shape={"Round"}
              $icon
              $setIcon="AccountBookFilled"
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Default"}
              $shape={"Round"}
              $icon
              $setIcon="AccountBookFilled"
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Large"}
              $shape={"Round"}
              $icon
              $setIcon="AccountBookFilled"
            />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {["Primary", "Default", "Dashed", "Text", "Link"].map((type) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button
              label={"Button"}
              $type={type}
              $size={"Small"}
              $icon
              $setIcon="AccountBookFilled"
              $danger
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Default"}
              $icon
              $setIcon="AccountBookFilled"
              $danger
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Large"}
              $icon
              $setIcon="AccountBookFilled"
              $danger
            />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {["Primary", "Default", "Dashed", "Text", "Link"].map((type) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Button
              label={"Button"}
              $type={type}
              $size={"Small"}
              $shape={"Round"}
              $icon
              $setIcon="AccountBookFilled"
              $danger
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Default"}
              $shape={"Round"}
              $icon
              $setIcon="AccountBookFilled"
              $danger
            />

            <Button
              label={"Button"}
              $type={type}
              $size={"Large"}
              $shape={"Round"}
              $icon
              $setIcon="AccountBookFilled"
              $danger
            />
          </div>
        ))}
      </div>
    </div>
  ),
};
