
import {ROUTES} from '../../const';


import style from '../Style/Style.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';




function MovieList({ movies }) {
    const location = useLocation;
    const muvielock = `/movies${location.search}`;
    const click = () => {
        if (location.search === '') {
            localStorage.setItem('prevLock' , JSON.stringify(ROUTES.HOME))
        } else {
            localStorage.setItem('prevLock', JSON.stringify(muvielock))
        }
    }

    return <div><ul className={style.imageFoto}>
        {movies.map(({ id, poster_path, title }) => <li key={id} className={style.imageFotoList}>  
            <Link onClick={click} to={`${ROUTES.MOVIES}/${id}` }>
                
            
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={style.imageFotofoto}/>
            <h2>{title}</h2>
        </Link></li>)}

    </ul></div>;
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                poster_path: PropTypes.string.isRequired,
                title:PropTypes.string.isRequired,
            }
        )
    )
};

export default MovieList;

