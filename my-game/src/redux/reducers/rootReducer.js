import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import userReducer from './userReducer';
import themeReducer from './themeReducer';
import questionReducer from './questionRuducer';
import answerInputReduser from './answerInputReduser';
import leaderboardReducer from './leaderboardReducer';

import scoreReducer from './scoreReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  registerInputs: registerReducer,
  loginInputs: loginReducer,
  user: userReducer,
  theme: themeReducer,
  question: questionReducer,
  answerInput: answerInputReduser,
  score: scoreReducer,
  leaderboard: leaderboardReducer,
});

export default rootReducer;
