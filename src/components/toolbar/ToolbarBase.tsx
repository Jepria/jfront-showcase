import React from "react";
import styled from "styled-components";

export interface ToolbarInterface extends React.HTMLAttributes<HTMLElement> {
}

const StyledToolbar = styled.nav`
  font: 11px arial, tahoma, helvetica, sans-serif;
  vertical-align: middle;
  margin: 0;
  padding: 2px;
  border-style: solid;
  border-color: #99bbe8;
  border-width: 0 1px 1px 1px;
  overflow: hidden;
  background-color: #d0def0;
  background-image: url(bg.gif);
  background-position: 0 5%;
`;

const ToolbarBase: React.FC<ToolbarInterface> = (props) => {
  return (
      <StyledToolbar {...props}>{props.children}</StyledToolbar>
  );
};

export default ToolbarBase;