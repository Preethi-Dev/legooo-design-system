import { nanoid } from "nanoid";
import React from "react";
import { PaginationItem } from "./PaginationItem";
import PaginationItemEllipsis from "./PaginationItemEllipsis";

export const Truncation = ({ pages, size, current }) => {
  const intermediate = () => (
    <>
      <PaginationItem
        item={pages[pages.indexOf(current) - 1]}
        key={nanoid()}
        $active={false}
        size={size}
      />
      <PaginationItem
        item={current}
        key={nanoid()}
        $active={current}
        size={size}
      />
      <PaginationItem
        item={pages[pages.indexOf(current) + 1]}
        key={nanoid()}
        $active={false}
        size={size}
      />
    </>
  );
  return current <= 5 ? (
    <>
      {pages
        .filter((page) => page <= 5)
        .map((page, index) => (
          <PaginationItem
            item={page}
            key={nanoid()}
            $active={page === current}
            size={size}
          />
        ))}
      <PaginationItemEllipsis />
      <PaginationItem
        item={pages[pages.length - 1]}
        key={nanoid()}
        $active={pages[pages.length - 1] === current}
        size={size}
      />
    </>
  ) : current > pages[pages.length - 5] ? (
    <>
      <PaginationItem
        item={pages[0]}
        key={nanoid()}
        $active={pages[0] === current}
        size={size}
      />
      <PaginationItemEllipsis />
      {pages
        .filter((page) => page >= pages[pages.length - 5])
        .map((page, index) => (
          <PaginationItem
            item={page}
            key={nanoid()}
            $active={page === current}
            size={size}
          />
        ))}
    </>
  ) : (
    <>
      <PaginationItem
        item={pages[0]}
        key={nanoid()}
        $active={pages[0] === current}
        size={size}
      />
      <PaginationItemEllipsis />
      {intermediate()}
      <PaginationItemEllipsis />
      <PaginationItem
        item={pages[pages.length - 1]}
        key={nanoid()}
        $active={pages[pages.length - 1] === current}
        size={size}
      />
    </>
  );
};
