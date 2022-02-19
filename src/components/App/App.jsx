import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import One from '../One/One.jsx';
import Chest from '../Chest/Chest.jsx';
import Legs from '../Legs/Legs.jsx';
import Shoulders from '../Shoulders/Shoulders.jsx';
import Back from '../Back/Back.jsx';
import Three from '../Three/Three.jsx';
import Four from '../Four/Four.jsx';
import Sprints from '../Sprints.jsx'
import MphChart from '../MphChart.jsx';
import InclineChart from '../InclineChart';
import OnChart from '../OnChart';
import OffChart from '../OffChart';
import RepsChart from '../RepsChart';

import './App.css';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div className="all-the-things">
        <Nav />

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

          <ProtectedRoute
            // logged in shows Page 1 else shows LoginPage
            exact
            path="/user"
          >
            <One />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <Route
            exact
            path="/chest"
          >
            <Chest />
          </Route>

          <Route
            exact
            path="/legs"
          >
            <Legs />
          </Route>

          <Route
            exact
            path="/shoulders"
          >
            <Shoulders />
          </Route>

          <Route
            exact
            path="/back"
          >
            <Back />
          </Route>

          <Route
            exact
            path="/three"
          >
            <Three />
          </Route>

          <Route
            exact
            path="/four"
          >
            <Four />
          </Route>

          <Route
            exact
            path="/sprints"
          >
            <Sprints />
          </Route>

          <Route
            exact
            path="/mph"
          >
            <MphChart />
          </Route>

          <Route
            exact
            path="/incline"
          >
            <InclineChart />
          </Route>

          <Route
            exact
            path="/on"
          >
            <OnChart />
          </Route>

          <Route
            exact
            path="/off"
          >
            <OffChart />
          </Route>

          <Route
            exact
            path="/reps"
          >
            <RepsChart />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>OOOPS</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
