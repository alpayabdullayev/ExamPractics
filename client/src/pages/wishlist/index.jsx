import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'

const Wishlist = () => {
    const { wishlist,addWishlist } = useContext(WishlistContext)
    return (
        <>
            <section className='py-20'>
                <div className="wrapper">
                    <div className='grid  grid-cols-1 gap-4  md:grid-cols-2  xl:grid-cols-3'>
                        {
                            wishlist && wishlist.map((item) => (
                                <div className='flex justify-center flex-col gap-2 items-center border py-4'>
                                    <div>
                                        <span><i className={item.image}></i></span>
                                    </div>
                                    <h>{item.name}</h>
                                    <p>{item.description}</p>
                                    <h5>price :{item.price}</h5>
 
                                    <div>
                                        <button className='py-2 px-4 bg-red-500 text-white rounded-md' onClick={() => addWishlist(item)}>Remove Wishlist</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist