import React, { useState } from 'react';
import { connect } from 'react-redux';

function PrivatePage(props) {

    const handleIncrement = () => {
        props.increment();
    }

    const handleChangeNameButton = () => {
        props.setName(name)
    }

    const [name, setName] = useState(props.name)

    return <>
        <h4>{props.name}'s Private page</h4>
        <input type='text' value={name} onChange={(e) => { setName(e.target.value) }}></input>&nbsp;
        <button onClick={handleChangeNameButton}>Change Name</button>
        <br /><br />
        <span>Current Count: {props.count}</span>&nbsp;
        <button onClick={handleIncrement}>+1</button>
    </>
}

const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        count: state.user.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (newName) => dispatch({
            type: 'SET_NAME',
            payload: { name: newName }
        }),
        increment: () => dispatch({
            type: 'INCREMENT_COUNT'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivatePage)