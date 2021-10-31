import React from "react";
import { connect } from "react-redux";
import { getFilms, removeFilms } from "../Redux/actions/filmActions";
import BoxForm from "./BoxForm";
import "../../src/Box.css";
function FilmList({ films }) {
  console.log(films);
  return (
    <div>
      {films.map((film) => (
        <div className="container">
          <BoxForm
            src={film.image}
            name={film.name}
            director={film.director}
            counter={film}
            
          />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    films: state.films,
  };
};

export default connect(mapStateToProps, { getFilms})(FilmList);
