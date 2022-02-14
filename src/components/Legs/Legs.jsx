import React, { useState, useEffect } from 'react';
import './Legs.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { IoFingerPrintOutline, IoArrowForwardSharp } from "react-icons/io5";
import { CgArrowRightR, CgArrowLeftR } from "react-icons/cg";

function Legs() {

    const history = useHistory();
    const dispatch = useDispatch();

    const recentWorkout = useSelector(store => store.recentWorkout);

    const handleClick = (event) => {
        console.log('in handleClick', event.target.className)
        switch (event.target.className) {
            case 'back-button':
                return history.push('/user')
                break;
            case 'new-button':
                history.push('/three')
                break;
        }
    };

    const toArchive = () => {
        history.push('/four');
        dispatch({type: 'ARCHIVE_INITIATE', payload: 2})
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_BODYPART_WORKOUT', payload: 2 });
    }, []);

    return (
        <>
            <div className="container">
                <div className="archive-button">
                    <p className="corner"></p>
                    <button onClick={toArchive} className="archive-child" >Archive    <IoFingerPrintOutline /></button>
                    <div className="move"></div>
                </div>
                <div className="header">
                        <div className="header-title">
                            <h1>Legs</h1>
                        </div>
                </div>
                <div className="last-workout">
                <p>Last Workout: {moment(recentWorkout.created_at).startOf('day').fromNow()}</p>
                    <span className="sprint-container">
                        <div className="solo-one">
                            MPH<br/>
                            <input></input>
                        </div>
                        <div className="solo-two">
                            INCLINE<br />
                            <input></input>
                        </div>
                        <div className="solo-three">
                            ON<br />
                            <input></input>
                        </div>
                        <div className="solo-four">
                            OFF<br />
                            <input></input>
                        </div>
                        <div className="solo-five">
                            REPS<br />
                            <input></input>
                        </div>
                    </span> 
                </div>
                <div className="nav-buttons">
                    <button onClick={handleClick} className="back-button"><CgArrowLeftR text="continue" size={40} />&nbsp;Back</button>
                    <button onClick={handleClick} className="new-button">continue&nbsp;<CgArrowRightR text="continue" size={40} /></button>
                </div>
            </div>
        </>
    );
}

export default Legs;