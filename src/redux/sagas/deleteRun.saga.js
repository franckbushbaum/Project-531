import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* deleteRun(action){
    console.log('in deleteRun', action.payload)
    try{
        const runId = action.payload
        yield axios.delete(`/api/sprints/get/delete/${runId}`);
        yield put({ type: 'GET_SINGLE_GRAPH', payload: 'mph' })
    } catch(err){
        console.log('ERROR in Delete run saga!',err)
    }
}

function* deleteRunSaga(){
    yield takeLatest('DELETE', deleteRun)
}

export default deleteRunSaga;