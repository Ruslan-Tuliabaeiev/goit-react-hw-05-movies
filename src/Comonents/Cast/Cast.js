

import PropTypes from 'prop-types';
import *as fetch from '../../Fetch';
import {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import style from '../Style/Style.module.css';



export default function Cast({moviesId}) {

    const [cast, setCast] = useState(null);
    //const { moviesId } = useParams();
    useEffect(() => {
        fetch.fetchCast(moviesId).then(response => setCast(response))
    }, [moviesId]);
    

    return <div>
        {cast && (<ul>
            {cast.cast.map(({ id, profile_path, name, character }) => (<li key={id} className={style.imageFoto}><img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
                <h3>{name}</h3> <p><b>Character:</b> <i>{character}</i></p></li>))}
        </ul>)}
    </div>;
    

}


Cast.propTypes = {
    moviesId: PropTypes.string.isRequired,

};
