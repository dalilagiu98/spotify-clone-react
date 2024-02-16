import { Col } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { searchSongAction } from '../redux/actions'
import { useState } from 'react'

const MyNav = () => {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchSongAction(inputValue))
        setInputValue('')
    }
    return (
        <Col xs={3} className="bg-black h-100 position-fixed top-0 bottom-0 ">
            <div className="d-flex flex-column justify-content-between h-100">
                <Navbar expand="sm" data-bs-theme="dark" >
                    <Container className="d-flex flex-column align-items-start ">
                        <Navbar.Brand href="#home"><img src="../logo.png" alt="logo" style={{width: '6em'}}/></Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex flex-column">
                            <Nav.Link className="fw-bold" href="#home"><i className="bi bi-house-door-fill"></i>Home</Nav.Link>
                            <Nav.Link className="fw-bold" href="#library"><i className="bi bi-book-fill"></i>Library</Nav.Link>
                            <Form onSubmit={handleSubmit} >
                            <InputGroup className="mb-3">
                                <Form.Control
                                className="bg-white text-black"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                value={inputValue}
                                onChange={(e)=> setInputValue(e.target.value)}
                                />
                                <Button type="submit" variant="outline-secondary" id="button-addon2">
                            GO
                                </Button>
                            </InputGroup>
                            </Form>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>

                {/* ------------ */}
                    <Navbar expand="lg" data-bs-theme="dark" >
                    <Container className="d-flex flex-column align-items-start ">
                        <Button className="w-100 mb-2 rounded-pill" variant="outline-success" >Sign Up</Button>
                        <Button  className="w-100 rounded-pill"variant="outline-light ">Log in </Button>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mt-2">
                            <Nav.Link className="fw-bold" href="#home">Cookie Policy</Nav.Link>
                            <span> | </span>
                            <Nav.Link className="fw-bold" href="#library">Privacy</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </div>
        </Col>
    )
}

export default MyNav