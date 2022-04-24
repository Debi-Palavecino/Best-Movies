import {BaseUrl,ApiKey,Languages} from '../ExportFiles'
import {useState, useEffect} from 'react'

const useFetchMovieDetails = (endpoint, lang) =>{
    const [info, setInfo] = useState({});

    useEffect (() => {
        fetch(`${BaseUrl}movie/${endpoint}${ApiKey}${Languages}${lang}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
    }, [endpoint,lang])

    return ({info: info})
}
export default useFetchMovieDetails
 