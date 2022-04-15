import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Friend name="Abul" phone="0147845" address="Dhaka"></Friend>
      <Friend name="Babul" phone="01478557" address="Khulna"></Friend>
      <Friend name="Dabul" phone="01478000" address="Borisal"></Friend>
      <Friend name="Sabul" phone="014780111" address="Bandorbon"></Friend>

    </div>
  );
}

function Friend(props) {
  const { name, phone, address } = props;
  return (
    <div className='friend'>
      <h1>Name: {name} </h1>
      <h3>Address: {address} </h3>
      <h3>Phone: {phone} </h3>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  const handelIncrease = () => setCount(count + 1);
  const handelDecrease = () => setCount(count - 1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handelIncrease}>Increase</button>&nbsp;&nbsp;
      <button onClick={handelDecrease}>Decrease</button>
    </div>
  )
}

export default App;
