import initState from '../initState';

const leaderboardReducer = (state = initState, action) => {

const { type, payload } = action;
switch (type) {

case 'SET_LEADERBOARD':
return [...payload];

default:
return state;
}
}

export default leaderboardReducer; 
