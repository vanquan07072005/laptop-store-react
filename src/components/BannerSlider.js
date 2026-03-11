import React from "react";

const banners = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
    }
];

function BannerSlider() {
    return (
        <div style={{ width: "100%", marginBottom: "20px" }}>
            {banners.map((banner) => (
                <img
                    key={banner.id}
                    src={banner.image}
                    alt="Laptop banner"
                    style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginBottom: "10px"
                    }}
                />
            ))}
        </div>
    );
}

export default BannerSlider;