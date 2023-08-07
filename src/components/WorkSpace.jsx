import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { notes } from "../db";
import { NoteContext } from "../App";
import { formatDateFullForTitle } from "../util";
import { useStoreItems } from "../lib/hooks";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  overflow: auto;
`;

const StyledTime = styled.p`
  min-height: 40px;
  text-align: center;
  padding: 10px 20px 10px;
  background-color: #6b6b6b;
  color: #cecdcd;
`;

const StyledTitle = styled.input`
  min-height: 40px;
  text-align: left;
  font-weight: 700;
  padding: 10px 20px 10px;
  background-color: #888888;
  color: #e0e0e0;
`;

const StyledEditPanel = styled.textarea`
  width: 100%;
  height: 400px;
  overflow-y: auto;
  background-color: #7f7f7f;
  color: #fff;
  font-family: "Arial", sans-serif;
  font-size: 16px;
  border: none;
  resize: none;
  color: ${({ color }) => color || "white"};
  padding: 20px;

  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 100%;
  }
`;

const WorkSpace = (props) => {
  const [noteItem, setNoteItem] = useState(null);
  const [noteText, setNoteText] = useState("");
  const { activeId } = useContext(NoteContext);

  const notesDB = useStoreItems();

  const handleChangeTextNote = (evt) => {
    setNoteText(evt.target.value);
    let item = notesDB.find((note) => note.id === activeId);
    item.text = evt.target.value;
  };

  useEffect(() => {
    if (activeId) {
      let item = notesDB.find((note) => note.id === activeId);
      let text = item.text;
      setNoteItem(item);
      setNoteText(text);
    }
  }, [activeId, noteItem, setNoteItem, notesDB]);

  return (
    <StyledContainer>
      <StyledTime>{noteItem && formatDateFullForTitle(noteItem.time)}</StyledTime>
      <StyledTitle value={noteItem && noteItem.title} />
      {/* <StyledEditPanel
         {...props}
         value={noteItem.text}
         onChange={(e) =>
           setNoteItem((prevItem) => {
             console.log(prevItem)
             return Object.assign(prevItem, { text: e.target.value });
           })
         }></StyledEditPanel> */}
      <StyledEditPanel {...props} value={noteText} onChange={handleChangeTextNote}></StyledEditPanel>
    </StyledContainer>
  );
};

export { WorkSpace };
