import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'



const Product = () => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { addWishlist, wishlist } = useContext(WishlistContext)
    const { AddToBasket, basket } = useContext(BasketContext)

    async function getAllProducts() {
        try {
            const res = await axios.get("http://localhost:8000/api/products/")
            setIsLoading(false)
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (

        <section className='py-20 min-h-[100vh] '>
            <div className="wrapper">
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-4'>

                    {
                        isLoading ? <p>loading...</p> : data && data.map((item) => (
                            <div className=' flex flex-col gap-2 w-full '>
                                <div>
                                    <span className='text-lg text-blue-500'><i className={item.image}></i></span>
                                </div>
                                <NavLink to={`/product/${item._id}`}> <h1 className='text-2xl font-semibold'>{item.name}</h1></NavLink>
                                <p>{item.description}</p>
                                
                              <div>
                              <button className='text-blue-500'>Learn More</button>
                              </div>

                                <div className='flex gap-4'>
                                    <div>
                                        <button onClick={() => AddToBasket(item)} className='py-2 px-3 bg-blue-500 text-white rounded-md'>AddToBasket</button>
                                    </div>
                                    <div>
                                        <button onClick={() => addWishlist(item)} className='py-2 px-3 bg-blue-500 text-white rounded-md'>{
                                            wishlist.some(x => x._id === item._id) ? 'Add Wish' : 'Remove Wishlist'
                                        }</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Product