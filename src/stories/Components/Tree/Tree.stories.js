import { FileOutlined } from "@ant-design/icons";
import Tree from "./Tree";
import { TreeNode } from "./TreeNode";
import { TreeSwitcher } from "./TreeSwitcher";

export default {
  title: "Components/Tree",
  component: Tree,
};

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    icon: <FileOutlined />,
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        // disabled: true,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            // disableCheckbox: true,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: (
              <span
                style={{
                  color: "#1677ff",
                }}
              >
                sss
              </span>
            ),
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];

const complexTreeData = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          {
            title: "0-0-0-0",
            key: "0-0-0-0",
          },
          {
            title: "0-0-0-1",
            key: "0-0-0-1",
          },
          {
            title: "0-0-0-2",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          {
            title: "0-0-1-0",
            key: "0-0-1-0",
          },
          {
            title: "0-0-1-1",
            key: "0-0-1-1",
          },
          {
            title: "0-0-1-2",
            key: "0-0-1-2",
          },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      {
        title: "0-1-0-0",
        key: "0-1-0-0",
      },
      {
        title: "0-1-0-1",
        key: "0-1-0-1",
      },
      {
        title: "0-1-0-2",
        key: "0-1-0-2",
      },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
  },
];

export const Basic = {
  argTypes: {
    switcherIcon: {
      control: "select",
      options: ["square", "cheveron", "caret"],
    },
  },
  args: {
    treeData: treeData,
    switcherIcon: "caret",
    showIcon: true,
  },
};

export const Controlled = {
  parameters: {
    controls: {
      exclude: ["switcherIcon", "showIcon", "treeData"],
    },
  },
  argTypes: {
    switcherIcon: {
      control: "select",
      options: ["square", "cheveron", "caret"],
    },
  },
  args: {
    treeData: complexTreeData,
    defaultExpandedKeys: ["0-0-0"],
    switcherIcon: "square",
    showIcon: true,
  },
};

export const ChangeSwitcher = {
  parameters: {
    controls: {
      exclude: ["defaultExpandedKeys", "showIcon", "treeData"],
    },
  },
  argTypes: {
    switcherIcon: {
      control: "select",
      options: ["square", "cheveron", "caret"],
    },
  },
  args: {
    treeData: treeData,
    switcherIcon: "caret",
    showIcon: true,
  },
};

export const ToggleIcon = {
  parameters: {
    controls: {
      exclude: ["switcherIcon", "defaultExpandedKeys", "treeData"],
    },
  },
  argTypes: {
    switcherIcon: {
      control: "select",
      options: ["square", "cheveron", "caret"],
    },
  },
  args: {
    treeData: treeData,
    switcherIcon: "caret",
    showIcon: true,
  },
};

export const Switcher = {
  parameters: {
    controls: {
      exclude: ["switcherIcon", "defaultExpandedKeys", "treeData", "showIcon"],
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["square", "cheveron", "caret"],
    },
    expanded: {
      control: "boolean",
    },
  },
  args: {
    type: "square",
    expanded: false,
  },

  render: (props) => <TreeSwitcher {...props} />,
};

export const Node = {
  parameters: {
    controls: {
      exclude: ["switcherIcon", "defaultExpandedKeys", "treeData"],
    },
  },
  argTypes: {
    title: {
      control: "string",
    },
    showIcon: {
      control: "boolean",
    },
  },
  args: {
    title: "Parent 2",
    showIcon: true,
    icon: <FileOutlined />,
  },
  render: (props) => <TreeNode {...props} />,
};
