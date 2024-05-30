import React from "react";
import { Container } from "./Breadcrumb";
import { nanoid } from "nanoid";
import { Link } from "./Link";
import { Separator } from "./Separator";
import styled from "styled-components";
import { findTokenValue } from "../../../utility";

const ThreeDot = styled.p`
  color: ${({ theme }) => findTokenValue(theme["Breadcrumb-colorText"], theme)};
  cursor: pointer;
  margin: 0;
`;

const BreadcrumbItem = (props) => {
  const { $items, $separator, $showLastSeparator, collapsed, setCollapsed } =
    props;
  return (
    <Container>
      {$items.map((item, index, $items) => {
        const isIcon = item.icon ? true : false;
        const isText = item.title ? true : false;
        const $lastItem = index === $items.length - 1;
        return (
          <Container key={nanoid()}>
            <Link
              $text={isText}
              $setText={item.title}
              $icon={isIcon}
              $setIcon={item.icon}
              $dropdown={item.dropdown}
              $lastItem={$lastItem}
              href={item.href || ""}
            />
            {!$lastItem && <Separator separator={$separator} />}
            {$showLastSeparator && $lastItem && (
              <Separator separator={$separator} />
            )}
            {collapsed && index === 1 && (
              <>
                <ThreeDot onClick={() => setCollapsed(false)}>...</ThreeDot>
                <Separator separator={$separator} />
              </>
            )}
          </Container>
        );
      })}
    </Container>
  );
};

export default BreadcrumbItem;
