import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function addWorkout(action){
    console.log('First saga wired up', action.payload)
};

function* addWorkoutSaga(){
    yield takeLatest('NEW_WORKOUT', addWorkout)
}

export default addWorkoutSaga;