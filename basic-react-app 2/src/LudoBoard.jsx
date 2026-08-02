import { useState } from "react"


export default function LudoBoard(){

 let [moves , setmoves] = ({blue:0 , red:0 , yellow:0 , green:0 })
   
let updateBlue =() =>{
    console.log(`moves.blue = ${moves.blue}`);
setmoves(prevmoves) => {
  return  {...prevmoves , blue: prevmoves.blue +1}
}
return(
<div>
    <p>Game Begins!</p>
    <div className="board">

        <p>Blue moves = {moves.blue}</p>
       <button>+1</button>
<p>Yellow moves ={moves.yellow}</p>
<button>+1</button>
 <p>Green moves ={moves.green}</p>
<button>+1</button>
 <p>Red moves = {moves.red} </p>
<button>+1</button>



    </div>
</div>


    )
}