import React, { useContext } from 'react';
import styled from 'styled-components';

import { MAX_LETTERS_AMOUNT_TEXT, MAX_LETTERS_AMOUNT_TITLE } from '../constants';
import { truncate } from '../utils';
import { NoteContext } from '../App';


const StyledNoteItem = styled.div`
  color: #fff;
  padding: 20px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;

  ${({ $isActive }) => $isActive && `
    background: #78aeff;
  `}

  &:hover {
    opacity: 1;
    background-color: #2d6bbb;
  }

  .title {
    margin-bottom: 8px;
  }

  .time {
    margin-right: 10px;
  }
`;


const NoteItem = (props) => {
  const { id, title, time, text } = props;

  const { activeId, setActiveId } = useContext(NoteContext);

  const handleButtonClick = (id) => {
    setActiveId(id)
  };

  return (
    <StyledNoteItem $isActive={id === activeId} onClick={() => handleButtonClick(id)}>
      <div className='title'>
        <strong >{truncate(title, MAX_LETTERS_AMOUNT_TITLE)}</strong>
      </div>
      <div className='text'>
        <p><span className='time'>{time}</span>{truncate(text, MAX_LETTERS_AMOUNT_TEXT)}</p>
      </div>
    </StyledNoteItem>
  )
};

export { NoteItem };
