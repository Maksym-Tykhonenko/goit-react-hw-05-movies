import { useState, useEffect } from "react";
import { getTrendingMovies } from '../servises/Api';
import { MoviesList } from "components/MoviesList/MoviesList";



export const Home = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies)

    useEffect(() => {
        getTrendingMovies('day').then(setMovies);
    }, []);

    
    return (
        <>
            <p>Trending today</p>
            <MoviesList movies={movies} />
        </>
    );
};