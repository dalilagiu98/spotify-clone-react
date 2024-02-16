import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./component/Nav";
import Home from "./component/Home";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ height: "100vh" }}>
        <MyNav />
        <Home />
      </Row>
    </Container>
  );
}

export default App;
