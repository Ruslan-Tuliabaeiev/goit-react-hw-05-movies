
import { ROUTES } from './const';


import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
 
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';





const HomePage = lazy(() => import('./views/HomePage' /*webpackChunkName: "HomePage" */));
const MoviesPage = lazy(() => import('./views/MoviesPage' /*webpackChunkName: "MoviesPage" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage.js' /*webpackChunkName: "MovieDetailsPage" */));
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink exact to={ROUTES.HOME} >
Home
          </NavLink>
          <NavLink  to={ROUTES.MOVIES} >
            Movies
          </NavLink>

        </nav>


      </header>
      <Suspense fallback={<Loader/>}>
        <Switch >
          <Route path={ROUTES.HOME} exact component={HomePage} />
          <Route path={ROUTES.MOVIES} exact component={MoviesPage} />
          <Route path={ROUTES.MOVIES_DETAIL} component={MovieDetailsPage} />
          <Redirect to={ROUTES.HOME} />
        </Switch>
</Suspense>


    </BrowserRouter>
  );
}

export default App;
