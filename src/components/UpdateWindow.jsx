import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';


function UpdateWindow({key, id}) {

    const dispatch = useDispatch();
    const history = useHistory();

    console.log('whats they id', id)
    

    const updateRun = (id) => {
    }

    const deleteRun =  (id) => {
        console.log('what is button id?,', id)
        dispatch({type: 'DELETE', payload: id});
    }

    useEffect(() => {
    }, []);

    return (
        <>
            <div className="update-window">
            <span><button className='update-window-buttons' onClick={() => deleteRun(id)}>DELETE</button>{id}</span>
            </div>
        </>
    )
}

export default UpdateWindow;