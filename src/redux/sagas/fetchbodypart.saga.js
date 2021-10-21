import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchBodypart(action){
    console.log('what is action in this context?', action)
    try{
        console.log('what is action.payload in this context?', action.payload);
        const workoutType = action.payload;
        const mostRecentWorkout = yield axios.get(`/api/bodypart/${workoutType}`);
        yield put({type: 'DATA_FOR_SECOND_PAGE', payload: mostRecentWorkout.data})
    // console.log('WHAT IS GET RETURNING?..' ,theWorkout.data)
    } catch(error) {
        console.log('fetchBodypart', error);
    }
}

function* fetchBodypartSaga(){
    yield takeLatest('FETCH_BODYPART_WORKOUT', fetchBodypart)
}

export default fetchBodypartSaga;