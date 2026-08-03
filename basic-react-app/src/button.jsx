
function printHello(){
    console.log("hiii ");
}
function printName(){
    console.log("Ayush");
}

export default function Button(){
    return(

<div>

  <button onClick={printHello}>Click me</button>
<p onMouseOver={printName}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore, quaerat cupiditate rerum eius porro, hic rem quae voluptatum, dicta exercitationem maxime. Commodi quo culpa voluptas eum necessitatibus provident enim.</p>



</div>


    );

}