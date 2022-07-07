import logo from './logo.svg';
import './App.css';
import WeatherCity from './WeatherCity';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Weather App
        </p>
      </header>
      <WeatherCity/>
    </div>
  );
}

export default App;
