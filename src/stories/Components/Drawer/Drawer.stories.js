import { useState } from "react";
import Drawer from "./Drawer";
import Button from "../Button";

export default {
  title: "Components/Drawer",
  component: Drawer,
};

export const Basic = {
  parameters: {
    controls: {
      include: ["title", "size", "closable"],
    },
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    size: {
      control: "radio",
      options: ["default", "large"],
    },
  },
  args: {
    title: "Basic Drawer",
    size: "default",
    placement: "right",
    closable: true,
  },
  render: (props) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div style={{ minHeight: "50vh" }}>
        <div onClick={showDrawer}>
          <Button
            $shape="Default"
            $size="Default"
            $type="Primary"
            label="Open"
          />
        </div>
        <Drawer open={open} onClose={onClose} {...props}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  },
};

export const Custom = {
  parameters: {
    controls: {
      include: ["placement"],
    },
  },
  argTypes: Basic.argTypes,
  args: {
    title: "Basic Drawer",
    size: "default",
    placement: "top",
    closable: false,
  },
  render: (props) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div style={{ minHeight: "50vh" }}>
        <div onClick={showDrawer}>
          <Button
            $shape="Default"
            $size="Default"
            $type="Primary"
            label="Open"
          />
        </div>
        <Drawer open={open} onClose={onClose} {...props}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  },
};

export const Extra = {
  parameters: {
    controls: {
      include: ["extra"],
    },
  },
  argTypes: Basic.argTypes,
  args: {
    title: "Basic Drawer",
    size: "default",
    placement: "right",
    closable: false,
    extra: (
      <div style={{ display: "flex", gap: ".75rem" }}>
        <Button
          $shape="Default"
          $size="Default"
          $type="Default"
          label="Cancel"
        />
        <Button $shape="Default" $size="Default" $type="Primary" label="OK" />
      </div>
    ),
  },
  render: (props) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div style={{ minHeight: "50vh" }}>
        <div onClick={showDrawer}>
          <Button
            $shape="Default"
            $size="Default"
            $type="Primary"
            label="Open"
          />
        </div>
        <Drawer open={open} onClose={onClose} {...props}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  },
};

export const Preset = {
  parameters: {
    controls: {
      include: [""],
    },
  },
  argTypes: Basic.argTypes,
  args: {
    title: "Basic Drawer",
    placement: "right",
    closable: false,
  },
  render: (props) => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState(null);

    const showDefaultDrawer = () => {
      setOpen(true);
      setSize("default");
    };

    const showLargeDrawer = () => {
      setOpen(true);
      setSize("large");
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <div style={{ minHeight: "50vh" }}>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <div onClick={showDefaultDrawer}>
            <Button
              $shape="Default"
              $size="Default"
              $type="Primary"
              label="Open Default Size (378px)"
            />
          </div>
          <div onClick={showLargeDrawer}>
            <Button
              $shape="Default"
              $size="Default"
              $type="Primary"
              label="Open Large Size (736px)"
            />
          </div>
        </div>
        <Drawer open={open} size={size} onClose={onClose} {...props}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  },
};
