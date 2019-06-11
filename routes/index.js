var express = require('express');
var router = express.Router();
require('dotenv').config();
var randomWords = require('random-words');
const translate = require('translate');

translate.engine = 'yandex';
translate.key = process.env.YANDEX_API_KEY;


/* GET home page. */
router.get('/', async (req, res, next) => {
  var word = randomWords()
  var translated = await translate(word, 'es');
  res.render('index', { title: 'Home', word: word,translated:translated });
});

module.exports = router;
