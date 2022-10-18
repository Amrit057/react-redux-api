import React from "react";
import { useGetAllProductQuery } from "./Services/products";
import { Link } from "react-router-dom";

const Card = () => {
    const responseInfo = useGetAllProductQuery()

    console.log("Response Information: ", responseInfo)
    console.log("Data: ", responseInfo.data)

    if (responseInfo.isLoading) return <h1>Loading.....</h1>
    if (responseInfo.isError) return <h1>An error occurred{responseInfo.error.error}</h1>

    return (
        <>
            {
                responseInfo.data.map((products, i) =>

                    <Link to="product" style={{textDecoration: "none"}}>
                        <div key={i} className="product">
                            <h3>{products.category}</h3>
                            <img src={products.image} />
                            <p>{products.price}</p>
                        </div>
                    </Link>
                )
            }
        </>
    )
}

export default Card;
