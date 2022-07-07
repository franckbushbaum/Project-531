import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from 'moment';
import { BsArrowRightShort, BsArrowLeftShort, BsTrashFill } from "react-icons/bs";

const ImageSlider = ({ slides, index}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  //   const [heading, setHeading] = useState("Functional Component");

  console.log("in ImageSlider, what are slides?", slides)
  console.log('in ImageSlider, what is slides.length?', slides.length)

  // Do you want the CSS inside the Slider?
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "19%",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    color: "rgba(211, 78, 78, 0.781)",
  }

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "19%",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    color: "rgba(211, 78, 78, 0.781)",
  }

  const goToPrevious = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const lastSlide = currentIndex === slides.length - 1
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  console.log('what is current index?', currentIndex);

  return (
    <>
      <div style={leftArrowStyles} onClick={goToPrevious}>
       <BsArrowLeftShort />
      </div>
      <div className="slides-map-test">
        hi yes I am over there now
      {slides.map((workout, index) => {
        if (index == currentIndex){
        return(
          <>
         <div className="individual-table">
                            <p>{JSON.stringify(workout.workout_id)}</p>
                            <table key={workout.workout_id} className="page-four-table">
                                <thead>
                                    <tr>
                                        <th colSpan="4"><p>{moment(workout.created_at).format('MMM Do YY')}</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Set</th>
                                        <th>Weight</th>
                                        <th>Reps</th>
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
                        </div>
        </>
        // { index === currentIndex ? <div className="individual-table"> the index shown is: {index} </div> : <div></div> }
        )}})} 
      </div>
      <div style={rightArrowStyles} onClick={goToNext}> 
      <BsArrowRightShort />
      </div>
      </>
  );
}

export default ImageSlider;


/* <div className="individual-table">
                            <p>{JSON.stringify(workout.workout_id)}</p>
                            <table key={workout.workout_id} className="page-four-table">
                                <thead>
                                    <tr>
                                        <th colSpan="4"><p>{moment(workout.created_at).format('MMM Do YY')}</p></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Set</th>
                                        <th>Weight</th>
                                        <th>Reps</th>
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
                        </div> */
