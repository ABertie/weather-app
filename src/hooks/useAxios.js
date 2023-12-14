import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5"

export default function useAxios(lat, lon) { 
    const [response, setResponse] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const key = "866f3767b87deb1fb0df0d5e4ef53da1"

    async function getData() {
        try {
            // throw new Error("This in an error")
            const RESPONSE = await axios.get(`/weather?lat=${lat}&lon=${lon}&appid=${key}`)
            setResponse(RESPONSE.data)
        } 
        catch {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    
    useEffect(function() {
        getData()
    }, [])

    return { response, error, loading }
}