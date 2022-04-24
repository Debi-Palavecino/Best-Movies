import { useState, useEffect } from "react";
import { Languages, BaseUrl, ApiKey } from "../ExportFiles";
const useFetchMovieList = (endpoint, language, page)=>{
    const [info, setInfo] = useState([]);
    const [totalPages, setTotalPages] = useState(500);

    useEffect(() => {

        fetch(`${BaseUrl}movie/${endpoint}${ApiKey}${Languages}${language}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data.results ? data.results : [])
                data?.total_pages < 500 && setTotalPages(data?.total_pages)
               
            }).catch(error=>{
                console.log(error)
            })
    }, [page, language, endpoint])

    return ([info, totalPages])
}

export default useFetchMovieList