import React from 'react'
import { connect } from 'react-redux'

document.title = 'Module 03 - Class 04'

function Class04(props) {

    const handleButton = () => {
        props.setName('Morgan')
    }

    const handleIncrement = () => {
        props.increment();
    }

    return <>
        Name: {props.name}
        <br />
        Count: {props.count}

        <br /><br />
        <button onClick={handleButton}>Set name to Morgan</button>
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


export default connect(mapStateToProps, mapDispatchToProps)(Class04)