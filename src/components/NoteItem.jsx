import React from 'react';
import styled from 'styled-components';


const StyledNoteItem = styled.div`
  /* background-color: #b8e9ff; */
  color: #000;
  margin-bottom: 20px;

  .title {
    margin-bottom: 8px;
  }
`;


const NoteItem = (props) => {
  const { title, time, text } = props;

  return (
    <StyledNoteItem>
      <div className='title'>
        <strong >{title}</strong>
      </div>
      <div className='text'>
        <p><span>{time}</span>{text}</p>
      </div>
    </StyledNoteItem>
  )
};



// export { StyledNoteItem };
export { NoteItem };
