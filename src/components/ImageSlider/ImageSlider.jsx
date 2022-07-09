import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import { BsArrowRightShort, BsArrowLeftShort, BsTrashFill, BsFillBrightnessLowFill } from "react-icons/bs";
import './ImageSlider.css'

const ImageSlider = ({ slides, length }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideLength, setSlideLength] = useState(0)

  const dispatch = useDispatch();

  console.log('what are slides?', length)
  // console.log('i think if i send slides[0].workout_type_id', slides[0].workout_type_id)

  console.log('what is slideLength?', slideLength)

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

  const removeFromArchive = (id, workout_type_id) => {
    dispatch({ type: 'REMOVE_WORKOUT', payload: id });
    // setSlideLength(slides.length - 1)
    dispatch({ type: 'ARCHIVE_INITIATE', payload: workout_type_id });

    // Swal.fire({
    //     title: 'Workout Deleted!',
    //     icon: 'success',
    //     confirmButtonText: 'Cool',
    //     background: 'black',
    //     backdrop: `
    //         rgba(0,0,123,0.4)
    //         url("https://c.tenor.com/pK1P6r1kCV4AAAAC/the-dude.gif")
    //         left top
    //         no-repeat
    //                 `
    // });
  };

  useEffect(() => {
    setSlideLength(length)
    //     dispatch({type: 'ARCHIVE_INITIATE', payload: first.workout_type_id})
  }, []);

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


  return (
    <>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        <BsArrowLeftShort />
      </div>
      <div className="slides-map-test">
        hi yes I am over there now
        {slides.map((workout, index) => {
          if (index == currentIndex) {
            return (
              <>
                <div className="individual-table" key={index}>
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
                <div className="dot-container">
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} id={slideIndex} className="dot-item"><BsFillBrightnessLowFill /></div>
                ))}
                </div>
              </>
              // { index === currentIndex ? <div className="individual-table"> the index shown is: {index} </div> : <div></div> }
            )
          }
        })}
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
