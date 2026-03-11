import { useParams } from "react-router-dom"
import laptops from "../data/laptops"

function ProductDetail(){

    const {id} = useParams()

    const product = laptops.find(p=>p.id==id)

    if(!product) return <h2>Không tìm thấy sản phẩm</h2>

    return(

        <div style={{
            padding:"40px",
            display:"flex",
            gap:"40px"
        }}>

            <img
                src={product.image}
                style={{
                    width:"400px",
                    borderRadius:"10px"
                }}
            />

            <div>

                <h2>{product.name}</h2>

                <h3 style={{color:"red"}}>
                    {product.price.toLocaleString()} đ
                </h3>

                <p>

                    Laptop chính hãng, bảo hành 12 tháng.

                </p>

                <button
                    style={{
                        background:"#ee4d2d",
                        color:"white",
                        padding:"12px 20px",
                        border:"none",
                        borderRadius:"6px"
                    }}
                >

                    🛒 Thêm vào giỏ

                </button>

            </div>

        </div>

    )

}

export default ProductDetail