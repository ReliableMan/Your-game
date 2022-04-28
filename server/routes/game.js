const router = require("express").Router();
const { Theme, Question, Score, User } = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const getTheme = await Theme.findAll({raw: true});
    res.json(getTheme);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.post("/question", async (req, res) => {
  const {complexity, id} = req.body;
  try {
    const getQuestion = await Question.findOne({where : {complexity, theme_id: id}});
    console.log(getQuestion);
    res.json(getQuestion);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.post("/score", async (req, res) => {
  const {user_id, score} = req.body;
  const newScore = await Score.create({user_id: user_id, score});
  res.sendStatus(200);
});

router.get("/topPlayers", async (req, res) => {
  const topPlayers = await Score.findAll({order: [['score', 'DESC']], limit: 5, raw: true,
  include: {
    model: User,
    required: true
  }});
  res.json(topPlayers);
});

module.exports = router;
