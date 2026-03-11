function SidebarFilter({setBrand,setPrice}){

        return(

            <div className="sidebar">

                    <h3>Hãng</h3>

                    <button onClick={()=>setBrand("")}>Tất cả</button>
                    <button onClick={()=>setBrand("Dell")}>Dell</button>
                    <button onClick={()=>setBrand("Asus")}>Asus</button>
                    <button onClick={()=>setBrand("Lenovo")}>Lenovo</button>
                    <button onClick={()=>setBrand("HP")}>HP</button>
                    <button onClick={()=>setBrand("Acer")}>Acer</button>
                    <button onClick={()=>setBrand("MSI")}>MSI</button>

                    <hr/>

                    <h3>Giá</h3>

                    <button onClick={()=>setPrice(20000000)}>Dưới 20 triệu</button>
                    <button onClick={()=>setPrice(30000000)}>20 - 30 triệu</button>
                    <button onClick={()=>setPrice(100000000)}>Trên 30 triệu</button>

            </div>

        )

}

export default SidebarFilter