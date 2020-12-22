import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width: 400px;
    height: 30px;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #000;
`

function Class10() {

    const [text, setText] = useState('')

    return <>
        <Input type='text' value={text} onChange={(e) => { setText(e.target.value) }}></Input>
        <p>Text size: {text.length}</p>
    </>
}

export default Class10