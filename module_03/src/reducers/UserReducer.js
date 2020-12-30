const initialState = {
    name: 'Visitor',
    count: 0
}

function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_NAME':
            let newName = action.payload.name
            return { ...state, name: newName }
        case 'INCREMENT_COUNT':
            let newCount = state.count + 1
            return { ...state, count: newCount }
    }
    return state;
}

export default UserReducer