import React, { useState, useRef } from 'react'
import { Navbar,
  Container,
  Nav,
  Popover,
  Form,
  FormControl,
  Button,
  Overlay,
  NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function NavBar(props) {
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)

  const handleClick = (event) => {
    setShow(!show)
    setTarget(event.target)
  }
  return (
    <Navbar className='root-navbar' sticky='top'>
      <Container>
        <Navbar.Brand href="#">
          <img
            alt=""
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            width="170"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Movies" id="navbarScrollingDropdown" className='navbar-item'>
              <NavDropdown.Item href="#action3">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Upcomming</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Top Rate</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TV Shows" id="navbarScrollingDropdown" className='navbar-item'>
              <NavDropdown.Item href="#action3">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action4">On TV</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Top Rate</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Airing Today</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <div ref={ref}>
            <Button onClick={handleClick}>VI</Button>

            <Overlay
              show={show}
              target={target}
              placement="bottom"
              container={ref}
              containerPadding={20} trigger="click" rootClose overlay='popover'
            >
              <Popover id="popover-contained">
                <Popover.Header as="h3"><strong>Language Preferences</strong></Popover.Header>
                <Popover.Body>
                  <Form.Select aria-label="Default select example">
                    <option value="en-US" selected>Vietnamese</option>
                    <option value="vi-VN" >English</option>
                  </Form.Select>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>

          <Nav.Link>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 navbar-search"
                aria-label="Search"
              />
              <Button variant="outline-success" hidden>Search</Button>
            </Form>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar