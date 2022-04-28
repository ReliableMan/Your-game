import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from "./style.module.css";
import OneUserScore from "../OneUserScore/OneUserScore"

export default function Leaderboard() {
  const leaderboard = useSelector((store) => store.leaderboard)
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get('http://localhost:3001/game/topPlayers')
  .then((data)=>{
    dispatch({type: 'SET_LEADERBOARD', payload: data.data})
  });
  },[dispatch])


  return (
    <>
    <div className={style.mainBox}>
        <div className={style.contentBox}>
          {leaderboard.map((element)=> <OneUserScore element={element} key={element.id} />)}
        </div>
    </div>
    </>
  )
}
