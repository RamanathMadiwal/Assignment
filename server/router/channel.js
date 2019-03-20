const channelData = require('../channel');
const express = require('express');
const router = express.Router();

router.get('',function (req, res) {
  if (err) {
    return res.status(422).send({errors: "Unable to retrieve Data"});
  }
  res.json(channelData);
});

module.exports = router;
