import logo from './logo.svg';
import './App.css';
import './Styles/header.css';
import CuadroControles from './Components/CuadroControles';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Personaje que reacciona a los controles</h1>
      </header>
      <CuadroControles/>
    </div>
  );
}

export default App;
