import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchAirQuality(action){
    try{
        const { lon, lat, user } = action.payload
        const coordinate = { lat, lon}
        const airQuality = yield axios.get(`/api/air-quality/`, { params: coordinate});
        console.log('what is air quality.data.data', airQuality.data.data)
        yield put({type: 'SET_AIR_QUALITY', payload: airQuality.data.data })
    } catch(error) {
        console.log('fetchAirQuality error', error);
    }
}

function* fetchAirQualitySaga(){
    yield takeLatest('FETCH_AIR_QUALITY', fetchAirQuality)
}

export default fetchAirQualitySaga;