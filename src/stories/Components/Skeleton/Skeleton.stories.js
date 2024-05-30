import { ThemeProvider } from "styled-components";
import Skeleton from "./Skeleton";
import * as myThemes from "../../../tokens";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  args: {
    active: false,
  },
};

export const Basic = {};

export const Complex = {
  args: {
    paragraph: {
      rows: 4,
    },
    avatar: true,
  },
};

export const ActiveAnimation = {
  parameters: {
    controls: {
      exclude: ["$theme"],
    },
  },
  args: {
    active: true,
  },
};

export const Example = {
  parameters: {
    controls: {
      exclude: ["$theme"],
    },
  },
  args: {
    active: true,
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          maxWidth: "20rem",
        }}
      >
        <div style={{ alignSelf: "start" }}>
          <Skeleton.Image {...props} />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Skeleton.Paragraph {...props} />
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "1rem",
            }}
          >
            <Skeleton.Button {...props} />
            <Skeleton.Button {...props} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const SkeletonAvatar = {
  parameters: {
    controls: {
      include: ["active", "shape", "$theme"],
    },
  },
  argTypes: {
    shape: {
      control: "radio",
      options: ["circle", "square"],
    },
  },
  args: {
    shape: "square",
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <Skeleton.Avatar {...props} />
    </ThemeProvider>
  ),
};

export const SkeletonButton = {
  parameters: {
    controls: {
      include: ["active", "block", "$theme"],
    },
  },
  args: {
    shape: "square",
    block: false,
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <Skeleton.Button {...props} />
    </ThemeProvider>
  ),
};

export const SkeletonInput = {
  parameters: {
    controls: {
      include: ["active", "$theme"],
    },
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <Skeleton.Input {...props} />
    </ThemeProvider>
  ),
};

export const SkeletonParagraph = {
  parameters: {
    controls: {
      include: ["active", "rows", "$theme"],
    },
  },
  args: {
    rows: 3,
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <Skeleton.Paragraph {...props} />
    </ThemeProvider>
  ),
};

export const SkeletonTitle = {
  parameters: {
    controls: {
      include: ["active", "$theme"],
    },
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <Skeleton.Title {...props} />
    </ThemeProvider>
  ),
};

export const SkeletonImage = {
  parameters: {
    controls: {
      include: ["active", "$theme"],
    },
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <Skeleton.Image {...props} />
    </ThemeProvider>
  ),
};
