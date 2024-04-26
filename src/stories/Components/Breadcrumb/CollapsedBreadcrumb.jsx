import React, { useState } from "react";
import BreadcrumbItem from "./BreadcrumbItem";

const CollapsedBreadcrumb = (props) => {
  const { $items, $separator, $showLastSeparator } = props;
  const [collapsed, setCollapsed] = useState(true);

  return collapsed ? (
    <BreadcrumbItem
      {...props}
      $items={$items.filter((item, index, $items) =>
        [0, 1, $items.length - 2, $items.length - 1].includes(index)
      )}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    />
  ) : (
    <BreadcrumbItem {...props} />
  );
};

export default CollapsedBreadcrumb;
