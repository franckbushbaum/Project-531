import React, { useState, useEffect } from 'react';
import './Chest.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { IoFingerPrintOutline, IoArrowForwardSharp } from "react-icons/io5";
import { CgArrowRightR, CgArrowLeftR } from "react-icons/cg";

function Chest() {

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

    useEffect(() => {
        dispatch({ type: 'FETCH_BODYPART_WORKOUT', payload: 1 });
    }, []);

    return (
        <>
            <div className="container">
                <div className="archive-button">
                    <p className="corner"></p>
                    <button className="archive-child" >Archive    <IoFingerPrintOutline /></button>
                    <div className="move"></div>
                </div>
                <div className="header">
                        <div className="header-title">
                            <h1>CHEST</h1>
                        </div>
                </div>
                <div className="last-workout">
                <p>Last Workout: {moment(recentWorkout.created_at).startOf('day').fromNow()}</p>
                    <table key={recentWorkout.workout_id}>
                        <thead>
                            <tr>
                                <th colSpan="3"><p>{moment(recentWorkout.created_at).format('MMM Do YY')}</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Set</td>
                                <td>Weight</td>
                                <td>Reps</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>{recentWorkout.weight_one}</td>
                                <td>{recentWorkout.reps_one}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>{recentWorkout.weight_two}</td>
                                <td>{recentWorkout.reps_two}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>{recentWorkout.weight_three}</td>
                                <td>{recentWorkout.reps_three}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="current">
                    ONE REP MAX: {recentWorkout.one_rep_max}<br/>
                    WEEK: {recentWorkout.week}
                </div>
                <div className="nav-buttons">
                    <button onClick={handleClick} className="back-button"><CgArrowLeftR text="continue" size={40} />&nbsp;Back</button>
                    <button onClick={handleClick} className="new-button">continue&nbsp;<CgArrowRightR text="continue" size={40} /></button>
                </div>
            </div>
        </>
    );
}

export default Chest;