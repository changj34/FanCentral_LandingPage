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
        <div className='notice'>
          <h2>NOTICE!</h2>
          <h3>This website will be shut down on May 22, 2021. We thank you for your support!</h3>
        </div>
        <div className="content">
          <h2>Project Overview:</h2>
          <h3>Our project's goal was to create a centralized hub for sports media where users could access information from various sources all on one site.
            After various surveys and research, we found that many sports fans were frustrated on how many applications they had to follow to keep up-to-date.
          </h3>
          <h2>Stakeholders:</h2>
          <h3>Our project aims to help any user that considers themself a sports fan and follows some type of sports media. This can be a die-hard sports fan
            follows various teams on various platforms or a casual sports fan that only watches once in a while.
          </h3>
          <h2>Our Solution:</h2>
          <h3>To remedy this sports information problem, we conducted research on the most used websites and applications that official sports teams post on and
            created our own website that pulls posts from different sites, showing them all on one page. To facilitate interaction between fans and teams, we 
            also created a system where every interaction with posts (comments) generates points that can be used to redeem rewards. After our initial prototype and high-fidelity
            prototype, we sent our product out for user testing and incorporated the feedback into our website.
          </h3>
        </div>
      </header>
    </div>
  );
}

export default App;
