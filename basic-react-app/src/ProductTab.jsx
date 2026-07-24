import Product from "./Product.jsx";

function ProductTab() {
    let options = ["hi-tech", "durable","fast" ];
    return(

        <>
        <Product title="phone" price={50000} features={options}/>
<Product title="laptop"  price={80000}/>
<Product title="pen" price= {10}/>
        
        </>
    )
}

export default ProductTab;