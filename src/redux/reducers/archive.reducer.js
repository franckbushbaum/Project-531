const archiveStorage = (state = [], action) => {
    switch (action.type) {
        case 'ARCHIVE_DATA':
            return action.payload;
        default:
            return state;
    }
}

export default archiveStorage;