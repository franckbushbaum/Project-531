import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { FaHome } from "react-icons/fa";

function Three() {


    const [inputValue, setInputValue] = useState();

    const history = useHistory();

    const goBack = () => {
        history.push('/three')
    };

    return (
        <div className="container-page-three">
            <div className="home-button">
                <div className="the-button">
                <Button variant="contained"
                    size="small"
                    color="secondary"
                    style={{ fontSize: 17, borderRadius: "29px" }}
                    onClick={goBack}><FaHome color="black" style={{ borderRadius: "50%" }} /></Button>
                </div>
            </div>
            <form></form>
            
            <div className="display"></div>
            <div className="nav-page-three"></div>
        </div>
    );
}

export default Three;