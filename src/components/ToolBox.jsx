import React from 'react';
import styled from 'styled-components';

import { Flex } from './Flex';
import { ButtonContainer } from './ButtonContainer';
import { Search } from './search/Search';


const StyledToolBox = styled(Flex)`
  background-color: #82f74c;
  flex-wrap: wrap;
  
  @media ${ props => props.theme.media.tablet } {
    flex-direction: column;
  }

  @media ${ props => props.theme.media.phone } {
    flex-direction: column;
  }
`;


const ToolBox = (props) => {
  return (
    <StyledToolBox>
      <ButtonContainer />
      <Search />
    </StyledToolBox>
  )
};

export { ToolBox };
