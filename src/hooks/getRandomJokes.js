import { useState, useEffect, useCallback } from "react";

function getRandomJokes () {
    //this data will store our api response obj
    const [data, setData] = useState('');

    // let url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
    
    const fetchJoke = useCallback(() => {
        let url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random";

        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
    })

    /*
        following are the normal ways of calling the apis but when we need to call the api on dynamically on button clicks we need to create call back for that api
    */

    // useEffect(() => {
    //     fetch(url)
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    // }, [url])  


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random");
    //         const newData = response.json();
    //         setData(newData);
    //     }
    // })
    console.log('apidata :: ',data);
    return {data, fetchJoke};
}

export default getRandomJokes;