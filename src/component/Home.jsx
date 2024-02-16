import { Col, Container, Row } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Galleries from "./Galleries";
import Player from "./Player";
import SearchResult from "./SearchResults";

const Home = () => {
    

    return (
 
        // eslint-disable-next-line no-dupe-keys
        <Col xs={9} className="ms-auto" style={{background: 'rgb(2,0,36)', background: 'linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(50,79,96,1) 82%, rgba(124,154,171,1) 100%)'}}>
            <Row className="flex-column">
                <Col>
                    <Container>
                    <Row className="text-white fw-bold text-center mt-3">
                        <Col><Nav.Link>TRENDING</Nav.Link></Col>
                        <Col><Nav.Link>PODCAST</Nav.Link></Col>
                        <Col><Nav.Link>MOOD AND GENRES</Nav.Link></Col>
                        <Col><Nav.Link>NEW RELEASES</Nav.Link></Col>
                        <Col><Nav.Link>DISCOVER</Nav.Link></Col>
                    </Row>
                    </Container>
                     <SearchResult/>
                    <Container>
                    </Container>
                    <Container>
                        <Row className="text-white fw-bold ">
                        <h2 className="fs-2 m-0 text-start ps-2 mb-4 mt-3">Rock Classics</h2>
                        <Galleries  title="queen"/>
                        <h2 className="fs-2 m-0 text-start ps-2 mb-4 mt-3">Pop Culture</h2>
                        <Galleries  title="katy perry"/>
                        <h2 className="fs-2 m-0 text-start ps-2 mb-4 mt-3">#HipHop</h2>
                        <Galleries  title="eminem"/>
                        </Row>
                    </Container>
                </Col>
                <Col className="p-0">
                    <Player />
                </Col>
            </Row>
        </Col>
    )
}

export default Home