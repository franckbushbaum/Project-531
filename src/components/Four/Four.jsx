import React, { useState, useEffect } from 'react';
import './Four.css';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

function Four(){

    const history = useHistory();
    const dispatch = useDispatch();

    const archivedWorkouts = useSelector(store => store.archiveStorage);

    return(
        <>
        <p>{JSON.stringify(archivedWorkouts)}</p>
        <div className="header"><h1>ARCHIVE</h1></div>
        <div className="tables">Tables go here
            {archivedWorkouts.map(workout => {
                <table className="archive-table">
                <thead>
                    <tr>
                        <th colSpan="4"><p>{moment(workout.created_at).format('MMM Do YY')}</p></th>
                    </tr>
                </thead>
                </table>
            })}
        </div>
        </>
    );
}

export default Four;