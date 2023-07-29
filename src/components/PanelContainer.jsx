import React from 'react';
import { styled } from 'styled-components';
import { Flex } from './Flex';

const StyledPanelContainer = styled(Flex)`

  @media ${ props => props.theme.media.desktop } {
    flex-direction: row;
  }

  @media ${ props => props.theme.media.tablet } {
    flex-direction: column;
  }

  @media ${ props => props.theme.media.phone } {
    flex-direction: column;
  }
`;


const PanelContainer = (props) => {
  return (
    <StyledPanelContainer>{props.children}</StyledPanelContainer>
  )
};

export { PanelContainer };
