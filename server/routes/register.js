const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

// ручка регистрации
router.post('/signup', async(req, res) => {
  try{
    const { userName, email, password } = req.body;
    console.log('11121212121212121', req.body)
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword
    })
    req.session.user = {
      idUser: newUser.id,
      emailUser: newUser.email,
      nameUser: newUser.userName,
    }
    res.json(req.session.user)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router;
