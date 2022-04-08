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

function* fetchLongAirQuality(action){
    try{
        console.log('what is action.payload', action.payload);
        const params = action.payload
        const { lon, lat, user, hours} = params;
        const airQuality = yield axios.get(`/api/air-quality/${hours}`, {params});
        console.log('what is air quality response 72 hours:', airQuality.data.data)
        yield put({ type: 'SET_LONG_AIR_QUALITY', payload: airQuality.data.data})
    } catch(error){
        console.log('fetchLongAirQuality error:', error)
    }
}

function* fetchAirQualitySaga(){
    yield takeLatest('FETCH_AIR_QUALITY', fetchAirQuality)
    yield takeLatest('FETCH_LONG_AIR_QUALITY', fetchLongAirQuality)
}

export default fetchAirQualitySaga;