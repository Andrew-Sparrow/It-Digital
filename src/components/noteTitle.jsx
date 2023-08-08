import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';


const StyledTitle = styled.input`
  min-height: 40px;
  text-align: left;
  font-weight: 700;
  padding: 10px 20px 10px;
  background-color: #888888;
  color: #e0e0e0;

  &:focus {
    outline: 3px ridge #2d6bbb;
  }
`;


const NoteTitle = ({ noteTitle='' }) => {
  const [noteTitleValue, setNoteTitleValue] = useState(noteTitle);

  useEffect(() => {
    setNoteTitleValue(noteTitle);
  }, [noteTitle]);

  const handelNoteTitleChange = (evt) => {
    setNoteTitleValue(evt.target.value);
  };

  return <StyledTitle value={noteTitleValue} onChange={handelNoteTitleChange}/>;
};

export { NoteTitle };
