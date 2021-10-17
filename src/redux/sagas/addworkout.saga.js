import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* addWorkout(action){
    try {
      console.log('First saga wired up', action.payload)
        const newWorkout = action.payload;
        yield axios.post('/api/workout', newWorkout);

      } catch(err) {
        console.log(err)
      }
};

function* addWorkoutSaga(){
    yield takeLatest('NEW_WORKOUT', addWorkout)

}

export default addWorkoutSaga;