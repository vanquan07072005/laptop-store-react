import { useState } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import BannerSlider from "../components/BannerSlider"
import SidebarFilter from "../components/SidebarFilter"
import SearchBar from "../components/SearchBar"
import LaptopCard from "../components/LaptopCard"

import laptops from "../data/laptops"

import "../components/LaptopCard.css"

function Home(){

    const [brand,setBrand] = useState("")
    const [price,setPrice] = useState(100000000)
    const [search,setSearch] = useState("")

    let filtered = laptops

        .filter(lap =>
            brand === "" || lap.name.toLowerCase().includes(brand.toLowerCase())
        )

        .filter(lap =>
            lap.price <= price
        )

        .filter(lap =>
            lap.name.toLowerCase().includes(search.toLowerCase())
        )

    return(

        <div>

            <Header/>

            {/* Banner */}

            <div style={{width:"100%"}}>

                <BannerSlider/>

            </div>

            {/* Main Layout */}

            <div style={{
                maxWidth:"1200px",
                margin:"auto",
                display:"flex",
                gap:"20px",
                padding:"20px"
            }}>

                {/* Sidebar */}

                <div style={{width:"240px"}}>

                    <SidebarFilter
                        setBrand={setBrand}
                        setPrice={setPrice}
                    />

                </div>

                {/* Content */}

                <div style={{flex:1}}>

                    {/* Search */}

                    <div style={{
                        marginBottom:"20px"
                    }}>

                        <SearchBar setSearch={setSearch}/>

                    </div>

                    <h2 style={{
                        marginBottom:"20px",
                        fontSize:"26px"
                    }}>

                        Laptop nổi bật

                    </h2>

                    {/* Grid */}

                    <div className="product-grid">

                        {filtered.map(lap => (

                            <LaptopCard
                                key={lap.id}
                                laptop={lap}
                            />

                        ))}

                    </div>

                </div>

            </div>

            <Footer/>

        </div>

    )

}

export default Home