import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* addWorkout(action){
    // console.log('First saga wired up', action.payload)
    try {
        const newWorkout = action.payload;
        yield axios.post('/api/workout', newWorkout);
        //is where I need the id
      } catch(err) {
        console.log(err)
      }
};

function* addWorkoutSaga(){
    yield takeLatest('NEW_WORKOUT', addWorkout)

}

export default addWorkoutSaga;