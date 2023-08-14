import React, {useEffect, useState} from "react";
import styled from "styled-components";

import { ListItem } from "./ListItem";
import { useStoreItems } from "../lib/hooks";

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
  const storeItems = useStoreItems();

  return <StyledNotesPanel {...props}>
    {storeItems && storeItems.map((item) => <ListItem {...item} key={item.id} />)}
  </StyledNotesPanel>;
};

export { SideBar };
