import "./Header.css"

function Header(){

    return(

        <div className="header">

            <div className="header-top">

                <div className="logo">
                    Văn Quân Laptop
                </div>

                <input
                    className="search"
                    placeholder="Tìm sản phẩm..."
                />

                <div className="header-right">

<span className="phone">
📞 0346 970 705
</span>

                    <span className="cart">
🛒 Giỏ hàng
</span>

                </div>

            </div>

            <div className="menu">

                <a href="/">Trang chủ</a>
                <a href="/products">Sản phẩm</a>
                <a href="/news">Tin tức</a>
                <a href="/about">Giới thiệu</a>
                <a href="/contact">Liên hệ</a>

            </div>

        </div>

    )

}

export default Header