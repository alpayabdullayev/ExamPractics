import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const BasketContext = createContext()

const BasketProvider = ({children}) => {

    const [basket, setBasket] = useLocalStorage('basket')

    function AddToBasket(item) {
        const elementIndex = basket.findIndex((x)=>x._id === item._id)

        if (elementIndex !== -1) {
            basket[elementIndex].count++
            setBasket([...basket])
        }
        else{
            setBasket([...basket,{...item,count : 1 }])
        }
    }

    function removeBasket(_id) {
        setBasket(basket.filter(item=>item._id !== _id))
    }



    function handleCountVal(isAdd,item) {
        const elementIndex = basket.findIndex((x)=>x._id ===item._id)
        const newBasket =  [...basket]
        if(isAdd){
            newBasket[elementIndex].count++
            setBasket(newBasket)
        }
        else{
            if (newBasket[elementIndex].count === 1) {
                return
            }
            newBasket[elementIndex].count--
            setBasket(newBasket)
        }
    }

    const data = {
        AddToBasket,basket,removeBasket,handleCountVal
    }

  return (
   <>
   <BasketContext.Provider value={data}>
    {children}
   </BasketContext.Provider>
   </>
  )
}

export default BasketProvider