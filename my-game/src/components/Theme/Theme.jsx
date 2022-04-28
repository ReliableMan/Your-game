import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./style.module.css";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core/";
import DialogTitle from "@material-ui/core/DialogTitle";

function Theme({ element }) {
  const [modalState, setModalState] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState([]);
  const question = useSelector((store) => store.question);
  const answerInput = useSelector((store)=> store.answerInput);
  const scoreCount = useSelector((store)=> store.score);
  const dispatch = useDispatch();

  const changeModal = (e) => {
    const complexity = e.target.innerText;
    const { id } = e.target.parentNode;
    axios
      .post("http://localhost:3001/game/question", { complexity, id })
      .then((question) => {
        dispatch({ type: "GET_QUESTION", payload: question.data });
      });
    setModalState(!modalState);
    console.log(modalState);
    setOpen(true);
    e.target.className = 'hidenBox';
    // setState((prev)=> [...prev, e.target.id]); //! Доделать
  };

  const handleClose = () => {
    setOpen(false);
    setModalState(!modalState);
    console.log('!!!!!!!!!!!!!!!!!!!!',Number(question.complexity));
     if (question.answer.toLowerCase() === answerInput.toLowerCase()) {
       dispatch({type: 'SET_SCORE', payload: Number(question.complexity)});
     } else {
      dispatch({type: 'UNSET_SCORE', payload: Number(question.complexity)});
     }
  };
  const changeInputModal = (e) =>{
    dispatch({ type: "SET_ANSWER", payload: e.target.value });
  };
  console.log(scoreCount);
  return (
    <>
      <div className={style.mainBox} id={element.id}>
        <div className={style.boxTheme}>{element.text}</div>
        <div onClick={(e) => changeModal(e)} className={style.box} id={`${element.id}200`}>200</div>
        <div onClick={(e) => changeModal(e)} className={style.box} id={`${element.id}400`}>400</div>
        <div onClick={(e) => changeModal(e)} className={style.box} id={`${element.id}600`}>600</div>
        <div onClick={(e) => changeModal(e)} className={style.box} id={`${element.id}800`}>800</div>
        <div onClick={(e) => changeModal(e)} className={style.box} id={`${element.id}1000`}>1000</div>
      </div>
      <div>
        {
          modalState ?
            (<>
              <div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">Вопрос</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      {question.question}
                    </DialogContentText>
                    <TextField
                    onChange={(e)=> changeInputModal(e)}
                      autoFocus
                      margin="dense"
                      id="name"
                      type="text"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Ответить
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </>)
            : null
        }
      </div>
    </>
  );
}


export default Theme;
