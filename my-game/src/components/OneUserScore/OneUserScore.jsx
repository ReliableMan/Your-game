import React from 'react'
import style from "./style.module.css";

function OneUserScore({element}) {
  console.log(element);
  return (
    <div className={style.box}>
      <div>{element['User.userName']}</div>
      <div>{element.score}</div>
    </div>
  )
}

export default OneUserScore;
