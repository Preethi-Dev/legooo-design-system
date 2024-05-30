import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import CollapsedBreadcrumb from "./CollapsedBreadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";
import * as myThemes from "../../../tokens";

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

const Breadcrumb = (props) => {
  const { $items, $separator, $showLastSeparator, $theme } = props;

  return (
    <ThemeProvider theme={myThemes[$theme]}>
      {$items.length <= 4 ? (
        <BreadcrumbItem {...props} />
      ) : (
        <CollapsedBreadcrumb {...props} />
      )}
    </ThemeProvider>
  );
};

Breadcrumb.defaulProps = {
  $separator: "/",
  $theme: "Light",
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
