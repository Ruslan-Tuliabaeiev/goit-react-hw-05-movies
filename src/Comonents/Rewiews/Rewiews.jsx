
import *as fetch from '../../Fetch';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Rewiews({moviesId}) {
    const [rewiews, setRewiews] = useState(null);
    const [status, setStatus] = useState(false);
    // const { moviesId } = useParams();
useEffect(() => {
    fetch.fetchRewiews(moviesId).then(({ results }) => {
        if (results.length === 0) {
            setStatus(true)
        } else {
            setStatus(false)
       setRewiews(results)
        }
    } )
}, [moviesId]);


    
    
    return <div>{status && <h2>We don't have any reviews for this movie. </h2>}
        {rewiews && <ul> {rewiews.map(({ id, author, content }) => (<li key={id}><h2>Autor:{author} </h2> <p>{ content}</p> </li>)  )  } </ul>}
    </div>;
    
}


Rewiews.propTypes = {
    moviesId: PropTypes.string.isRequired,

};
