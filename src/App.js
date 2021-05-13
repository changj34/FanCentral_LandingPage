import logo from './logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar style={{background: '#3a3b3c', display: 'flex'}} expand="lg" fixed='top'>
          <Link to="/FanCentral">
            <img width='60' height='60' src={logo} style={{marginBottom: '0.5rem'}}></img>
            <Navbar.Brand style={{fontSize: '40px', marginLeft: '20px', marginBottom: '0', fontWeight: 'bold', color: 'white'}}>FanCentral</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
