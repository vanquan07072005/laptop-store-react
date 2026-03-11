import React from "react";
import { useParams } from "react-router-dom";
import laptops from "../data/laptops";

function ProductDetail() {
    const { id } = useParams();

    const product = laptops.find((item) => item.id === Number(id));

    if (!product) {
        return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
    }

    return (
        <div
            style={{
                maxWidth: "1000px",
                margin: "40px auto",
                display: "flex",
                gap: "30px"
            }}
        >
            <img
                src={product.image}
                alt={product.name}
                style={{
                    width: "400px",
                    borderRadius: "10px"
                }}
            />

            <div>
                <h1>{product.name}</h1>

                <h2 style={{ color: "red" }}>{product.price}</h2>

                <p>{product.description}</p>

                <button
                    style={{
                        padding: "10px 20px",
                        background: "#ff4d4f",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                    }}
                >
                    Thêm vào giỏ
                </button>
            </div>
        </div>
    );
}

export default ProductDetail;