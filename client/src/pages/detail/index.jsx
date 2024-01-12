import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams()

    const [data, setData] = useState([])


    async function getProductById() {
       try {
        const res = await axios.get(`http://localhost:8000/api/products/${id}`)
        setData(res.data)
        console.log(res.data);
       } catch (error) {
        console.log(error);
       }
    }
    useEffect(() => {
        getProductById()
    }, [])
    
  return (
    <div>

        <h1>{data.name}</h1>
    </div>
  )
}

export default Detail