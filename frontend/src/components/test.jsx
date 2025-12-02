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
    return (<div>Test Component
        <button type="button" onClick={handleClick}>N ={count} </button>
        <button type="button" onClick={decrement} disabled={count===0}>N-- ={count} </button>
    </div>

    );


}
