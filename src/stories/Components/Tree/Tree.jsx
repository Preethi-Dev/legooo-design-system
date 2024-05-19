import React from "react";
import PropTypes, { string } from "prop-types";
import { GlobalStyle } from "../../../utility";
import { Node } from "./Node";
import { nanoid } from "nanoid";

const Tree = (props) => {
  const { treeData, defaultExpandedKeys, switcherIcon, showIcon } = props;
  return (
    <div id="container">
      <GlobalStyle />
      {treeData.map(
        (data) =>
          data && (
            <Node
              data={data}
              defaultExpandedKeys={defaultExpandedKeys}
              switcherIcon={switcherIcon}
              showIcon={showIcon}
              key={nanoid()}
            />
          )
      )}
    </div>
  );
};

Tree.propTypes = {
  /**
   * The treeNodes data Array (key should be unique across the whole array)
   */
  treeData: PropTypes.array.isRequired,
  /**
   * Specify the keys of the default expanded treeNodes
   */
  defaultExpandedKeys: PropTypes.arrayOf(string),
  /**
   * Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to true
   */
  showIcon: PropTypes.bool,
  /**
   * Customize collapse/expand icon of tree node
   */
  switcherIcon: PropTypes.oneOf(["square", "cheveron", "caret"]),
};

Tree.defaultProps = {
  treeData: [],
  defaultExpandedKeys: [],
  switcherIcon: "caret",
  showIcon: false,
};

export default Tree;
