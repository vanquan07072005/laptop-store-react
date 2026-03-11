import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar(){

    return(

        <div className="navbar">

            <Link to="/">Trang chủ</Link>

            <Link to="/products">Sản phẩm</Link>

            <Link to="/news">Tin tức</Link>

            <Link to="/about">Giới thiệu</Link>

            <Link to="/contact">Liên hệ</Link>

        </div>

    )

}

export default Navbar