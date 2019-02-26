import React from "react";

function Product(props){
    return(
        <div>
            <p>{props.products.name}</p>
            <p>{props.products.price.toLocaleString("en-us", {style:"currency", currency:"USD"})}</p>
            <p>{props.products.description}</p>
            <button  onClick={() => console.log(props.products.name)} >Click to view </button>
        </div>
    );
}



export default Product;