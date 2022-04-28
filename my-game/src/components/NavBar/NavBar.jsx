import React from "react";
import {Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import style from "./style.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const score = useSelector((store)=> store.score);

  const logoutHandle = () => {
    axios.get('http://localhost:3001/auth/logout', {withCredentials: true})
    .then(()=> {
      navigate('/');
    });
    localStorage.removeItem('user_id');
    dispatch({type: 'SET_USER', payload: ''});
    dispatch({type: 'DELETE_SCORE', payload: 0});
  };
  return (
    <>
      <Box className={style.mainBox} sx={{ flexGrow: 1 }}>
        <AppBar className={style.mainBox} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={style.link} to='/'><Button color="inherit">Своя игра</Button></Link>
            </Typography>
            
            {
              document.cookie ? (
               <>
               <div className={style.scoreBox}>
               <div className={style.link}>Score: {score}</div>
               </div>
                <Link className={style.link} to='/endGame'><Button color="inherit">Результаты</Button></Link>
                <Link className={style.link} to='/logout'><Button onClick={logoutHandle} color="inherit">Logout</Button></Link>
               </>
              ) : (
                <>
                <Link className={style.link} to='/register'> <Button color="inherit">Register</Button></Link>
                <Link className={style.link} to='/auth'><Button color="inherit">Login</Button></Link>
                </>
              )
            }
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
