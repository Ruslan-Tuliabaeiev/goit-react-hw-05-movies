

import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Spinner } from '../loader/Loader';



const Cast = lazy(() => import('../Cast/Cast' /*webpackChunkName: "Cast" */))
const Rewiews = lazy(() => import('../Rewiews/Rewiews' /*webpackChunkName: "Rewiews" */) )
export const Navigation = ({movieId}) => {
const { url , path} = useRouteMatch()
 

    return (
        <>
            <ul>
                <li ><NavLink exact to={`${url}/cast` }>CAST</NavLink></li>
                <li><NavLink to={`${url}/rewiews`}>REWIEWS</NavLink></li>
            </ul>
            <Suspense fallback={<Spinner />} >
                <Switch>
                    <Route exact path={`${path}/cast`}> <Cast moviesId={movieId} ></Cast> </Route>
                    <Route path={`${path}/rewiews`}> <Rewiews moviesId={movieId} > </Rewiews></Route> 
                </Switch></Suspense>
        
        </>
  );
}

Navigation.propTypes = {
    movieId: PropTypes.string.isRequired,

};

