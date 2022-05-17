import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import moment from 'moment';



function UpdateWindow({id}) {

    const dispatch = useDispatch();
    const history = useHistory();

    

    const updateRun = (id) => {
    }

    const deleteRun =  (id) => {
        dispatch({ type: 'DELETE', payload: id });
    }

    useEffect(() => {
    }, []);

    return (
        <>
            <div id="update" className="update-window">
            <span className="update-window-individual-container">{id}:&nbsp;<button className='update-window-buttons' onClick={(id) => deleteRun(id)}>DELETE</button></span>
            </div>

        </>
    )
}

export default UpdateWindow;