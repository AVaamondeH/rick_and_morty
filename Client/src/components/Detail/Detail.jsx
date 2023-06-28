import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://127.0.0.1:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.card}>
      <img src={character?.image} alt="" className={style.img} />
      <h3 className={style.name}>{character?.name}</h3>
      <h3>Status: {character?.status}</h3>
      <h3>Species: {character?.species}</h3>
      <h3>Gender: {character?.gender}</h3>
      <h3 className={style.from}>From: {character.origin?.name}</h3>
    </div>
  );
};

export default Detail;