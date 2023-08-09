import { useState, createContext, useEffect } from "react";
import styled from "styled-components";

import "./App.css";
import { WorkSpace } from "./components/WorkSpace";
import { SideBar } from "./components/SideBar";
import { PanelContainer } from "./components/PanelContainer";
import { ToolBox } from "./components/ToolBox";
import { addData, getStoreData, initDB } from "./lib/indexedDB";
import { notes } from "./db";

const StyledApp = styled.main`
  width: 100%;
  max-width: 1200px;
  min-width: 320px;
  min-height: 100vh;
  padding: 2rem;
  background-color: #292f33;
  color: #fff;
  font-family: "Arial", sans-serif;
  margin: 0 auto;
`;

export const NoteContext = createContext(null);

function App() {
  const [activeId, setActiveId] = useState(null);
  const [isDBReady, setIsDBReady] = useState(false);

  const handleInitDB = async () => {
    const status = await initDB();

    // add initial data to DB
    await addData(notes[0]);
    await addData(notes[1]);
    // await getStoreData();
    setIsDBReady(status);
  };

  useEffect(() => {
    handleInitDB();
  }, [isDBReady]);

  return (
    <NoteContext.Provider value={{ activeId, setActiveId, isDBReady }}>
      {!isDBReady ? (
        <main style={{ textAlign: "center", marginTop: "3rem" }}>
          <p style={{ padding: "26px", fontSize: "20px" }}>Loading DB... </p>
        </main>
      ) : (
        <StyledApp>
          <ToolBox />
          <PanelContainer>
            <SideBar />
              <WorkSpace $isOnFocus={false} />
          </PanelContainer>
        </StyledApp>
      )}
    </NoteContext.Provider>
  );
}

export default App;
