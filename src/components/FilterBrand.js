function FilterBrand({setBrand}){

    return(

        <div style={{textAlign:"center"}}>

            <button onClick={()=>setBrand("")}>All</button>

            <button onClick={()=>setBrand("Dell")}>Dell</button>

            <button onClick={()=>setBrand("Asus")}>Asus</button>

            <button onClick={()=>setBrand("Macbook")}>Macbook</button>

            <button onClick={()=>setBrand("Lenovo")}>Lenovo</button>

        </div>

    )

}

export default FilterBrand