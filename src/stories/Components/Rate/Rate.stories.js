import { SmileOutlined } from "@ant-design/icons";
import Rate from "./Rate";
import { RateStar } from "./RateStar";
import { ThemeProvider } from "styled-components";
import * as myThemes from "../../../tokens";

export default {
  title: "Components/Rate",
  component: Rate,
  parameters: {
    layout: "centered",
  },
};
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export const Basic = {
  parameters: {
    controls: {
      exclude: ["allowHalf", "disabled", "tooltips", "value", "character"],
    },
  },
  args: {
    count: 5,
  },
};

export const CopyWrite = {
  parameters: {
    controls: {
      exclude: ["allowHalf", "disabled", "count", "value", "character"],
    },
  },
  args: {
    tooltips: desc,
  },
};

export const ReadOnly = {
  parameters: {
    controls: {
      exclude: ["allowHalf", "tooltips", "count", "value", "character"],
    },
  },
  args: {
    value: 2,
    disabled: true,
  },
};

export const HalfStar = {
  parameters: {
    controls: {
      exclude: ["disabled", "tooltips", "count", "value", "character"],
    },
  },
  args: {
    value: 2,
    allowHalf: true,
  },
};

export const Custom = {
  parameters: {
    controls: {
      include: ["character", "$theme"],
    },
  },
  render: (props) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Rate character={"A"} value={2} $theme={props.$theme} />
      <Rate character={<SmileOutlined />} value={3} $theme={props.$theme} />
    </div>
  ),
};

export const Star = {
  parameters: {
    controls: {
      include: ["character"],
    },
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <RateStar />
    </ThemeProvider>
  ),
};
