import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


function NavbarStudent() {
  const Navigate = useNavigate()

  const Logout = (e) => {
    Cookies.remove('token')
    Navigate("/")
  }

  return (
   
    <Navbar variant="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
        <img src="/img/logo.png" class="navbar-brand" alt="coursela logo"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
                <a className="nav-link" href="/uhome">Home</a>
                <a className="nav-link" href="/ucourse-list">Course</a>
            
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dashboard"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/uprofile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/ucourse">My Course</NavDropdown.Item>
              <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarStudent;