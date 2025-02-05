import Product from "./Product";

function ProductTab() {
    let features = ["hi-tech", "durable", "fast"];
    return (
        <div>
            <Product Title="Pen"/>
            <Product Title="laptop" price={40000}/>
            <Product Title="phone" price="25000"/>
        </div>
    );
} 

export default ProductTab