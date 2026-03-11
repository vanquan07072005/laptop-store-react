function Login(){

    return(

        <div style={{padding:"40px"}}>

            <h2>Đăng nhập</h2>

            <input placeholder="Email"/>

            <br/>

            <input placeholder="Password" type="password"/>

            <br/>

            <button
                style={{
                    marginTop:"20px",
                    padding:"10px",
                    background:"blue",
                    color:"white"
                }}
            >

                Đăng nhập

            </button>

        </div>

    )

}

export default Login