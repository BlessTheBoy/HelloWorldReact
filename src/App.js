import logo from './logo.svg';
import './App.css';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import Counter from './components/Counter';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';

function App() {
  return (
    <div className="App">
      <UserProvider value = "BlessTheBoy">
        <ComponentC />
      </UserProvider>
      
      {/* <Counter render={(count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount} /> } />
      <Counter render={(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount} /> } /> */}
      {/* <ClickCounter />
      <HoverCounter name="BlessTheBoy" /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}      
    </div>
  );
}

export default App;