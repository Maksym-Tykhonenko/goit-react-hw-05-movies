import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../servises/Api';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    console.log(reviews);

    useEffect(() => {
        getMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    if (!reviews) {
    return null;
  }

    return (
        <div>
            {reviews.length > 0 ?
                (<ul>
                    {reviews.map(item => (
                        <li key={item.id}>
                            <p>{item.author}</p>
                            <p>{item.content}</p>
                        </li>
                    ))}
                </ul>) : (<p>'We don`t have any reviews for this movie.'</p>)}
        </div>
    );
};
