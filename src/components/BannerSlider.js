import { useState } from "react"

function BannerSlider(){

    const banners = [

        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",

        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",

        "https://images.unsplash.com/photo-1518770660439-4636190af475"

    ]

    const [index,setIndex] = useState(0)

    setTimeout(()=>{

        setIndex((index+1)%banners.length)

    },4000)

    return(

        <img
            src={banners[index]}
            style={{
                width:"100%",
                height:"350px",
                objectFit:"cover"
            }}
        />

    )

}

export default BannerSlider