import { nanoid } from "nanoid";
import React, { useState } from "react";
import { TreeNode } from "./TreeNode";
import styled from "styled-components";
import { TreeSwitcher } from "./TreeSwitcher";
import { findKey } from "./Tree.helpers";

const UL = styled.ul`
  list-style-type: none;
  margin-left: 1rem;
`;

const LI = styled.li`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
  margin: 0.025rem;
`;

const TreeSwitcherContainer = styled.div`
  cursor: pointer;
  min-width: 1.25rem;
`;

export const Node = ({ data, defaultExpandedKeys, switcherIcon, showIcon }) => {
  const [expanded, setExpanded] = useState(findKey(data, defaultExpandedKeys));
  const handleTreeSwitcher = (e) => {
    setExpanded(!expanded);
  };

  return (
    <UL key={nanoid()}>
      <LI>
        <TreeSwitcherContainer onClick={(e) => handleTreeSwitcher(e)}>
          {data.children && (
            <TreeSwitcher expanded={expanded} type={switcherIcon} />
          )}
        </TreeSwitcherContainer>

        <TreeNode
          title={data.title}
          icon={data.icon}
          showIcon={showIcon}
          disabled={Boolean(data.disabled)}
        />
      </LI>
      {data.children &&
        expanded &&
        data.children.map((data) => (
          <Node
            data={data}
            defaultExpandedKeys={defaultExpandedKeys}
            switcherIcon={switcherIcon}
            key={nanoid()}
          />
        ))}
    </UL>
  );
};

Node.defaultProps = {
  defaultExpandedKeys: [],
  showIcon: false,
  switcherIcon: "caret",
};
