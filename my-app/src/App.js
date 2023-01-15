import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you" name="Joe" age="35" /> */}
      {<StatefulGreeting  greeting="I'm a stateful class component!" name="John"/>}
    </div>
  );
}

export default App;
