import Image from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  args: {
    $preview: true,
  },
};

export const Basic = {
  args: {
    width: "200px",
    height: "auto",
    alt: "A girl holding a coffee",
    src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    blur: false,
    download: true,
  },
  render: (props) => (
    <div style={{ minHeight: "100vh" }}>
      <Image {...props} />
    </div>
  ),
};

export const CustomPreview = {
  parameters: {
    controls: {
      exclude: [
        "width",
        "height",
        "alt",
        "src",
        "download",
        "blur",
        "$preview",
      ],
    },
  },
  args: {
    width: "200px",
    height: "auto",
    alt: "A girl holding a coffee",
    src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200",
    blur: false,
    download: true,
    preview: {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  },
  render: (props) => (
    <div style={{ minHeight: "100vh" }}>
      <Image {...props} />
    </div>
  ),
};

export const Fault = {
  args: {},
  render: (props) => (
    <div style={{ minHeight: "100vh" }}>
      <Image {...props} />
    </div>
  ),
};

export const DisablePreview = {
  parameters: {
    controls: {
      exclude: ["width", "height", "alt", "src", "download", "blur"],
    },
  },
  args: {
    width: "200px",
    height: "auto",
    alt: "A girl holding a coffee",
    src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    blur: false,
    download: true,
    $preview: false,
  },
  render: (props) => (
    <div style={{ minHeight: "100vh" }}>
      <Image {...props} />
    </div>
  ),
};

export const BlurImage = {
  parameters: {
    controls: {
      exclude: ["width", "height", "alt", "src", "download", "$preview"],
    },
  },
  args: {
    width: "200px",
    height: "auto",
    alt: "A girl holding a coffee",
    src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    blur: true,
    download: true,
  },
  render: (props) => (
    <div style={{ minHeight: "100vh" }}>
      <Image {...props} />
    </div>
  ),
};
