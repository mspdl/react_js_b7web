import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width: 400px;
    height: 30px;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #000;
`
function Class11() {

    const [text, setText] = useState('')
    const [isLogged, setIsLogged] = useState(true)

    return <>
        <Input type='text' value={text} onChange={(e) => { setText(e.target.value) }}></Input>

        {text.length > 0 && <>
            <h3>Text Counter</h3>
            <p>Text size: {text.length} character{text.length !== 1 ? 's' : ''}</p>
        </>}

        <br />

        {isLogged
            ? <button onClick={() => { setIsLogged(false) }}>Log out</button>
            : <button onClick={() => { setIsLogged(true) }}>Log in</button>}

    </>
}

export default Class11