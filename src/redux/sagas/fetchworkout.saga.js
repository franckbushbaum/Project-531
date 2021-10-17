import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchWorkout(){
    try{
    const theWorkout = yield axios.get('/api/workout');
    yield put({type: 'SET_WORKOUT', payload: theWorkout.data})
    console.log('WHAT IS GET RETURNING?..' ,theWorkout.data)
    } catch(error) {
        console.log('fetchworkout error', error);
    }
}

function* fetchWorkoutSaga(){
    yield takeLatest('FETCH_WORKOUT', fetchWorkout)
}

export default fetchWorkoutSaga;