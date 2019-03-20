const channelData = require('../channel');
const express = require('express');
const router = express.Router();

router.get('/lessons',function (req, res) {
  console.log("The code reached server functions");
  res.json(channelData);
});

module.exports = router;
