import React, { useState } from "react";
export default function Test() {
const [count, setCount] = useState(1);
const handleClick = () => {
    setCount(count + 1);
}
const decrement =() =>{
    if (count > 0)(
        setCount(count - 1)
    )
    
}
    return (<div>Test Component count: {count}
        <button type="button" onClick={handleClick}>+</button>
        <button type="button" onClick={decrement} disabled={count===0}> -</button>
    </div>

    );


}
