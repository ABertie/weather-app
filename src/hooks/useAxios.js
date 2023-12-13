import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5"

export default function useAxios(lat, lon) { 
    const [response, setReponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const key = "acde6c324f209a15c8d76699ab141695"

    async function getData() {
        try {
            // throw new Error("This in an error")
            const RESPONSE = await axios.get(`/weather?lat=${lat}&lon=${lon}&appid=${key}`)
            setReponse(RESPONSE.data)
        } catch {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(function() {
        console.log(lat);
        console.log(lon);
        getData()
    }, [])

    return { response, error, loading }
}