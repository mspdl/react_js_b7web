import React, { useEffect, useState } from 'react'

document.title = "Module 02 - Class 13"

function Class13() {

    const [count, setCount] = useState(0)
    const [times, setTimes] = useState('time')

    const increaseCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
        setTimes('time')
    }

    const updatePluralTime = () => {
        if (count > 1) {
            setTimes('times')
        }
    }

    useEffect(() => { alert('Welcome!') }, [])
    useEffect(updatePluralTime, [count])

    return <>
        <h1>You've clicked {count} {times}.</h1>
        <button onClick={increaseCount}>Increase Count</button>
        <button disabled={count === 0} onClick={resetCount}>Reset Count</button>
    </>
}

export default Class13