import React from 'react';
import styled from 'styled-components';


const StyledNotesPanel = styled.section`
  background-color: #d4c42c;
  /* background-color: #5c66de; */
  padding: 20px;

  @media ${ props => props.theme.media.desktop } {
    width: 400px;
  }

  @media ${ props => props.theme.media.tablet } {
    /* width: 400px; */
    width: 100%;
    background-color: #c52a2a;
  }

  @media ${ props => props.theme.media.phone } {
    width: 100%;
    background-color: #cf6f4a;
  }
`;


const NotesPanel = (props) => {
  return (
    <StyledNotesPanel {...props}>NotesPanel</StyledNotesPanel>
  )
};

export { NotesPanel };
