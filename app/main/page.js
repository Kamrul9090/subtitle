"use client"
import { useEffect, useState } from "react";

const Main = () => {
    const [movies, getMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1e955b8b3f52cfe4faf7227d6d101f9b`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            this is main page
        </div>
    );
};

export default Main;