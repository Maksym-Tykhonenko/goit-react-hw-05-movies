import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits, IMAGE_URL } from '../../servises/Api';


export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    console.log(cast);


    useEffect(() => {
        getMovieCredits(movieId).then(setCast);
    }, [movieId]);

    return (
        <>
            <ul>
                {cast.map(({ id, name, character, profile_path }) => {
                    return (
                        <li key={id}>
                            <img
                                src={`${IMAGE_URL}/${profile_path}`}
                                alt={name}
                                />
                            <h3>{name}</h3>
                            <h3>Character : </h3>
                            <span>{character }</span>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}