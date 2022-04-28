import initState from '../initState';

const answerInputReduser = (state = initState, action) => {

const { type, payload } = action;
switch (type) {

case 'SET_ANSWER':
return payload;

default:
return state;
}
}

export default answerInputReduser; 
