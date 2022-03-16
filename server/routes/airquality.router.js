const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();
const cors = require('cors');

router.use(cors());

var axios = require("axios").default;

// router.get('/', (req, res) => {
//   res.json('hi there');
// })

router.get('/', (req, res) => {
    const {lat ,lon} = req.query;
    var options = {
      method: 'GET',
      url: 'https://air-quality.p.rapidapi.com/forecast/airquality',
      params: {lat: lat, lon: lon, hours: '24'},
      headers: {
        'x-rapidapi-host': 'air-quality.p.rapidapi.com',
        'x-rapidapi-key': 'bb38151e24msha271fe5e90f5b03p151d27jsnabf027f0721e'
      }
    };   
    axios.request(options).then(function (response) {
      res.json(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  });

  module.exports = router;