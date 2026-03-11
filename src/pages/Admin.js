import { useState } from "react";

function Admin(){

    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [image,setImage] = useState("")

    const [products,setProducts] = useState([])

    function addProduct(){

        if(!name || !price || !image) return

        const newProduct = {

            id: Date.now(),
            name,
            price: Number(price),
            image

        }

        setProducts([...products,newProduct])

        setName("")
        setPrice("")
        setImage("")

    }

    return(

        <div style={{padding:"40px"}}>

            <h2>Admin - Thêm Laptop</h2>

            <div style={{
                display:"flex",
                flexDirection:"column",
                gap:"10px",
                width:"300px"
            }}>

                <input
                    placeholder="Tên laptop"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />

                <input
                    placeholder="Giá"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />

                <input
                    placeholder="Link ảnh"
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                />

                <button
                    onClick={addProduct}
                    style={{
                        padding:"10px",
                        background:"green",
                        color:"white",
                        border:"none"
                    }}
                >
                    Thêm sản phẩm
                </button>

            </div>

            <h3 style={{marginTop:"40px"}}>Danh sách laptop đã thêm</h3>

            <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(3,1fr)",
                gap:"20px",
                marginTop:"20px"
            }}>

                {products.map(p=>(

                    <div key={p.id} style={{
                        border:"1px solid #ddd",
                        padding:"10px"
                    }}>

                        <img
                            src={p.image}
                            style={{width:"100%"}}
                        />

                        <h4>{p.name}</h4>

                        <p>{p.price.toLocaleString()} đ</p>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default Admin