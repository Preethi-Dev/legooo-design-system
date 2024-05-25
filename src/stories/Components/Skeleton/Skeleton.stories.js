import Skeleton from "./Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
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
  args: {
    active: true,
  },
};

export const Example = {
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
