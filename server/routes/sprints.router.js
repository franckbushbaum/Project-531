const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    res.json('hi there')
});

router.post('/', (req,res) => {
    console.log('In request, REQUEST IS', req)
    const mph = req.body.mph
    const incline = req.body.incline
    const on = req.body.on
    const off = req.body.off
    const reps = req.body.reps
    let sqlText =`INSERT INTO sprints ("mph", "incline", "on", "off", "reps")
                    VALUES ($1, $2, $3, $4, $5)
                    `;
    pool.query(sqlText, [mph, incline, on, off, reps])
    .then((result) => {       
        res.sendStatus(200) 
    })
    .catch((error) => {
        console.log('SERVER SIDE DOWN', error)
        res.sendStatus(500);
    })
});



module.exports = router;