import { Link } from "react-router-dom"

function LaptopCard({laptop}){

    return(

        <div className="laptop-card">

            <div className="wishlist">❤️</div>

            <Link to={`/product/${laptop.id}`}>

                <img
                    src={laptop.image}
                    alt={laptop.name}
                    className="laptop-image"
                />

            </Link>

            <h4 className="laptop-name">
                {laptop.name}
            </h4>

            <div className="rating">
                ⭐⭐⭐⭐⭐ (124)
            </div>

            <p className="laptop-price">
                {laptop.price.toLocaleString()} đ
            </p>

            <button className="cart-btn">
                🛒 Thêm vào giỏ
            </button>

        </div>

    )

}

export default LaptopCard