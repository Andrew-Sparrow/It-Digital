import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { ListItem } from "./ListItem";
import { notes } from "../db";
// import { getStoreData } from "../lib/indexedDB_v1";
// import { getStoreDataAsync } from "../lib/indexedDB_v1";
import { getStoreData } from "../lib/indexedDB";
import { NoteContext } from "../App";


const StyledNotesPanel = styled.section`
  background-color: #5e6569;

  min-height: 300px;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 400px;
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 100%;
  }

  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }
`;

const SideBar = (props) => {
  const [storeItems, setStoreItems] = useState([]);
  const [errorObj, setErrorObj] = useState(null);
  const { isDBReady } = useContext(NoteContext);

    const handleGetStoreItems = async (e) => {
      try {
        if (isDBReady) {
          const res = await getStoreData();
          setStoreItems(res);
          console.log(res);
        }
      } catch (err) {
        if (err instanceof Error) {
          setErrorObj(err.message);
        } else {
          setErrorObj("Something went wrong to get notes");
        }
      }
    };

  // const handleGetStoreItems = async () => {
  //   const notes = await getStoreDataAsync().then((notes) => console.log(notes, "asdfas"));
  //   console.log(notes, "handleGetStoreItems");
  //   setStoreItems(notes);
  // };

  useEffect(() => {
    handleGetStoreItems();
  }, []);

  return <StyledNotesPanel {...props}>{storeItems && storeItems.map((item) => <ListItem {...item} key={item.id} />)}</StyledNotesPanel>;
  // return (
  //   <StyledNotesPanel {...props}>{
  //     notes.map((item) => <ListItem {...item} key={item.id} />)
  //   }</StyledNotesPanel>
  // )
};

export { SideBar };
