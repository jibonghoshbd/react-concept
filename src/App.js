import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
}

function Friend() {
  return (
    <div className='friend'>
      <h1>Name: Salim Uddin</h1>
      <h3>Phone: 01455794784</h3>
    </div>
  )
}

export default App;
