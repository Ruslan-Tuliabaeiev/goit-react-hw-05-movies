

import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../Comonents/Button/Button';
import { Spinner } from '../Comonents/loader/Loader';
import MovieList from '../Comonents/MovieList/MovieList';
import *as fetch from '../Fetch';
import style from '../Comonents/Style/Style.module.css';

export default function HomePage() {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
   const location = useLocation();

    useEffect(() => {
        fetch.fetchHomePage().then(({ results }) => setMovies(results));
  
   
    }, []);
    const nextPage = () => {
        setLoading(true)
        setPage(prevState => prevState + 1)
        
    }
    useEffect(() => {
        if ( page === 1 ) {return } 
        fetch.fetchHomeNextPage(page).then(({ results }) => setMovies(prevState => [...prevState, ...results]));
        setLoading(false)
    }, [page]);
    
    return <div>

        {movies && (<><h1 className={style.title}>Tranding today</h1>
            <MovieList movies={movies}/>
</>)}
        <Button nextPage={nextPage} loading={loading}>
           <Spinner/> 
        </Button>
        
  </div>;
}


