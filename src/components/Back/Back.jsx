import React, { useState, useEffect } from 'react';
import './Back.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { IoFingerPrintOutline, IoArrowForwardSharp } from "react-icons/io5";
import { CgArrowRightR, CgArrowLeftR} from "react-icons/cg";

function Back(){

    const history = useHistory();
    const dispatch = useDispatch();

    const recentWorkout = useSelector(store => store.recentWorkout);

    const handleClick = (event) => {
        console.log('in handleClick', event.target.className)
        switch (event.target.className){
            case 'back-button':
                return history.push('/user')
                break;
            case 'new-button':
                history.push('/three')
                break;
        }
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_BODYPART_WORKOUT', payload: 4 });
    }, []);

    return(
        <>
        <div className="container">
        <div className="archive-button">
                    <button className="archive-child" >Archive    <IoFingerPrintOutline/></button>
        <div className="move"></div>
        </div>
            <div className="header">
                <div className="header-title">
                    {/* GET route to post last workout */}
                    <h1>Back</h1>
                </div>
            </div>
            <div className="last-workout">
             <table key={recentWorkout.workout_id}>
                <thead>
                 <tr>
                        <th>Set</th>
                        <th>Weight</th>
                        <th>Reps</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
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
            <div className="current">ONE REP MAX: Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, accusantium. Aliquam expedita eum possimus. Eius voluptates, rem inventore voluptatibus 
                beatae quibusdam earum nihil labore non magni quidem nobis cumque iure reiciendis quo cum dolorem quisquam mollitia aut soluta 
                dolore minima, molestiae neque autem. Possimus temporibus, aliquam sapiente cumque adipisci in recusandae, natus voluptates 
                accusantium dolores, laudantium reiciendis. Quae dignissimos modi tempora harum repellat? Sapiente alias rem doloremque aperiam 
                blanditiis maxime porro laboriosam nesciunt iusto molestias atque id, magni animi perspiciatis. Beatae reprehenderit ullam quaerat 
                pariatur consequatur dolorum harum non corporis, quam distinctio temporibus praesentium architecto quidem numquam quae nostrum 
                maxime?
            </div>
            <div className="nav-buttons">
            <button onClick={handleClick} className="back-button"><CgArrowLeftR text="continue" size={40}  />&nbsp;Back</button>
            <button onClick={handleClick} className="new-button">continue&nbsp;<CgArrowRightR text="continue" size={40}  /></button>
            </div>
        </div>
        </>
    );
}

export default Back;