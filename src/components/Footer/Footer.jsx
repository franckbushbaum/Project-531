import React from 'react';
import './Footer.css';
import { GiFlatHammer, GiAxeSword, GiCrossShield, GiGuitar } from "react-icons/gi";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
      <footer className="footer">
    <p className="signature"><GiCrossShield size="1.5em"/>&nbsp;Project by: Franck Bushbaum&nbsp;<GiGuitar size="1.5em"/></p>
      </footer>
  )
}

export default Footer;
