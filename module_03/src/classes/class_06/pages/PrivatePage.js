import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PrivatePage() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

    const [name, setName] = useState(user.name)

    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT_COUNT'
        })
    }

    const handleChangeNameButton = () => {
        dispatch({
            type: 'SET_NAME',
            payload: { name: name }
        })
    }


    return <>
        <h4>{user.name}'s Private page</h4>
        <input type='text' value={name} onChange={(e) => { setName(e.target.value) }}></input>&nbsp;
        <button onClick={handleChangeNameButton}>Change Name</button>
        <br /><br />
        <span>Current Count: {user.count}</span>&nbsp;
        <button onClick={handleIncrement}>+1</button>
    </>
}


export default PrivatePage