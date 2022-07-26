import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import {
  TiPlusOutline,
  TiMinusOutline,
  TiChevronRightOutline
} from "react-icons/ti";
import { BsTrashFill } from "react-icons/bs";
import Swal from 'sweetalert2';

function IndividualImage({ workout, index, removeFromArchive }) {

  const [editMode, setEditMode] = useState(true)
  const [repsOne, setRepsOne] = useState(workout.reps_one);
  const [repsTwo, setRepsTwo] = useState(workout.reps_two);
  const [repsThree, setRepsThree] = useState(workout.reps_three);

  const dispatch = useDispatch();

  const editArchive = (id) => {
    Swal.fire({
      title: `EDIT WORKOUT NUMBER ${id} ?`,
      showCancelButton: true,
      confirmButtonText: 'YES',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#00d3f8',
      background: 'black',
      backdrop: `
              rgba(211, 78, 78, 0.781)
                      `
    }).then((result) => {
      if (result.isConfirmed) {
        setEditMode(!editMode)
      }
    })
  }

  const editRepsInSlider = (e, set) => {
    switch (set) {
      case 1:
        e === '+' ? setRepsOne(repsOne + 1) : setRepsOne(repsOne - 1)
        break;
      case 2:
        e === '+' ? setRepsTwo(repsTwo + 1) : setRepsTwo(repsTwo - 1)
        break;
      case 3:
        e === '+' ? setRepsThree(repsThree + 1) : setRepsThree(repsThree - 1)
        break;
    };
  }

  const handleUpdateinArchive = () => {
    let newVolume = repsOne * workout.weight_one + repsTwo * workout.weight_two + repsThree * workout.weight_three
    let id = workout.workout_id
    console.log('what is workout.workout_type_id?', workout.workout_type_id);
    let workout_type_id = workout.workout_type_id
    dispatch({
      type: 'EDIT_REPS_IN_ARCHIVE',
      payload: {
        repsOne,
        repsTwo,
        repsThree,
        newVolume,
        id,
        workout_type_id
      }
    });
    Swal.fire({
      title: `WORKOUT NUMBER ${id} UPDATED!`,
      showCancelButton: true,
      confirmButtonText: 'THANKS!',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#00d3f8',
      background: 'rgba(211, 78, 78, 0.781)',
    }).then((result) => {
      if (result.isConfirmed) {
        setEditMode(!editMode)
      }
    })
  }

  return (<>
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
            <td>{repsOne}</td>
            <td>{editMode ? <p></p> : <p><button className="edit-buttons" onClick={() => editRepsInSlider('+', 1)}><TiPlusOutline /></button>
              <button className="edit-buttons" onClick={() => editRepsInSlider('-', 1)}><TiMinusOutline /></button></p>}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{workout.weight_two}</td>
            <td>{repsTwo}</td>
            <td>{editMode ? <p></p> : <p><button className="edit-buttons" onClick={() => editRepsInSlider('+', 2)}><TiPlusOutline /></button>
              <button className="edit-buttons" onClick={() => editRepsInSlider('-', 2)}><TiMinusOutline /></button></p>}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{workout.weight_three}</td>
            <td>{repsThree}</td>
            <td>{editMode ? <p></p> : <p><button className="edit-buttons" onClick={() => editRepsInSlider('+', 3)}><TiPlusOutline /></button>
              <button className="edit-buttons" onClick={() => editRepsInSlider('-', 3)}><TiMinusOutline /></button>
              <button className="edit-buttons" onClick={handleUpdateinArchive}><TiChevronRightOutline /></button></p>}
            </td>
          </tr>
        </tbody>
      </table>
      <button className="fresh" onClick={() => removeFromArchive(workout.workout_id, workout.workout_type_id)}><BsTrashFill size="23px" /></button>
      <button className="fresh-edit" onClick={() => editArchive(workout.workout_id)}>EDIT</button>
    </div>
  </>
  )
}

export default IndividualImage;
