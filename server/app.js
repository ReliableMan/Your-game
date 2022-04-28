require('dotenv').config();

const { PORT } = process.env;
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const registerRouter = require('./routes/register');
const authRouter = require('./routes/auth');
const gameRouter = require('./routes/game');
const cookieParser = require("cookie-parser");

// Импортируем созданный в отдельный файлах рутеры.
const app = express();
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());
const { sessionLogger, checkAuthorization } = require('./middleware/sessionLogger');
app.use(cookieParser());

const sessionConfig = {
  store: new FileStore(),
  name: 'MyCookieName',
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: false,
  },
};

app.use((req, res, next) => {
  const accessList = ["http://localhost:3000", "http://localhost:3001"];
  const origin = req.get("origin");
  if (accessList.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Content-type");
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
});

app.use(session(sessionConfig));
app.use(checkAuthorization);
// app.use(sessionLogger);

app.use('/register',registerRouter);
app.use('/auth', authRouter);
app.use('/game', gameRouter);



app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
