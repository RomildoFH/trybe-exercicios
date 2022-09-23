import './App.css';
import ButtonWithoutState from './components/ButtonWithOutState';
import ButtonWithState from './components/ButtonWithState';

function App() {
  return (
    <div className="App">
      <ButtonWithoutState />
      <ButtonWithState />
    </div>
  );
}

export default App;
