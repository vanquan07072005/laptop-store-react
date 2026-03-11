import React from "react";

function Banner() {
    return (
        <div style={{
            background: "linear-gradient(135deg,#4facfe,#00f2fe)",
            padding: "80px",
            textAlign: "center",
            color: "white"
        }}>

            <h1 style={{fontSize:"40px",marginBottom:"10px"}}>
                Văn Quân Laptop Store
            </h1>

            <h2 style={{fontSize:"28px",marginBottom:"15px"}}>
                Chuyên Laptop Chính Hãng
            </h2>

            <p style={{fontSize:"20px"}}>
                Hotline: 0346 970 705
            </p>

        </div>
    );
}

export default Banner;