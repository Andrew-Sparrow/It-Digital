import React from "react";
import styled from "styled-components";

import { Flex } from "./Flex";
import { ButtonContainer } from "./Buttons/ButtonContainer";
import { SearchBox } from "./search/SearchBox";

const StyledToolBox = styled(Flex)`
  background-color: #5e6569;
  flex-wrap: wrap;
  border-bottom: 1px solid #000;
  transition: 0.3s;

  @media ${(props) => props.theme.media.tablet} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
  }
`;

const ToolBox = (props) => {
  return (
    <StyledToolBox>
      <ButtonContainer />
      <SearchBox />
    </StyledToolBox>
  );
};

export { ToolBox };
