
const fetchSprints = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_SPRINTS':
            return action.payload;
        case 'SPRINTS_4_MODAL':
            return action.payload;
        case 'SINGLE':
            return action.payload;
        default:
            return state;
    }
}


export default fetchSprints;