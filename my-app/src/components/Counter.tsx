import React, { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = (num: number = 1): void => {
        setCounter(counter + num);
    }

    return (
        <div className='counter'>
            <h2>Counter: useState</h2>
            <span>Valor : {counter}</span>
            <div>

            <button className='ov-btn-slide-top'
                onClick={() => increment()}
                > + 1</button>

            <button className='ov-btn-slide-top2'
                onClick={() => increment(2)}
                > + 2</button>

            <button className='ov-btn-slide-top3'
                onClick={() => setCounter(0)}
                >Reset</button>
                </div>
        </div>
    )
}

