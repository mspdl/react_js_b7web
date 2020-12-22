import React, { useState } from 'react'


function Class09() {

    const [count, setCount] = useState(0);
    const [time, setTime] = useState("time");

    const increaseButton = () => {
        setCount(count + 1);
        updateTimes(count + 1);
    }

    const updateTimes = (count) => {
        console.log(count)
        if (count > 1) {
            setTime("times");
        }
        if(count % 25 === 0){
            alert("Take a break, you're clicking too much!")
        }
    }

    return <>
        <div>{count} {time}</div>
        <button onClick={increaseButton}>Click to increase</button>
    </>
}

export default Class09