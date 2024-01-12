import React, { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
    const [localData, setLocalData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [] )

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(localData))
    }, [localData])

    function handleData(data) {
        setLocalData(data)
    }
    
    return [localData,handleData ]

}

export default useLocalStorage