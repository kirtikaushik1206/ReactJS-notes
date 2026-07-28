import "./Product.css"
import Price from "./Price";
function Product({title , idx}){
  //  let list = features.map((feature) => <li>{feature}</li>);
  //let styles = { backgroundColor: price >50000 ? "yellow " : ""};
  let oldPrices =["12,495" , "11,900" , "1,599" ,"599"];
  let newPrices =["8,999" , "9,199" , "899" , "278"];
  
  return(
        <div className="Product ">
<h3>{title}</h3>
<h5>Description</h5>
<Price oldPrice={oldPrices[idx]} newPrice ={newPrices[idx]} />
        </div>
    );
}

export default Product; 