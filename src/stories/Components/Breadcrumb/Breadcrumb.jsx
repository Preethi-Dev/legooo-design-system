import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CollapsedBreadcrumb from "./CollapsedBreadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

const Breadcrumb = (props) => {
  const { $items, $separator, $showLastSeparator } = props;

  return $items.length <= 4 ? (
    <BreadcrumbItem {...props} />
  ) : (
    <CollapsedBreadcrumb {...props} />
  );
};

Breadcrumb.propTypes = {
  /**
   * stack information of route
   */
  $items: PropTypes.array.isRequired,
  /**
   * Custom separator
   */
  $separator: PropTypes.string,
  /**
   * show last separator
   */
  $showLastSeparator: PropTypes.bool,
};

export default Breadcrumb;
