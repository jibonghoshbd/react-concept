import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
      <Friend name="Abul" phone="0147845" address="Dhaka"></Friend>
      <Friend name="Babul" phone="01478557" address="Khulna"></Friend>
      <Friend name="Dabul" phone="01478000" address="Borisal"></Friend>
      <Friend name="Sabul" phone="014780111" address="Bandorbon"></Friend>

    </div>
  );
}

// extranal users 
function ExternalUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>External Users: {users.length}</h1>
      <div className='users'>
        {
          users.map(user => <User name={user.name} email={user.email}></User>)
        }
      </div>
    </div>
  )
}

// user component 
function User(props) {
  return (
    <div className='user'>
      <h1>Name: {props.name}</h1>
      <h3>Email: {props.email}</h3>
    </div>
  )
}
// counter 
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



export default App;
