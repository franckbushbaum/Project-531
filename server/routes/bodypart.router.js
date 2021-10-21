const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', rejectUnauthenticated, (req ,res) => {
    console.log('req.params is', req.params);
    console.log('req.user is', req.user);
    console.log('req.body is', req.body);
    const queryText = `SELECT * FROM workout
                        WHERE workout_type_id = $1
                        ORDER BY workout_id DESC
                        LIMIT 1;`;
    pool.query(queryText, [req.params.id])
    .then(result => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('ERROR COMPLETING REQUEST', error);
        res.sendStatus
    })
});







module.exports = router;