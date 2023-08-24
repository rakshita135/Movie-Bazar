import { useState } from "react"
import Count from "./counter";

function SecondComp(){
const [name, setName] = useState("SpiderMan");


function changeHerofun(){
    setName("ShaktiMaan");
}

    return (
        <>
        <h1>This is My second component.</h1>
        My hero is {name}
        <br></br>
        <button onClick={changeHerofun}>
            Change Hero
        </button>


        <Count/>
        </>
    );
}

export default SecondComp;