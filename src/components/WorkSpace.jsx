import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { notes } from "../db";
import { NoteContext } from "../App";

const StyledEditPanel = styled.textarea`
  width: 100%;
  min-height: 300px;
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
  const [noteContent, setNoteContent] = useState("");
  const { activeId } = useContext(NoteContext);

  useEffect(() => {
    if (activeId) {
      let editText = notes.find((note) => note.id === activeId).text;
      setNoteContent(editText);
    }
  }, [activeId]);

  return (
      <StyledEditPanel {...props} value={noteContent} onChange={(e) => setNoteContent(e.target.value)}></StyledEditPanel>
  );
};

export { WorkSpace };
