import { useState, createContext } from 'react';
import styled from 'styled-components';

import './App.css';
import { EditPanel } from './components/EditPanel';
import { NotesPanel } from './components/NotesPanel';
import { PanelContainer } from './components/PanelContainer';
import { ToolBox } from './components/ToolBox';


const AppWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 320px;
  min-height: 100vh;
  padding: 2rem;
  background-color: #292F33;
  color: #fff;
  font-family: 'Arial', sans-serif;
  margin: 0 auto;
`;


export const NoteContext = createContext( null );

function App() {

  const [activeId, setActiveId] = useState( null );

  return (
    <NoteContext.Provider value={{activeId, setActiveId}}>
      <AppWrapper>
        <ToolBox />
        <PanelContainer>
          <NotesPanel />
          <EditPanel />
        </PanelContainer>
      </AppWrapper>
    </NoteContext.Provider>
  );
}

export default App;
