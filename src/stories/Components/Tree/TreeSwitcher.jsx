import styled from "styled-components";
import { generateTreeSwitcher } from "./Tree.helpers";
import { findTokenValue } from "../../../utility";

const TreeSwitcherContainer = styled.div`
  color: ${({ theme }) => findTokenValue(theme["Tree-colorText"], theme)};
  padding: 0.15rem;
`;

export const TreeSwitcher = (props) => {
  return (
    <TreeSwitcherContainer>{generateTreeSwitcher(props)}</TreeSwitcherContainer>
  );
};
