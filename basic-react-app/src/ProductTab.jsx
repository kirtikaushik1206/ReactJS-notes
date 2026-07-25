import Product from "./Product.jsx";

function ProductTab() {
   // let options = ["hi-tech", "durable","fast" ];
    return(

        <>
        <Product title="phone" price={50000} />
<Product title="laptop"  price={80000}/>
<Product title="pen" price= {10}/>
      
        </>
    )
}

export default ProductTab;