import React from 'react';
import styled from 'styled-components';


const StyledEditPanel = styled.section`
  width: 100%;
  height: 70vh;
  background-color: #5e6569;
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
    <StyledEditPanel {...props}>EditPanel</StyledEditPanel>
  )
};

export { EditPanel };
