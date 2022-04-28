import initState from '../initState';

const themeReducer = (state = initState, action) => {

const { type, payload } = action;
switch (type) {

case 'GET_THEMES':
return [...payload ]

default:
return state;
}
}

export default themeReducer; 
