import { useState, useEffect } from "react";

const useFetch = ({url}) =>{
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    if(!url) return null
    setLoading(true)
    
    useEffect(()=>{
        fetch(url)
            .then(data=>{
                setData(data.json())
                setLoading(false)
            })
            .catch(error=>{
                setLoading(false)
                setError(error.message)

            });


    },[url])

    return{data,error,loading}

}

export default useFetch