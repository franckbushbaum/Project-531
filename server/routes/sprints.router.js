const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    res.json('hi there')
});

router.post('/', (req,res) => {
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

router.get('/get', rejectUnauthenticated, (req ,res) => {
    const queryText = `SELECT * FROM sprints
                       ORDER BY id ASC
                        `;
    pool.query(queryText)
    .then(result => {
        console.log('Results from GET', result)
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('ERROR COMPLETING REQUEST', error);
        res.sendStatus
    })
});

router.get('/get/incline', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT incline, id from "sprints"
                        ORDER by id ASC;
                        `;
    pool.query(queryText)
    .then(result => {
        console.log('Results from GET/INCLINE', result)
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('ERROR COMPLETING SINGLES REQUEST', error);
        res.sendStatus;
    })
})

router.get('/get/mph', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT mph, id from "sprints"
                        ORDER by id ASC;
                        `;
    pool.query(queryText)
    .then(result => {
        console.log('Results from GET/MPH', result)
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('ERROR COMPLETING SINGLES REQUEST', error);
        res.sendStatus;
    })
});

router.get('/get/on', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "on", id from "sprints"
                        ORDER by id ASC;
                        `;
    pool.query(queryText)
    .then(result => {
        console.log('Results from GET/ON', result)
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('ERROR COMPLETING SINGLES REQUEST', error);
        res.sendStatus;
    })
});

router.get('/get/off', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT off, id from "sprints"
                        ORDER by id ASC;
                        `;
    pool.query(queryText)
    .then(result => {
        console.log('Results from GET/OFF', result)
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('ERROR COMPLETING SINGLES REQUEST', error);
        res.sendStatus;
    })
});

router.get('/get/reps', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT reps, id from "sprints"
                        ORDER by id ASC;
                        `;
    pool.query(queryText)
    .then(result => {
        console.log('Results from GET/OFF', result)
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('ERROR COMPLETING SINGLES REQUEST', error);
        res.sendStatus;
    })
});



module.exports = router;