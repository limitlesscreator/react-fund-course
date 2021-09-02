import React, {useState} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')


    function inc(){
        setCount(count + 1)
    }
    function dec(){
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <h2>{value}</h2>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <br/>
            <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
        </div>
    );
};
