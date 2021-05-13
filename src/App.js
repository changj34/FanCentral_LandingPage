import logo from './images/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar expand='lg'>
          <Nav className="mr-auto">
            <img width='60' height='60' alt="idk" src={logo} style={{marginBottom: '0.5rem'}}></img>
            <Navbar.Brand style={{fontSize: '40px', marginLeft: '20px', marginBottom: '0', fontWeight: 'bold', color: 'white'}}>FanCentral</Navbar.Brand>
          </Nav>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
