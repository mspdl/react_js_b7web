import React, { useState } from 'react'

function Class12() {

    const [billValue, setBillValue] = useState(0)
    const [tipPercent, setTipPercent] = useState(10)

    let tipValue = (billValue * tipPercent) / 100
    let totalValue = tipValue + parseFloat(billValue)

    return <>
        <h1>Tip Calculator</h1>
        <span>Bill value: </span> <br />
        <input type='number' value={billValue} onChange={(e) => { setBillValue(e.target.value) }}></input> <br />
        <span>Tip percent:</span> <br />
        <input type='number' value={tipPercent} onChange={(e) => { setTipPercent(e.target.value) }}></input> <br />
        <br />
        {billValue > 0 && tipPercent > 0 && <>
            <span>Bill: R$ {billValue}</span><br />
            <span>Tip ({tipPercent}%): R$ {tipValue}</span>
            <h3>Total: R$ {totalValue}</h3>
        </>}
    </>
}

export default Class12