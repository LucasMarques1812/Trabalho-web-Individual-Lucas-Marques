import React from "react";
import { useState } from "react";

export default function Home(){
    const [exemplo, setExemplo] = useState("Tutu");

    return(<div>
        <p>{exemplo}</p>
        <button onClick={()=>{setExemplo("Tutu de feijão")}}>click</button>
    </div>)
};