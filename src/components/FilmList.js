import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getFilms } from "../Redux/actions/filmActions";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

function FilmList({ getFilms, films}) {
  console.log(films);
  return (
    <div>
      <h1>Film Listesi</h1>
      {films.map((film) => (
        <div>
          <img src={film.image} alt={film.name} />
          <div>
            <h4>Film Adı: {film.name}</h4>
            <h4>Yönetmen: {film.director}</h4>
          </div>
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

export default connect(mapStateToProps, { getFilms })(FilmList);
