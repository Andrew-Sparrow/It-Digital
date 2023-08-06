import React, { useContext } from 'react';
import styled from 'styled-components';

import { MAX_LETTERS_AMOUNT_TEXT, MAX_LETTERS_AMOUNT_TITLE } from '../constants';
import { truncate } from '../utils';
import { NoteContext } from '../App';
import { formatDateShort, formatTimeHoursAndMinutes, isToday } from '../util';


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


const ListItem = (props) => {
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
        <p><span className='time'>{isToday() ? formatTimeHoursAndMinutes(time) : formatDateShort(time)}</span>{truncate(text, MAX_LETTERS_AMOUNT_TEXT)}</p>
      </div>
    </StyledNoteItem>
  )
};

export { ListItem };
