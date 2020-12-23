import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    font-size: 17px;
`

function PhraseButton(props) {

    const [previousRandomNumber, setPreviousRandomNumber] = useState(0)

    function updatePhrase(){
        let newRandomNumber = getRandomInt()
        while(previousRandomNumber === newRandomNumber){
            newRandomNumber =getRandomInt()
        }
        setPreviousRandomNumber(newRandomNumber)
        let randomPhrase = getPhrase(newRandomNumber)
        props.onButtonClick(randomPhrase)
    }

    function getRandomInt() {
        const PHRASES_QTD = 11;
        return Math.floor(Math.random() * PHRASES_QTD ) + 1;
    }

    function getPhrase(phraseNumber){
        switch(phraseNumber){
            case 1:
                return "Doesn't avoid double negatives!"
            case 2:
                return "Gamers unite – separately in your own homes!"
            case 3:
                return "I have a suggestion."
            case 4:
                return "Khaaaaaaaaan!"
            case 5:
                return "Mmmph, mmph!"
            case 6:
                return "More addictive than lemonade!"
            case 7:
                return "Plant a tree!"
            case 8:
                return "Save the world – stay inside!"
            case 9:
                return "This is my true form!"
            case 10:
                return "Wow!"
            default:
                return "I am Inevitable."
        }
            

    }

    return <>
        <Button onClick={updatePhrase}>Click Here To Change the Phrase</Button>
    </>
}

export default PhraseButton