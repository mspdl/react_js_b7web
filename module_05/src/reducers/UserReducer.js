const initialState = {
    token: '',
    name: 'Test'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return { ...state, token: action.payload.name };
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
        default:
            break;
    }

    return state;
}