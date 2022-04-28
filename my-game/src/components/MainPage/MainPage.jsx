import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Theme from '../Theme/Theme';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const theme = useSelector((store)=> store.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:3001/game')
    .then((themes)=> {
      dispatch({type: 'GET_THEMES', payload: themes.data});
    });
  },[dispatch]);

  const user_id = localStorage.user_id;
  const score = useSelector((store)=> store.score);

  const finalyHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/game/score', {user_id, score});
    navigate('/endGame')
  };

  return (
    <>
    <div className={style.allBoxes}>
    {theme.map((element) => <Theme element={element} key={element.id} />)}
    </div>

    <div className={style.buttonBox}>
    <button onClick={(e)=> finalyHandler(e)} className={style.button}>Завершить игру</button>
    </div>
    </>
  )
}
