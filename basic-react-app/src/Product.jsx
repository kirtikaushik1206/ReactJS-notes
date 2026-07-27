import "./Product.css"

function Product({title ,  features=[]}){
  //  let list = features.map((feature) => <li>{feature}</li>);
  //let styles = { backgroundColor: price >50000 ? "yellow " : ""};
    return(
        <div className="Product ">

            <h3>{title}</h3>
            <h5>{features}</h5>




        </div>
    );
}

export default Product; 