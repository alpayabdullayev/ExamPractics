import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminPage = () => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState('')

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

    function lowtohoigh() {
        const sorted = [...data].sort((a, b) => a.price > b.price ? 1 : b.price > a.price ? -1 : 0)
        setData(sorted)
    }
    function highToLoqw() {
        const sorted = [...data].sort((a, b) => b.price > a.price ? 1 : a.price > b.price ? -1 : 0)
        setData(sorted)
    }
    function handleSearch(e) {
        setSearch(e.target.value)
    }
    return (
        <>
            <section className='py-20'>
                <div className="wrapper">
                    <div className='flex justify-between items-center'>
                        <h1>
                            Products LIst
                        </h1>

                        <div>
                            <button className='py-2 px-4 bg-blue-500 rounded-md text-white'> Add Page</button>
                        </div>
                    </div>
                    <div className='flex  gap-4 justify-center items-center'>
                        <button onClick={lowtohoigh} className='py-2 px-4 bg-blue-500 rounded-md text-white'>LowTOhIGH</button>
                        <button onClick={highToLoqw} className='py-2 px-4 bg-blue-500 rounded-md text-white'>hIghToLow</button>
                        <input type="text" className='border' onChange={(e) => handleSearch(e)} />
                    </div>

                    <div className='py-10 overflow-auto'>
                        <table className='border w-full'>
                            <thead>
                                <tr>
                                    <th className='py-2 px-2 border'>Image</th>
                                    <th className='py-2 px-2 border'>Name</th>
                                    <th className='py-2 px-2 border'>Price</th>
                                    <th className='py-2 px-2 border'>ACtions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    isLoading ? <p>loading...</p> : data && data.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((item) => (
                                        <tr>
                                            <td className='py-2 px-2 border'><i className={item.image}></i></td>
                                            <td className='py-2 px-2 border'>{item.name}</td>
                                            <td className='py-2 px-2 border'>{item.price}</td>
                                            <td className='py-2 px-2 border'><button className='py-2 px-4 bg-red-500 rounded-md text-white'>delete</button></td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AdminPage