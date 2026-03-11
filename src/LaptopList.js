import React, { useEffect, useState } from "react";
import axios from "axios";

function LaptopList() {

    const [laptops, setLaptops] = useState([]);
    const [search,setSearch] = useState("");
    const [brandFilter,setBrandFilter] = useState("");

    const loadLaptops = ()=>{
        axios.get("http://localhost:8080/laptops")
            .then(res=>{
                setLaptops(res.data);
            });
    };

    useEffect(()=>{
        loadLaptops();
    },[]);


    const filteredLaptops = laptops.filter(laptop=>{

        return (
            laptop.name.toLowerCase().includes(search.toLowerCase())
            &&
            (brandFilter === "" || laptop.brand === brandFilter)
        );

    });


    return (

        <div style={{padding:"40px"}}>

            <h1>Danh sách Laptop</h1>

            {/* SEARCH */}

            <input
                placeholder="Tìm laptop..."
                onChange={(e)=>setSearch(e.target.value)}
                style={{marginRight:"20px",padding:"8px"}}
            />

            {/* FILTER BRAND */}

            <select
                onChange={(e)=>setBrandFilter(e.target.value)}
                style={{padding:"8px"}}
            >

                <option value="">Tất cả hãng</option>
                <option value="Apple">Apple</option>
                <option value="Dell">Dell</option>
                <option value="Asus">Asus</option>
                <option value="Lenovo">Lenovo</option>

            </select>



            {/* LIST LAPTOP */}

            <div style={{
                display:"flex",
                flexWrap:"wrap",
                marginTop:"30px"
            }}>

                {filteredLaptops.map(laptop=>(

                    <div
                        key={laptop.id}
                        style={{
                            border:"1px solid #ddd",
                            borderRadius:"10px",
                            boxShadow:"0 4px 10px rgba(0,0,0,0.1)",
                            margin:"20px",
                            padding:"20px",
                            width:"250px",
                            background:"white"
                        }}
                    >

                        <h3>{laptop.name}</h3>

                        <p>Brand: {laptop.brand}</p>

                        <p>CPU: {laptop.cpu}</p>

                        <p>RAM: {laptop.ram}</p>

                        <p style={{color:"red",fontWeight:"bold"}}>
                            {Number(laptop.price).toLocaleString()} VND
                        </p>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default LaptopList;