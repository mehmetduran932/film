import React from "react";
import { connect } from "react-redux";
import { getFilms } from "../Redux/actions/filmActions";
import BoxForm from "./BoxForm";
import "../style.css";
function FilmList({ getFilms, films }) {
  console.log(films);
  return (
    <div className="container">
      {films.map((film) => (
        <div>
          <BoxForm name={film.name} src={film.image} director={film.director} />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    films: state.films
  };
};

export default connect(mapStateToProps, { getFilms })(FilmList);
