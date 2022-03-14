const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes

const userRouter = require('./routes/user.router');
const workoutRouter= require ('./routes/workout.router');
const bodypartRouter= require ('./routes/bodypart.router');
const sprintsRouter= require ('./routes/sprints.router');
const airQualityRouter= require ('./routes/airquality.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/workout', workoutRouter);
app.use ('/api/bodypart', bodypartRouter);
app.use('/api/sprints', sprintsRouter)
app.use('/api/air-quality', airQualityRouter)
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
