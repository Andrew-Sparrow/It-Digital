import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { ListItem } from "./ListItem";
import { notes } from "../db";
import { getStoreData } from "../lib/indexedDB";
import { NoteContext } from "../App";


const StyledNotesPanel = styled.section`
  background-color: #5e6569;

  height: 480px;
  overflow-y: auto;

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

    // TODO create custom hook
    const getStoreItems = async (e) => {
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

  useEffect(() => {
    getStoreItems();
  }, []);

  return <StyledNotesPanel {...props}>{storeItems && storeItems.map((item) => <ListItem {...item} key={item.id} />)}</StyledNotesPanel>;
  // return (
  //   <StyledNotesPanel {...props}>{
  //     notes.map((item) => <ListItem {...item} key={item.id} />)
  //   }</StyledNotesPanel>
  // )
};

export { SideBar };
