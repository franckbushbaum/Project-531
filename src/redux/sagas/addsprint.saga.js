import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* addSprint(action){
    try {
      console.log('Sprint saga wired up: ', action.payload)
        const newSprint = action.payload;
        yield axios.post('/api/sprints', newSprint);

      } catch(err) {
        console.log(err)
      }
};

function* addSprintSaga(){
    yield takeLatest('SEND_SPRINT', addSprint)

}

export default addSprintSaga;