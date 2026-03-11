import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart(){

    const { cart } = useContext(CartContext)

    const total = cart.reduce(
        (sum,item)=> sum + item.price * item.qty,
        0
    )

    return(

        <div style={{padding:"40px"}}>

            <h2>Giỏ hàng</h2>

            <table style={{width:"100%",marginTop:"20px"}}>

                <thead>

                <tr>
                    <th>Tên laptop</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                </tr>

                </thead>

                <tbody>

                {cart.map(item=>(

                    <tr key={item.id}>

                        <td>{item.name}</td>

                        <td>{item.price.toLocaleString()} đ</td>

                        <td>{item.qty}</td>

                        <td>
                            {(item.price*item.qty).toLocaleString()} đ
                        </td>

                    </tr>

                ))}

                </tbody>

            </table>

            <h3 style={{marginTop:"30px"}}>

                Tổng tiền: {total.toLocaleString()} đ

            </h3>

            <button style={{
                padding:"12px 20px",
                background:"green",
                color:"white",
                border:"none",
                borderRadius:"6px"
            }}>

                Thanh toán

            </button>

        </div>

    )

}

export default Cart