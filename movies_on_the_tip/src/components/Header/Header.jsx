
import { Button,  Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import './Header.css';

export default function header() {
  return (
      <Navbar bg="transparant" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="brandName" href="/"><span>MoviesOnTip</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Manu" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/movies/upcoming">Coming soon</NavDropdown.Item>
                <NavDropdown.Item href="/movies/popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="/movies/top_rated">Top rated movies</NavDropdown.Item>
              </NavDropdown>

            <Nav.Link >Watchlist</Nav.Link>
            </Nav>
            <Nav>
              <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
