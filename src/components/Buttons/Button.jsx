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
  opacity: 0.8;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 1;
    background-color: #24477c;
  }

  align-self: ${(props) => props.$align || "stretch"};

  ${(props) =>
    props.$primary &&
    css`
      color: ${(props) => props.color || "#000000"};
      background: ${(props) => props.$background || "white"};
    `};

  ${(props) =>
    props.$outlined &&
    css`
      color: ${(props) => props.color || "#000000"};
      border: 1px solid ${(props) => props.color || "#000"};
      background: transparent;
    `};

  ${(props) =>
    props.$isDisabled &&
    css`
      color: #e6e6e6;
      border-color: #e6e6e6;
      background: #c9c8c8;

      &:hover {
        opacity: 0.8;
        background-color: #c9c8c8;
        cursor: initial;
      }
    `};

  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;


const Button = (props) => {

  return (
    <StyledButton {...props} onClick={props.onClick} disabled={props.$isDisabled}>
      {props.children}
    </ StyledButton >
  )
};

export { Button };
