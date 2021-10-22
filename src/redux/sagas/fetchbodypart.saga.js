import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchBodypart(action){
    try{
        const workoutType = action.payload;
        const mostRecentWorkout = yield axios.get(`/api/bodypart/${workoutType}`);
        yield put({type: 'DATA_FOR_SECOND_PAGE', payload: mostRecentWorkout.data[0]});
    } catch(error) {
        console.log(' error in fetchBodypart saga, fetchBodypart', error);
    }
}

function* getArchive(action){
    // console.log('what is archives action?', action)
    try{
        const archiveId = action.payload;
        const archiveList = yield axios.get(`/api/bodypart/archive/${archiveId}`);
        console.log('WHAT IS ARCHIVELIST?', archiveList.data);
        yield put({type: 'ARCHIVE_DATA', payload: archiveList.data})
        console.log('WHAT IS ARCHIVELIST?', archiveList.data);
    } catch(error){
        console.log('error in fetchbodypart saga, getArchive', error)
    }

}

function* fetchBodypartSaga(){
    yield takeLatest('FETCH_BODYPART_WORKOUT', fetchBodypart)
    yield takeLatest('ARCHIVE_INITIATE', getArchive)
}

export default fetchBodypartSaga;