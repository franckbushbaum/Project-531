const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', rejectUnauthenticated, (req, res) => {
    const user=req.user.id;
    const workoutId=req.body.workout_type_id;
    const oneRepMax=req.body.one_rep_max;
    const week=req.body.week;
    const weight1=req.body.weight_one;
    const set1=req.body.set_one;
    const reps1=req.body.reps_one;
    const weight2=req.body.weight_two;
    const set2=req.body.set_two;
    const reps2=req.body.reps_two;
    const weight3= req.body.weight_three;
    const set3= req.body.set_three;
    const reps3= req.body.reps_three;
    const volume = req.body.volume;
    let sqlText =`INSERT INTO workout ("user_id", "workout_type_id", "one_rep_max", "week", "weight_one", "set_one", "reps_one", "weight_two", "set_two", "reps_two", "weight_three", "set_three", "reps_three", "volume")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
                    RETURNING "workout_id";`;
    pool.query(sqlText, [user, workoutId, oneRepMax, week, weight1, set1, reps1, weight2, set2, reps2, weight3, set3, reps3, volume])
    .then((result) => {       
        res.sendStatus(200) 
    })
    .catch((error) => {
        console.log('SERVER SIDE DOWN', error)
        res.sendStatus(500);
    })
});

router.get('/', rejectUnauthenticated, (req ,res) => {
    const queryText = `SELECT * FROM workout
                        ORDER BY workout_id DESC
                        LIMIT 1;`;
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('ERROR COMPLETING REQUEST', error);
        res.sendStatus
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const workoutId = req.params.id;
    const userId= req.user.id;
    const queryText =  `DELETE from "workout" WHERE 
                        ("workout_id" = $1 AND "user_id" = $2)`;
    pool.query(queryText, [workoutId, userId])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error deleting workout', error);
            res.sendStatus(500);
        })
});

router.put('/:id', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
    const workoutId=req.body.workout_id;
    const reps_one = req.body.reps_one;
    const reps_two = req.body.reps_two;
    const reps_three = req.body.reps_three;
    const volume = req.body.volume;
    const queryText = `UPDATE "workout" SET "reps_three" = $1, "reps_two" = $2, "reps_one" = $3, "volume" = $4
                                            WHERE "user_id" = $5 
                                            AND "workout_id" = $6`;
    pool.query(queryText, [reps_three, reps_two, reps_one, volume, userId, workoutId])
    .then ((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error updating workout', error);
        res.sendStatus(500);
    })
});

router.put('/archive/:id', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
    // { repsOne: 5, repsTwo: 4, repsThree: 4, newVolume: 5712, id: 627 }
    // const { repsOne : reps_one, repsTwo : reps_two, repsThree : reps_three, newVolume : volume, id : workoutId } = req.body;
    const reps_one = req.body.repsOne;
    const reps_two = req.body.repsTwo;
    const reps_three = req.body.repsThree;
    const volume = req.body.newVolume;
    const workoutId = req.body.id;
    const queryText = `UPDATE "workout" SET "reps_three" = $1, "reps_two" = $2, "reps_one" = $3, "volume" = $4
                                            WHERE "user_id" = $5 
                                            AND "workout_id" = $6`;
    pool.query(queryText, [reps_three, reps_two, reps_one, volume, userId, workoutId])
    .then ((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error updating archived workout', error);
        res.sendStatus(500);
    })
});

module.exports = router;