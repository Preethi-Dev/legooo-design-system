import Skeleton from "./Skeleton";

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
  ),
};

export const SkeletonAvatar = {
  parameters: {
    controls: {
      include: ["active", "shape"],
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
  render: (props) => <Skeleton.Avatar {...props} />,
};

export const SkeletonButton = {
  parameters: {
    controls: {
      include: ["active", "block"],
    },
  },
  args: {
    shape: "square",
    block: false,
  },
  render: (props) => <Skeleton.Button {...props} />,
};

export const SkeletonInput = {
  parameters: {
    controls: {
      include: ["active"],
    },
  },
  render: (props) => <Skeleton.Input {...props} />,
};

export const SkeletonParagraph = {
  parameters: {
    controls: {
      include: ["active", "rows"],
    },
  },
  args: {
    rows: 3,
  },
  render: (props) => <Skeleton.Paragraph {...props} />,
};

export const SkeletonTitle = {
  parameters: {
    controls: {
      include: ["active"],
    },
  },
  render: (props) => <Skeleton.Title {...props} />,
};

export const SkeletonImage = {
  parameters: {
    controls: {
      include: ["active"],
    },
  },
  render: (props) => <Skeleton.Image {...props} />,
};
