import AddForm from "./components/AddForm";
import FilmList from "./components/FilmList";
import "../src/style.css";

function App() {
  return (
    <div className="app">
      <div>
        <AddForm />
      </div>

      <div>
        <FilmList></FilmList>
      </div>
    </div>
  );
}

export default App;
