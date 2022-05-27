import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import AdminDrawerMenu from '../AdminDrawerMenu/AdminDrawerMenu';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h1 className="nav-title">
          <p className="glitch">
            <span aria-hidden="true" className="project">Project531</span>
            <span className="project">Project531</span>
            <span className="project" aria-hidden="true">Project531</span>
          </p>
        </h1>
      </Link>
      <div className="nav-button-wrapper">
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Page 1
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}
        <Link className="navLink" to="/about">
          About
        </Link>
        {/* hamburger menu will only appear on screen size 768 and down */}
        <div className="hamburger">
          <AdminDrawerMenu />
        </div>
      </div>
    </div>
  );
}

export default Nav;
