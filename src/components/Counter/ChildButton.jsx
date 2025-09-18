import {memo} from "react";

export const ChildButton = memo(({onClick, label }) => {
        console.log("ChildButton render")
        return (
            <button style={{padding: "30px",backgroundColor: "white",color:"black"}} onClick={onClick}>{label}</button>
        )
    }
)