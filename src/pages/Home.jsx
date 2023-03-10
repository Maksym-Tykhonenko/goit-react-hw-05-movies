import { useState, useEffect } from "react";
import { getTrendingMovies } from '../servises/Api';
import { MoviesList } from "components/MoviesList/MoviesList";



const Home = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies)

    useEffect(() => {
        getTrendingMovies('day').then(setMovies);
    }, []);

    
    return (
        <>
            <h2>Trending today</h2>
            <MoviesList movies={movies} />
        </>
    );
};

export default Home;