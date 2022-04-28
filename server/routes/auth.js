const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log('11121212121212121', req.body)

try {

  const targetUser = await User.findOne({ where: { email }, raw: true });
  const isValidPass = await bcrypt.compare(password, targetUser.password )

  if(isValidPass) {
    req.session.user = {
        userId: targetUser.id,
        userEmail: targetUser.email,
        userName: targetUser.userName,
      };
  }
} catch (err){
  console.error(err)
}
 res.json(req.session.user);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('MyCookieName');
  res.status(200).end();
});
 
router.get('/session', (req, res) => {
  if (!req.session.user) {
    req.session.user = {};
  }
  res.json(req.session.user);
});

module.exports = router;
