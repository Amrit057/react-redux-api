import React from "react";
import { useGetProductByIdQuery } from "./Services/products";

const Product = () => {
    const responseInfo = useGetProductByIdQuery(1)
    return (
        <>
            <div className="product">
                <h3>{responseInfo.data.category}</h3>
                <img src={responseInfo.data.image} />
                <p>{responseInfo.data.price}</p>
            </div>
        </>
    )
}

export default Product;