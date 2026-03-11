function Checkout(){

    return(

        <div style={{padding:"40px"}}>

            <h2>Thanh toán</h2>

            <input placeholder="Tên khách hàng"/>

            <br/>

            <input placeholder="Số điện thoại"/>

            <br/>

            <input placeholder="Địa chỉ"/>

            <br/>

            <button
                style={{
                    marginTop:"20px",
                    padding:"12px",
                    background:"green",
                    color:"white"
                }}
            >

                Xác nhận thanh toán

            </button>

        </div>

    )

}

export default Checkout