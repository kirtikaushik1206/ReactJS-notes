import { useState } from "react"





export default function Counter(){
const[Count , setCount] = useState(0);

function incCount(){
    setCount(Count+1);
}

function decCount(){
    if(Count>0){
    setCount(Count-1);}

}

    return(

<>


<div>
<div>{Count}</div>

    <button onClick={incCount}>Increase Count</button>
    <button onClick={decCount}>Decrease Count</button>
</div>



</>




    )
}