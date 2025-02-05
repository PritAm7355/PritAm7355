import "./Product.css";
function Product({Title, price=1}) {
    return (
        <div className="Product">
           <h3>{Title}</h3>
           <h5>Price : {price}</h5> 
        </div>
    );
}

export default Product;