import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message'
import Count from './components/Counter'

function App() {
  return (
    <div className="App">
      <Count />
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman" />
      <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}
    </div>
  );
}

export default App;