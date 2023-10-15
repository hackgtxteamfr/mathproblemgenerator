import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import https from "https"

const fetcher = async(url) => {
    const res = await axios(url)
    return res.data
}

const url = {
    method: "get",
    url: "https://api.api-ninjas.com/v1/facts?limit=1",
    headers: { 'X-Api-Key': 'zUpL5t/qmcHO0BIGHnqw2g==WxltOe6qsXE5lqTz'},
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
}

export default function Fact() {
    const { data, error, isLoading, isValidating } = useSWR(url, fetcher)
    if (isLoading) return <div>Loading</div>
    return (
        <div className="factContainer">
            <h1 className="funFact">Fun Fact:</h1> 
            <p className="fact">{data[0].fact}</p>
        </div>
    );
}