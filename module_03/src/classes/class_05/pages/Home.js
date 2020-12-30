import React from 'react';
import { connect } from 'react-redux';

function Home(props) {

    return <>
        <h4>Home Page</h4>
        Current Name: {props.name}
        <br />
        Current Count: {props.count}
        <br />
    </>
}


const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        count: state.user.count
    }
}

export default connect(mapStateToProps)(Home) 