import './App.css';
import Menu from "./components/menu";
import EraseButton from './components/erasebutton';


function App() {

  return (

    <div className="App">
      <header className="App-header">
        <p className="title">RPE Calculator</p>
        <br />
        <div className="app">
          <EraseButton menu={<Menu />} />
        </div>
        <br />
        <br />
      </header>
    </div>
  );
}

export default App
