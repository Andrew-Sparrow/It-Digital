import React from 'react';
import styled from 'styled-components';


const StyledEditPanel = styled.textarea`
  width: 100%;
  min-height: 300px;
  background-color: #7f7f7f;
  color: #fff;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  border: none;
  resize: none;
  color: ${({ color }) => color || 'white'};
  padding: 20px;

  &:focus {
    outline: none;
  }

  @media ${ props => props.theme.media.desktop } {
    width: 100%;
  }
`;

const EditPanel = (props) => {
  return (
    <StyledEditPanel {...props}></StyledEditPanel>
  )
};

export { EditPanel };
