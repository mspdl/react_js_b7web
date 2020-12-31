const initialState = {
    email: 'me@example.com'
}

export default (state = initialState, action) => {

    if (action.type == 'SET_EMAIL') {
        let newEmail = action.payload.email
        return { ...state, email: newEmail }
    }

    return state;
}