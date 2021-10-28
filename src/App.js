import { Col, Row, Container } from "reactstrap";
import AddForm from "./components/AddForm";
import FilmList from "./components/FilmList";

function App() {
  return (
    <div>
      {/* <div>
        <AddForm />
      </div> */}

      <div>
        <FilmList></FilmList>
      </div>
    </div>
  );
}

export default App;
