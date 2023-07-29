import './App.css';
import styled from 'styled-components';
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


function App() {
  return (
    <AppWrapper>
      <ToolBox />
      <PanelContainer>
        <NotesPanel />
        <EditPanel />
      </PanelContainer>
    </AppWrapper>
  );
}

export default App;
