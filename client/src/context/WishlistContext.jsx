import React, { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {

    const [wishlist, setWishlist] = useLocalStorage("wishlist")

    function addWishlist(item) {
        const elementIdex = wishlist.findIndex((x) => x._id === item._id)
        if (elementIdex !== -1) {

            setWishlist(wishlist.filter((x) => x._id !== item._id))
        }
        else {
            setWishlist([...wishlist, item])
        }
    }

    

    const data = {
        wishlist, addWishlist
    }
    return (
        <>
            <WishlistContext.Provider value={data}>
                {children}
            </WishlistContext.Provider>
        </>
    )
}

export default WishlistProvider