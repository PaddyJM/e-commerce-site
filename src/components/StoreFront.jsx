import React from "react";
import Product from "./Product";
import products from "../products.json"

export default function StoreFront() {
    let productArray = [];
    for(let i = 0; i < products.length ; i++) {
        productArray.push(<Product details={products[i]} key={products[i].name} />)
    }
    return <div className="store-front">
        {productArray}
    </div>;
}