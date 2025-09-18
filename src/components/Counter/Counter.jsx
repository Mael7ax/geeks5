import {useCallback, useState} from "react";
import {ChildButton} from "./ChildButton.jsx";


export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    },[])
    console.log("Counter render")

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",gap:"50px", justifyContent: "center"}}>
            <h3>{count}</h3>
            <ChildButton onClick={handleClick} label="Click me"/>
        </div>
    );
};