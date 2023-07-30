import React from 'react';
import styled from 'styled-components';

import { MAX_LETTERS_AMOUNT_TEXT, MAX_LETTERS_AMOUNT_TITLE } from '../constants';
import { truncate } from '../utils';


const StyledNoteItem = styled.div`
  color: #fff;
  padding: 20px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.3s;

  ${({ $isActive }) => $isActive && `
    background: blue;
  `}

  &:hover {
    opacity: 1;
    background-color: #2d6bbb;
  }

  .title {
    margin-bottom: 8px;
  }
`;


const NoteItem = (props) => {
  const { title, time, text, isActive } = props;

  const handleButtonClick = () => {
    // history.push('/dresses?color=blue')
    console.log('click')
  };

  return (
    <StyledNoteItem $isActive={isActive} onClick={handleButtonClick}>
      <div className='title'>
        <strong >{truncate(title, MAX_LETTERS_AMOUNT_TITLE)}</strong>
      </div>
      <div className='text'>
        <p><span>{time}</span>{truncate(text, MAX_LETTERS_AMOUNT_TEXT)}</p>
      </div>
    </StyledNoteItem>
  )
};



// export { StyledNoteItem };
export { NoteItem };
