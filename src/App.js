import "./App.scss";
import { gameReducer, initialState } from "./reducer";
import { GameProvider } from "./context";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <GameProvider reducer={gameReducer} initialState={initialState}>
      <MainContainer />
    </GameProvider>
  );
}

export default App;
