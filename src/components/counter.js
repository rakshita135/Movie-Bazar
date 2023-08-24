import { useState } from "react";

function Count(){
const [count, setCount]= useState(0);
const [heading, setheading]= useState("This is my count")

function add(){
    if(count == 9){
        setheading("you have reached the last point 😊");
    }
    if(count<=9){

        setCount(count + 1);
    }
}
function sub(){
    setheading("This is my count");
    if(count>0){

        setCount(count -1);
    }
}


    return(
<>

<h1>{heading} : {count}</h1>
<p>This is a counting machine.</p>
<button className="count-add-btn"onClick={add}>+</button>
<button className="count-sub-btn"onClick={sub}>-</button>
</>
    );
}
export default Count;