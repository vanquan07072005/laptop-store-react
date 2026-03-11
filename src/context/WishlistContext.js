import { createContext, useState } from "react"

export const WishlistContext = createContext()

export function WishlistProvider({children}){

    const [wishlist,setWishlist] = useState([])

    function addWishlist(product){

        setWishlist([...wishlist,product])

    }

    return(

        <WishlistContext.Provider value={{wishlist,addWishlist}}>

            {children}

        </WishlistContext.Provider>

    )

}