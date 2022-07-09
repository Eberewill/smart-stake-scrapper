const express = require('express');

const emojis = require('./emojis');
const cosmos = require('./cosmos');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/cosmos', cosmos);

module.exports = router;
