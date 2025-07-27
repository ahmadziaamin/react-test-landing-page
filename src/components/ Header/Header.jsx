import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import Form from 'react-bootstrap/Form';
import signal from '../../assets/images/Signal.png'
import battery from '../../assets/images/Battery.png'
import wifi from '../../assets/images/Wifi.png'

function Header() {
  return (
    <>
    <div className="mob-header">
        <div className="mob-context global_theme">
            <p>9:40</p>
            <div className="monb-icons">
                <img src={signal} alt="signal"  />
                 <img src={wifi} alt="wifi"  />
                  <img src={battery} alt="battery"  />
                
            </div>

        </div>
    </div>
     <Navbar expand="lg" className="header">
      <Container fluid className="global_theme"> 
        <Navbar.Brand href="#"><img src={logo} alt="logo" height="40" />
          <div className="brand-text">
            <span className="line-one">The Clear Quran</span>
            <span className="line-two">Audiobook - DRAMATIZED</span>
          </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
           <button className="download-btn">
              <img src={appstore} alt="appstore" />
              <img src={playstore} alt="playstore" />
              <p>Download</p>
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>


  );
}

export default Header;
