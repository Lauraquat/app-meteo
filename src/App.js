import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import LocalWeather from './components/LocalWeather';

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <LocalWeather/>
    </div>
  );
}

export default App;
