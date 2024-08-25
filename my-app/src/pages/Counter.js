import React, {useState} from "react";

const Counter = () => {
    const [num, setNumber] = useState(0);   // const num = 0 이랑 똑같음

    const increase = () => {
        setNumber(num + 1); // num = num + 1 이라는 의미 (상태 관리에 용이)
    }

    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter