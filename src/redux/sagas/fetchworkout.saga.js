import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchWorkout(){
    try{
    // console.log('WHAT IS ACTION', action)
    const theWorkout = yield axios.get('/api/workout');
    yield put({type: 'SET_WORKOUT', payload: theWorkout.data})
    console.log('WHAT IS THEWORKOUT',theWorkout.data);
    } catch {
        console.log('fetchworkout error', error);
    }
}

function* fetchWorkoutSaga(){
    yield takeLatest('FETCH_WORKOUT', fetchWorkout)
}

export default fetchWorkoutSaga;