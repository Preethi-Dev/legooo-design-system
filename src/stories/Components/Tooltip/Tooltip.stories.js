import Tooltip from "./Tooltip";
import { TooltipInner } from "./TooltipInner";
import Button from "../Button";
import { TooltipShift } from "./TooltipShift";
import { GlobalStyle } from "../../../utility";
import { nanoid } from "nanoid";

export default {
  title: "Components/Tooltip",
  component: Tooltip,

  argTypes: {
    placement: {
      control: "select",
      options: [
        "topLeft",
        "top",
        "topRight",
        "leftTop",
        "left",
        "leftBottom",
        "rightTop",
        "right",
        "rightBottom",
        "bottomLeft",
        "bottom",
        "bottomRight",
      ],
    },
    color: {
      control: "select",
      options: [
        "black",
        "pink",
        "red",
        "yellow",
        "orange",
        "cyan",
        "green",
        "blue",
        "purple",
        "geekblue",
        "magenta",
        "vocano",
        "gold",
        "lime",
      ],
    },
    open: {
      control: "boolean",
    },
  },
};

export const Basic = {
  parameters: {
    controls: {
      exclude: ["open"],
    },
  },
  args: { title: "prompt text", placement: "top", color: "black" },
  render: (props) => (
    <Tooltip {...props}>
      <GlobalStyle />
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  ),
};

export const Placement = {
  parameters: {
    layout: "centered",
  },
  render: ({ $theme }) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        minWidth: "400px",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", alignSelf: "center" }}>
        <Tooltip placement="topLeft" title={"prompt text"}>
          <Button $theme={$theme} label="TL" />
        </Tooltip>
        <Tooltip placement="top" title={"prompt text"}>
          <Button $theme={$theme} label="TOP" />
        </Tooltip>
        <Tooltip placement="topRight" title={"prompt text"}>
          <Button $theme={$theme} label="TR" />
        </Tooltip>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",

          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "1rem",
          }}
        >
          <Tooltip placement="leftTop" title={"prompt text"}>
            <Button $theme={$theme} label="LT" />
          </Tooltip>
          <Tooltip placement="left" title={"prompt text"}>
            <Button $theme={$theme} label="LEFT" />
          </Tooltip>
          <Tooltip placement="leftBottom" title={"prompt text"}>
            <Button $theme={$theme} label="LB" />
          </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            gap: "1rem",
          }}
        >
          <Tooltip placement="rightTop" title={"prompt text"}>
            <Button $theme={$theme} label="RT" />
          </Tooltip>
          <Tooltip placement="right" title={"prompt text"}>
            <Button $theme={$theme} label="RIGHT" />
          </Tooltip>
          <Tooltip placement="rightBottom" title={"prompt text"}>
            <Button $theme={$theme} label="RB" />
          </Tooltip>
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem", alignSelf: "center" }}>
        <Tooltip placement="bottomLeft" title={"prompt text"}>
          <Button $theme={$theme} label="BL" />
        </Tooltip>
        <Tooltip placement="bottom" title={"prompt text"}>
          <Button $theme={$theme} label="BOTTOM" />
        </Tooltip>
        <Tooltip placement="bottomRight" title={"prompt text"}>
          <Button $theme={$theme} label="BR" />
        </Tooltip>
      </div>
    </div>
  ),
};

const colors = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "vocano",
  "gold",
  "lime",
  "#f50",
  "#2db7f5",
  "#87d068",
  "#108ee9",
];

export const Color = {
  render: ({ $theme }) => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {colors.map((color) => (
        <Tooltip
          placement="bottomLeft"
          title={"prompt text"}
          color={color}
          key={nanoid()}
        >
          <Button $theme={$theme} label={color} />
        </Tooltip>
      ))}
    </div>
  ),
};

export const ToolTip = {
  parameters: {
    controls: {
      exclude: ["open", "$theme"],
    },
  },
  argTypes: Basic.argTypes,
  args: {
    placement: "top",
    title: "prompt text",
    color: "green",
  },
  render: (props) => <TooltipInner {...props} />,
};

export const AutoShift = {
  parameters: {
    controls: {
      exclude: ["$theme"],
    },
  },
  args: { ...Basic.args, open: false },
  render: (props) => <TooltipShift {...props} />,
};

export const Open = {
  parameters: {
    controls: {
      exclude: ["open", "color", "placement", "title", "$theme"],
    },
  },
  args: {
    title: "prompt text",
    placement: "right",
    color: "black",
    open: true,
  },
  render: (props) => (
    <Tooltip {...props}>
      <GlobalStyle />
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  ),
};
