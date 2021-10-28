import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { addFilms } from "../Redux/actions/filmActions";

function AddForm({ addFilms }) {
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {}, [name, director, image]);
  const add = () => {
    addFilms(name, director, image);
  };

  return (
    <>
      <h1>Film Ekle</h1>
      <div>
        <label>Film Adı: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Yönetmen: </label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        ></input>
        <label>Afiş Linki: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
      </div>
      <Button name="save" color="success" size="lg" onClick={() => add()}>
        Film Ekle
      </Button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    films: state.films
  };
};
export default connect(mapStateToProps, { addFilms })(AddForm);
