'use strict';

const express = require('express');

let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'poloLender' });
});

module.exports.router= router;
