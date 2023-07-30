import React from 'react';
import styled from 'styled-components';

import { NoteItem } from './NoteItem';
import { notes } from '../db';


const StyledNotesPanel = styled.section`
  background-color: #5e6569;

  min-height: 300px;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }

  @media ${ props => props.theme.media.desktop } {
    width: 400px;
  }

  @media ${ props => props.theme.media.tablet } {
    width: 100%;
  }

  @media ${ props => props.theme.media.phone } {
    width: 100%;
  }
`;


const NotesPanel = (props) => {

  return (
    <StyledNotesPanel {...props}>{
      notes.map((item) => <NoteItem {...item} key={item.id} />)
    }</StyledNotesPanel>
  )
};

export { NotesPanel };
