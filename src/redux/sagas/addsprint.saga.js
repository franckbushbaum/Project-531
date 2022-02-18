import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* addSprint(action){
    try {
      console.log('Sprint saga wired up: ', action.payload)
        const newSprint = action.payload;
        yield axios.post('/api/sprints', newSprint);
        const allSprints = yield axios.get('/api/sprints/get');
        console.log('All sprints called back:', allSprints.data)
        yield put({ type: 'SET_ALL_SPRINTS', payload: allSprints.data})
      } catch(err) {
        console.log(err)
      }
};

function* getSprints(){
  try{
    const sprints = yield axios.get('/api/sprints/get');
    // console.log('ALL SPRINTS FOR MODAL', sprints.data)
    yield put({ type: 'SPRINTS_4_MODAL', payload: sprints.data})
  } catch (err){
    console.log(err)
  }
}

function* getSingleGraph(action){
  try{
    console.log('action.payload', action.payload)
    const graph = action.payload
    const single = yield axios.get(`/api/sprints/get/${graph}`);
    console.log('data coming back is: ', single.data);
    yield put({ type: 'SINGLE', payload: single.data})

  } catch (err){
    console.log(err)
  }
}

function* addSprintSaga(){
    yield takeLatest('SEND_SPRINT', addSprint)
    yield takeLatest('SEND_SPRINTS', getSprints)
    yield takeLatest('GET_SINGLE_GRAPH', getSingleGraph)

}

export default addSprintSaga;