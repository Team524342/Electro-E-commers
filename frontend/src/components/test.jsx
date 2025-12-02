import React, { useState } from "react";
import { Heart,HeartHandshakeIcon } from "lucide-react";

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
const [showpara, setShowpara] = useState(false);
const handleClicks =() => {
    setShowpara (!showpara)
}

const [counts, setCounts]= useState(0);
const [like, setLike]= useState(false);
const liked =( ) => {
    if (like) {
        setLike(false);
        setCounts(counts-1);
    }
    else {
        setLike(true);
        setCounts(counts+1);
    }
}
    return (<div>Test Component count: {count}
        <button type="button" onClick={handleClick}>+</button>
        <button type="button" onClick={decrement} disabled={count===0}> -</button>
        <button type="button" onClick={handleClicks}>{showpara ? "hide" : "show"}</button>
        <p>{showpara && "This is a paragraph shown conditionally."  }</p>
        <button type="button" onClick={liked} >{like ? <Heart size={20} color="red"/> : <Heart size={20} color="green"/>}</button>{counts}
        
        <HeartHandshakeIcon />
    </div>
    );

}
