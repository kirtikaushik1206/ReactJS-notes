import "./Product.css"

function Product({title , price , features}){
    let list = features.map((feature) => <li>{feature}</li>);
    return(
        <div className="Product">

            <h3>{title}</h3>
            <h5>Price: {price}</h5>
             <p> {list}</p>




        </div>
    );
}

export default Product; 