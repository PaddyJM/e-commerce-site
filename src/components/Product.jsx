import React, {useState} from "react";

export default function Product(props) {
    const [count, setCount] = useState(0)
    const handleIncrementClick = () => setCount(count + 1)
    const handleDecrementClick = () => (count > 0) ? setCount(count - 1): null

    return <div className="product">
        <img width="50" alt={props.details.altText} src={props.details.image} />
        <div className="product-info">
            <h2>{props.details.name}</h2>
            <p>{props.details.description}</p>
        </div>
        <div className="product-buttons">
            <button className="product-sub" onClick={handleDecrementClick} disabled={count === 0}>-</button>
            <h3 className="product-count">{count}</h3>
            <button className="product-add" onClick={handleIncrementClick}>+</button>
        </div>
    </div>
}