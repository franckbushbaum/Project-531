import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* addWorkout(action){
    // console.log('First saga wired up', action.payload)
    try {
        console.log('what is ACTION', action);
        const newWorkout = action.payload;
        console.log('what is NEWWORKOUT', newWorkout);
        yield axios.post('/api/workout', newWorkout);
      } catch(err) {
        console.log(err)
      }
};

function* addWorkoutSaga(){
    yield takeLatest('NEW_WORKOUT', addWorkout)
}

export default addWorkoutSaga;