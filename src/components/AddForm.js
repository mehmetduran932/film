import React, { useState, useEffect } from "react";
import { Button, Input } from "@chakra-ui/react";
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
      <div>
        <label>Film Adı: </label>
        <Input
          type="text"
          name="name"
          placeholder="Film Adı"
          size="md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <label>Yönetmen: </label>
        <Input
          type="text"
          name="director"
          value={director}
          placeholder="Yönetmen"
          size="md"
          onChange={(e) => setDirector(e.target.value)}
        ></Input>
        <label>Afiş Linki: </label>
        <Input
          type="text"
          name="image"
          placeholder="Afiş Url"
          size="md"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></Input>
      </div>
      <Button colorScheme="blue" onClick={() => add()}>
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
