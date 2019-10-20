const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')

router.get('/',(req,res) => res.send('This is H'))
router.use('/user', userRoutes())







module.exports = () => router