const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {

    console.log('what is req?', req);

    const {lat ,lon} = req.query;
    
    console.log('what is lat?..', lat);
    console.log('heres is lon, put them in request to rapidApi', lon);
    // const {lat , lon} = req.body
    // console.log('is this lat, the positive one?', lat);
    // console.log('is this lon, the negative one?', lon)
  });

  module.exports = router;