import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MinusCircleOutlined,
  SyncOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Tag from "./Tag";
import { TagGenerator } from "./TagGenerator";
import { TagPlus } from "./TagPlus";
import { ThemeProvider } from "styled-components";
import * as myThemes from "../../../tokens";

export default {
  title: "Components/Tag",
  component: Tag,
};

export const Basic = {
  argTypes: {
    color: {
      control: "select",
      options: ["default", "success", "processing", "error", "warning"],
    },
    $bordered: {
      control: "boolean",
    },
    $checkableTag: {
      control: "boolean",
    },
  },
  args: {
    closeIcon: true,
    color: "default",
    $bordered: true,
    $checkableTag: false,
  },
  render: (props) => <Tag {...props}>Tag 1</Tag>,
};

export const AddTag = {
  render: ({ $theme }) => (
    <ThemeProvider theme={myThemes[$theme]}>
      <TagPlus />
    </ThemeProvider>
  ),
};

export const StatusTag = {
  args: { ...Basic.args, closeIcon: false },
  render: (props) => (
    <div style={{ display: "flex", gap: ".5rem" }}>
      <Tag {...props} color={"success"} icon={<CheckCircleOutlined />}>
        success
      </Tag>
      <Tag {...props} icon={<SyncOutlined spin />} color="processing">
        processing
      </Tag>
      <Tag {...props} icon={<CloseCircleOutlined />} color="error">
        error
      </Tag>
      <Tag {...props} icon={<ExclamationCircleOutlined />} color="warning">
        warning
      </Tag>
      <Tag {...props} icon={<ClockCircleOutlined />} color="default">
        waiting
      </Tag>
      <Tag {...props} icon={<MinusCircleOutlined />} color="default">
        stop
      </Tag>
    </div>
  ),
};

export const Icon = {
  args: { ...Basic.args, closeIcon: false },
  render: (props) => (
    <div style={{ display: "flex", gap: ".5rem" }}>
      <Tag {...props} icon={<TwitterOutlined />} color="#55acee">
        Twitter
      </Tag>
      <Tag {...props} icon={<YoutubeOutlined />} color="#cd201f">
        Youtube
      </Tag>
      <Tag {...props} icon={<FacebookOutlined />} color="#3b5999">
        Facebook
      </Tag>
      <Tag {...props} icon={<LinkedinOutlined />} color="#55acee">
        LinkedIn
      </Tag>
    </div>
  ),
};

export const Borderless = {
  args: { ...Basic.args, closeIcon: false },
  render: (props) => (
    <div style={{ display: "flex", gap: ".5rem" }}>
      <Tag {...props} color="default" $bordered={false}>
        Tag 1
      </Tag>
      <Tag {...props} color="default" $bordered={false}>
        Tag 2
      </Tag>
      <Tag {...props} color="default" closeIcon={true} $bordered={false}>
        Tag 3
      </Tag>
    </div>
  ),
};

export const Checkable = {
  args: { ...Basic.args, closeIcon: false, $checkableTag: true },
  render: (props) => (
    <div style={{ display: "flex", gap: ".5rem" }}>
      <Tag {...props} color="default" checked={true}>
        Movies
      </Tag>
      <Tag {...props} color="default">
        Book
      </Tag>
      <Tag {...props} color="default">
        Music
      </Tag>
    </div>
  ),
};

export const Dynamic = {
  render: ({ $theme }) => (
    <ThemeProvider theme={myThemes[$theme]}>
      <TagGenerator $theme={$theme} />
    </ThemeProvider>
  ),
};
