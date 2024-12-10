var express = require('express');
var router = express.Router();
require('dotenv').config({ path: '../env/.env' });

const fileRoute = require('./files')
const userRoute = require('../routes/users');

/* GET home page. */
router.get('/', async (req, res) => {
  res.render('index', {
    title: 'Acceuil'
  })
});
/*  res.status(200).json({
    name: process.env.APP_NAME,
    version: '1.0',
    status: 200,
    message: 'Bienvenue sur l\'API'
  });
});*/

router.use('/users', userRoute);
router.use('/files', fileRoute);

module.exports = router;
