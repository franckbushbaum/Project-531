import React from 'react';
import moment from 'moment';
import { TiPlusOutline, 
        TiMinusOutline, 
        TiChevronRightOutline } from "react-icons/ti";
import { BsTrashFill} from "react-icons/bs";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function IndividualImage({workout, index, removeFromArchive}) {
  return (<>
    <div>In individual Image</div>
    <div className="individual-table" key={index}>
                  <p className="workout-number-style">WORKOUT NUMBER: {workout.workout_id}</p>
                  <table key={workout.workout_id} className="page-four-table">
                    <thead>
                      <tr>
                        <th colSpan="4"><p>{moment(workout.created_at).format('MMM Do YY')}</p></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>SET</th>
                        <th>WEIGHT</th>
                        <th>REPS</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>{workout.weight_one}</td>
                        <td>{workout.reps_one}</td>

                      </tr>
                      <tr>
                        <td>2</td>
                        <td>{workout.weight_two}</td>
                        <td>{workout.reps_two}</td>

                      </tr>
                      <tr>
                        <td>3</td>
                        <td>{workout.weight_three}</td>
                        <td>{workout.reps_three}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="fresh" onClick={() => removeFromArchive(workout.workout_id, workout.workout_type_id)}><BsTrashFill size="23px" /></button>
                  <button className="fresh" onClick={() => editArchive(workout.workout_id)}>EDIT</button>
                </div>
                </>
  )
}

export default IndividualImage;
