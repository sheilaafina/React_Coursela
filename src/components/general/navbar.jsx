import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDarkExample() {
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
                <a className="nav-link" href="/">About</a>
                <a className="nav-link" href="/course-list">Course</a>
                <a className="nav-link" href="/">Teacher</a>
                <a className="nav-link" href="/">Contacts</a>
            
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Join Us"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/login">Student</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Teacher</NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;