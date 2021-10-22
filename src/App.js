import { Container, Col, Row } from "reactstrap";
import AddForm from "./components/AddForm";
import FilmList from "./components/FilmList";

function App() {
  return (
    <div>
      <Container>
        <AddForm />
        <Row>
          <Col>
            <FilmList></FilmList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
