import { useEffect, useState } from 'react';
import { Searchbar} from '../Comonents/Searchbar/Searchbar'
import *as fetch from '../Fetch';
import { Button } from '../Comonents/Button/Button';
import { Spinner } from '../Comonents/loader/Loader';

import MovieList from '../Comonents/MovieList/MovieList';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [serch, setSerch] = useState('');
    const location = useLocation();
    const history = useHistory();  
    const query = new URLSearchParams(location.search).get('query') ?? ''; 
    const [wait, setWait] = useState(false);

    useEffect(() => {
        if (!query ) { return } 
        fetch.fetchMovePage(page, query ).then(({ results }) => {
            if (results.length === 0) {
                alert(`this movies ${serch} not a fund`)
            }
            setMovies(prevState => [...prevState, ...results])
            setLoading(false)
        })
    
    }, [page, query, serch]);

    const nextPage = () => {
        setLoading(true)
        setPage(prevState => prevState + 1)

    }
    const handleFormSubmit = (string) => {
        setMovies([])
        setWait(true)
        setSerch(string) 
        setPage(1)
        
        history.push({
            ...location, 
            search: `query=${string}`
          
        })
        
    }
        
const btn = !(movies.length < 20 )

    return <div> <Searchbar
        onSubmit={handleFormSubmit}
        
    />
        {wait && <Spinner/>}

        { movies && (
            <MovieList movies={movies} />
        )}

    {  btn &&   <Button nextPage={nextPage} loading={loading}>
            <Spinner />
        </Button>}

    </div>;
}


