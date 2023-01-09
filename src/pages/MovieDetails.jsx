import { getInfoMovie, IMAGE_URL } from '../servises/Api';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    console.log(movie)
  
    const location = useLocation();

    const [backLinkHref] = useState(() => location.state?.from ?? '/'); 
    useEffect(() => {
      getInfoMovie(movieId).then(setMovie);
    }, [movieId]); 
    
    if (!movie) {
      return null;
      };

    const { title, poster_path, overview, genres, vote_average } = movie;

    return (
        <>
            <Link to={backLinkHref}>Back to film list</Link>
            <div>
                <img src={`${IMAGE_URL}/${poster_path}`} alt={title} />
                <h1>{title}</h1>
                <h2>Overview :</h2>
                <p>{overview}</p>
                <p><h3>User score :</h3> {vote_average}</p>
                <h2>Genres :</h2>
                <ul>
                    {genres.map(genre => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

//<img src={`${IMAGE_URL}${poster_path}`} alt="" />
//                <h2>{title}</h2>
//                <p>{overview}</p>
//                <p>{genres}</p>
//                <p>{vote_average}</p>