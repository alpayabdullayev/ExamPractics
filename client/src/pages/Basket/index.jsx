import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
    const { basket, removeBasket, handleCountVal } = useContext(BasketContext)
    return (
        <>
            <section className='py-20'>
                <div className="wrapper">
                    <div>
                        <h1>BASKET Page</h1>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            basket && basket.map((item) => (
                                <div className='flex justify-center flex-col gap-2 items-center border py-4'>
                                    <div>
                                        <span><i className={item.image}></i></span>
                                    </div>
                                    <h>{item.name}</h>
                                    <p>{item.description}</p>
                                    <h5>{item.price}</h5>
                                    <h6>otal : {item.count * item.price}</h6>
                                    <div className='flex gap-4'>
                                        <button className='py-2 px-4 bg-red-500 text-white rounded-md' onClick={() => handleCountVal(true, item)}>+</button>
                                        <p>{item.count}</p>
                                        <button className='py-2 px-4 bg-red-500 text-white rounded-md' onClick={() => handleCountVal(false, item)}>-</button>

                                    </div>


                                    <div>
                                        <button className='py-2 px-4 bg-red-500 text-white rounded-md' onClick={() => removeBasket(item._id)}>Delete BAsket</button>
                                    </div>
                                </div>
                            ))
                        }
                        <h1>subtotal : {basket.reduce((count,product)=>count + (product.count * product.price),0)}</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Basket