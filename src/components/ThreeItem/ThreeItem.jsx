import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { BsArrowRightShort, BsTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Swal from 'sweetalert2'

function ThreeItem({workout_id, weight_one, weight_two, weight_three, reps_one, reps_two, reps_three, workout_type_id}) {
    const dispatch = useDispatch();
    const history = useHistory();

   const [editMode, setEditMode] = useState(true); 

   const [calcReps, setCalcReps] = useState(reps_three);


    

    const changeState = () => {
        setEditMode(!editMode);
    }

    const addReps = (x) => {
        // console.log(reps_three);
        // console.log('so what is action?', x);
        setCalcReps(calcReps + 1);
    }

    const subtractReps = (x) => {
        // console.log(reps_three);
        // console.log('so what is action?', x);
        setCalcReps(calcReps - 1);
    }

    const handleUpdate = () => {
        console.log('what is calcReps', calcReps);
        console.log('what is workout_id', workout_id);
         dispatch({type: 'EDIT_REPS', payload: {'reps_three': calcReps,
                                                'workout_id': workout_id}});
                                                
        Swal.fire({
        title: 'Workout Submitted!',
        icon: 'success',
        confirmButtonText: 'Cool',
        background: 'white',
            
        });
    }




// Function that removes workout from database, renders the page without it.
// Finally, it will send the user back to the first page to restart.  If I have enough time, 
// I'd like to keep he/she on this page.

    const deleteWorkout = () => {
        console.log(`in DELETE Button`);
        console.log(`what is workout_id..`, workout_id);
        let id = workout_id;

        //Removes workout from the database.
        dispatch({type: 'REMOVE_WORKOUT', payload: id});

        //Removes workout from the DOM.
        dispatch({type: 'UNSET_WORKOUT'});
        Swal.fire({
            title: 'Workout Deleted!',
            icon: 'success',
            confirmButtonText: 'Cool',
            background: 'black',
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://c.tenor.com/LoXuYGcyMxgAAAAC/just-do-it-shia-la-beouf.gif")
                left top
                no-repeat
                        `
          });
          history.push('/user');
        
        // ;setTimeout(() => {
        //     switch (workout_type_id){
        //         case 1:
        //             return history.push('/user')
        //             break;
        //         case 2:
        //             history.push('/user')
        //             break;
        //         case 3:
        //             return history.push('/user')
        //             break;
        //         case 4:
        //             return history.push('/user')
        //             break;
        //     }
        // }, 1500);
    };

    //  useEffect(() => {
    //     dispatch({ type: 'CLEAR_IT', payload: {weight_one: '',
    //                                             reps_one: '',
    //                                             weight_two: '',
    //                                             reps_two: '',
    //                                             weight_three: '',
    //                                             reps_three: ''}});
    // }, []);

    // const renderWorkout = () => {
    // dispatch({ type: 'FETCH_WORKOUT'});
    // history.push('/four')
    // }

    return(
        <>
        {JSON.stringify(workout_type_id)}
        <div className="table">
        <table key={workout_id}>
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
                    <td>{weight_one}</td>
                    <td>{reps_one}</td>
                    {/* <td>{ editMode ? <p></p> : <p>+</p>}</td> */}
                </tr>
                <tr>
                    <td>2</td>
                    <td>{weight_two}</td>
                    <td>{reps_two}</td>
                    {/* <td>{ editMode ? <p></p> : <p>+</p>}</td> */}
                </tr>
                <tr>
                    <td>3</td>
                    <td>{weight_three}</td>
                    <td>{calcReps}</td>
                    {/* <td>{addToReps}</td> */}
                    <td>{ editMode ? <p></p> : <p><button onClick={() => addReps()}>+</button>
                                                    <button onClick={() => subtractReps()}>-</button>
                                                    <button onClick={handleUpdate}>Submit</button></p>}</td>
                </tr>
                <tr>
                    <td>
                    <Button className="delete-button"  
                                size="medium" 
                                
                                  
                                onClick={deleteWorkout}><BsTrashFill color="black" style= {{borderRadius: "50%"}}/></Button>
                    </td>
                    <td colSpan="2"><Button className="edit-button" onClick={changeState}><BiEdit size="22px" /></Button></td>
                </tr>
            </tbody>
        </table>
        </div>                                   
    </>
    );
}

export default ThreeItem;