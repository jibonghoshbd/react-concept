import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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

export default App;
