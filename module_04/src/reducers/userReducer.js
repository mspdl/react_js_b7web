const initialState = {
    email: 'me@example.com'
}

function userReducer(state = initialState, action) {

    if (action.type === 'SET_EMAIL') {
        let newEmail = action.payload.email
        return { ...state, email: newEmail }
    }

    return state;
}

export default userReducer