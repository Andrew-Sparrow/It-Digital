import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { NoteContext } from "../App";
import { formatDateFullForTitle } from "../util";
import { useStoreItems } from "../lib/hooks";
import { NoteTitle } from "./noteTitle";

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

  ${({ $isOnFocus }) => $isOnFocus && `
    background: #ff7878;
  `}

  @media ${(props) => props.theme.media.desktop} {
    width: 100%;
  }
`;

const WorkSpace = (props) => {
  const [noteItem, setNoteItem] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [noteTime, setNoteTime] = useState(0);
  const [noteTitle, setNoteTitle] = useState("");

  const { activeId, textAreaRef } = useContext(NoteContext);

  const notesDB = useStoreItems();

  const handleChangeTextNote = (evt) => {
    setNoteText(evt.target.value);
    let item = notesDB.find((note) => note.id === activeId);
    item.text = evt.target.value;
  };

  useEffect(() => {
    if (activeId) {
      let item = notesDB.find((note) => note.id === activeId);
      setNoteItem(item);
      setNoteText(item.text);
      setNoteTime(item.time);
      setNoteTitle(item.title);
    }
  }, [activeId, noteItem, noteTitle, setNoteItem, notesDB]);

  return (
    <StyledContainer>
      <StyledTime>{noteItem && formatDateFullForTitle(noteTime)}</StyledTime>
      <NoteTitle noteTitle={noteTitle} />
      <StyledEditPanel ref={textAreaRef} {...props} value={noteText} onChange={handleChangeTextNote}></StyledEditPanel>
    </StyledContainer>
  );
};

export { WorkSpace };
