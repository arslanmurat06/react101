import "./App.css";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Buttons />
      </header>
    </div>
  );
}

export default App;
