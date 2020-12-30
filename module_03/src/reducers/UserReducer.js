const initialState = {
    name: 'Visitor',
    count: 0
}

function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name }
        case 'INCREMENT_COUNT':
            let newCount = state.count + 1
            return { ...state, count: newCount }
    }
    return state;
}

export default UserReducer