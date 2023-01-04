import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarTeacher() {
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
                <a className="nav-link" href="/">Home</a>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="My Profile"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Create Course</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Course</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Top Students</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Data Enrolled</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTeacher;