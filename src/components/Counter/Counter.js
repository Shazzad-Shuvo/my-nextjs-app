"use client"

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Increase</button>
            <button className="btn btn-primary" onClick={() => setCounter(counter - 1)}>Decrease</button>
        </div>
    );
};

export default Counter;