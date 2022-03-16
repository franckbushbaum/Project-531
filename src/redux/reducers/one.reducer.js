const workoutTypeId = (state = [], action) => {
    switch (action.type) {
        case 'SET_WORKOUT_TYPE_ID':
            return action.payload;
        case 'SET_AIR_QUALITY':
            return action.payload;
        default:
            return state;
    }
}

export default workoutTypeId;