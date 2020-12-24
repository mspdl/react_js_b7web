import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const InputText = styled.input`
    border: 2px solid #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width: 300px;
    margin-bottom: 5px;
`

function AddBox(props) {

    const [textField, setTextField] = useState('')

    function handleKeyUp(e) {
        const ENTER_KEY = 13;
        if (e.keyCode == ENTER_KEY) {
            if (props.onEnter) {
                props.onEnter(textField);
            }
            setTextField('');
        }
    }

    return <>
        <InputText
            type='text'
            value={textField}
            onChange={(e) => { setTextField(e.target.value) }}
            onKeyUp={handleKeyUp}
            placeholder={props.placeholder ?? ' Add...'}
        />
    </>
}

export default AddBox