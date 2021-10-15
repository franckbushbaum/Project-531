

const fetchWorkout = (state = [], action) => {
    if (action.type === 'SET_WORKOUT') {
        return action.payload;
    } 
    return state;
}

export default fetchWorkout;