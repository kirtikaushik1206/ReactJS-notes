export default function LudoBoard(){

 let [moves , setmoves] = ({blue:0 , red:0 , yellow:0 , green:0 })
    return(


<div>
    <p>Game Begins!</p>
    <div className="board">

        <p>Blue moves = </p>
       <button>+1</button>
<p>Yellow moves =</p>
<button>+1</button>
 <p>Green moves =</p>
<button>+1</button>
 <p>Red moves = </p>
<button>+1</button>



    </div>
</div>


    )
}