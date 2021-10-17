import { Container,Col,Row } from "reactstrap";
import FilmList from "./components/FilmList"

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <FilmList>

          </FilmList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
