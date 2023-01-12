import {useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from "components/MoviesList/MoviesList";
import { getMovieByName } from '../servises/Api';
export const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const [query, setQuery] = useState(() => searchParams.get('query') ?? '');

    const searchQuery = searchParams.get('query');

    const onChangeFilter = query => {
        setQuery(query);
    };

    const onSearch = e => {
        e.preventDefault();
       
        setSearchParams(query !== '' ? { query: query } : {});
     
    };

    
   useEffect(() => {
    if (searchQuery) {
      getMovieByName(searchQuery).then(setMovies);
    }
   }, [searchQuery]);
    
    return (
        <>
            <SearchForm
                onSearch={onSearch}
                value={query}
                onChangeFilter={onChangeFilter}
            />
            {movies && <MoviesList movies={movies} />}
            {movies && movies.length === 0 && (
                <div>There are not movies with such name</div>
            )}
        </>
    );
};

