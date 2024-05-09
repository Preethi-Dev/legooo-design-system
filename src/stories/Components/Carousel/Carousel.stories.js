import { Slick } from "./Slick";
import Carousel from "./Carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
  args: {
    $dimension: ["100%", "160px"],
  },
};

export const Example = {
  argTypes: {
    $dotPosition: {
      control: "select",
      options: ["Top", "Left", "Bottom", "Right"],
    },
    autoPlay: {
      control: "boolean",
    },
    arrows: {
      control: "boolean",
    },
  },
  args: {
    arrows: true,
    $dotPosition: "Bottom",
    autoPlay: false,
    $dimension: ["800px", "400px"],
  },
  render: (props) => (
    <Carousel {...props}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
    </Carousel>
  ),
};

export const Basic = {
  argTypes: {
    $dotPosition: {
      control: "select",
      options: ["Top", "Left", "Bottom", "Right"],
    },
    autoPlay: {
      control: "boolean",
    },
    arrows: {
      control: "boolean",
    },
  },
  render: (props) => (
    <Carousel {...props}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  ),
};

export const Position = {
  parameters: {
    controls: {
      exclude: ["arrows", "autoPlay", "$dimension"],
    },
  },
  argTypes: Basic.argTypes,
  args: {
    $dotPosition: "Left",
  },
  render: (props) => (
    <Carousel {...props}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  ),
};

export const AutoPlay = {
  parameters: {
    controls: {
      exclude: ["arrows", "$dotPosition", "$dimension"],
    },
  },
  argTypes: Basic.argTypes,
  args: {
    autoPlay: true,
  },
  render: (props) => (
    <Carousel {...props}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  ),
};

export const Arrows = {
  parameters: {
    controls: {
      exclude: ["autoPlay", "$dotPosition", "$dimension"],
    },
  },
  argTypes: Basic.argTypes,
  args: {
    arrows: true,
  },
  render: (props) => (
    <Carousel {...props}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  ),
};

export const SlickDot = {
  parameters: {
    controls: {
      exclude: ["arrows", "autoPlay", "$dotPosition", "$dimension"],
    },
  },
  args: {
    $active: true,
    $dotPosition: "Bottom",
  },
  render: (props) => (
    <div
      style={{
        background: "lightblue",
        padding: "5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Slick {...props} />
    </div>
  ),
};
