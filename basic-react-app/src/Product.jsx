import "./Product.css"

function Product({title , price , features}){
  //  let list = features.map((feature) => <li>{feature}</li>);
    return(
        <div className="Product">

            <h3>{title}</h3>
            <h5>Price: {price}</h5>
             {price >50000 ? <p>Discount of 5%</p> : null}




        </div>
    );
}

export default Product; 