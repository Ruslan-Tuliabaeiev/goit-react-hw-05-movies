
import { useEffect, useState } from 'react';
import *as fetch from '../Fetch';

import React from 'react';
import { ButtonGoBack } from '../Comonents/ButtonGoBack/ButtonGoBack';
import MovieDetalse from '../Comonents/MovieDetalse/MovieDetalse';
import { Navigation } from '../Comonents/Navigation/Navigation';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
    const [movies, setMovies] = useState(null);
    const history = useHistory()
    const { movieId } = useParams()
    
useEffect(() => {
    fetch.fetchMoveDetails(movieId).then(response => setMovies(response))
}, [movieId]);


    const handleClick = () => {
        let path = JSON.parse(localStorage.getItem('prevLock'))
        history.push(path)

    }
         


    return (<>
        { movies && (<>
            <ButtonGoBack onClick={ handleClick}/>
            <MovieDetalse movie={movies} />
            <Navigation movieId={movieId} />
            
        </>)}
    </>
    );
    
}



