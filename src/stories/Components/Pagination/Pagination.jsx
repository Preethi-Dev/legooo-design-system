import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { nanoid } from "nanoid";
import { PaginationItem } from "./PaginationItem";
import { PaginationArrow } from "./PaginationArrow";
import { Truncation } from "./Truncation";
import * as myThemes from "../../../tokens";

const PaginationContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const Pagination = ({ pages, size, $current, $theme }) => {
  const [current, setCurrent] = useState($current || pages[0]);

  const prevDisabled = pages[0] === current;
  const nextDisabled = pages[pages.length - 1] === current;

  const handlePageClick = (e) =>
    e.target.innerText && setCurrent(parseInt(e.target.innerText));

  const handlePrevClick = (e) => {
    e.stopPropagation();
    const currentIndex = pages.indexOf(current);
    const prevIndex = currentIndex !== 0 && currentIndex - 1;
    setCurrent(pages[prevIndex]);
  };
  const handleNextClick = (e) => {
    e.stopPropagation();
    const currentIndex = pages.indexOf(current);
    const nextIndex = currentIndex !== pages.length - 1 && currentIndex + 1;
    setCurrent(pages[nextIndex]);
  };

  return (
    <ThemeProvider theme={myThemes[$theme]}>
      <PaginationContainer onClick={handlePageClick}>
        <div onClick={prevDisabled ? null : handlePrevClick}>
          <PaginationArrow arrow={"left"} disabled={prevDisabled} size={size} />
        </div>

        {pages.length <= 7 ? (
          pages.map((page) => (
            <PaginationItem
              item={page}
              key={nanoid()}
              $active={page === current}
              size={size}
            />
          ))
        ) : (
          <Truncation pages={pages} current={current} size={size} />
        )}

        <div onClick={nextDisabled ? null : handleNextClick}>
          <PaginationArrow
            arrow={"right"}
            disabled={nextDisabled}
            size={size}
          />
        </div>
      </PaginationContainer>
    </ThemeProvider>
  );
};

Pagination.defaultProps = {
  size: "default",
  $theme: "Light",
};

export default Pagination;
