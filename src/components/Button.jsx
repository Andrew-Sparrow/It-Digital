import React from 'react';
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
  width: 85px;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  color: #000;
  margin-right: 10px;

  &:focus {
    outline: none;
  };

  &:hover {
    opacity: 0.6;
    transition: opacity 0.3s;
  }

  align-self: ${props => props.$align || 'stretch'};

  ${props => props.$primary && css`
    color: ${props => props.color || '#000000'};
    background: ${props => props.$background || 'white'};
  `};

  ${props => props.$outlined && css`
    color: ${props => props.color || '#000000'};
    border: 1px solid ${props => props.color || '#000'};
    background: transparent;
  `};

  @media ${ props => props.theme.media.phone } {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;


const Button = (props) => {
  return (
    <StyledButton {...props} >
      Button
    </ StyledButton >
  )
};

export { Button };
