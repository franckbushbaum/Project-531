import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import { BsArrowRightShort, BsArrowLeftShort, BsTrashFill, BsFillBrightnessLowFill } from "react-icons/bs";
import './ImageSlider.css';
import Swal from 'sweetalert2';
import IndividualImage from "../IndividualImage/IndividualImage";

const ImageSlider = ({ slides, length }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideLength, setSlideLength] = useState(0);

  const dispatch = useDispatch();

  // Do you want the CSS inside the Slider?
  // const leftArrowStyles = {
  //   position: "absolute",
  //   top: "50%",
  //   transform: "translate(0, -50%)",
  //   left: "19%",
  //   fontSize: "45px",
  //   color: "#fff",
  //   zIndex: 1,
  //   cursor: "pointer",
  //   color: "rgba(211, 78, 78, 0.781)",
  // }

  // const rightArrowStyles = {
  //   position: "absolute",
  //   top: "50%",
  //   transform: "translate(0, -50%)",
  //   right: "19%",
  //   fontSize: "45px",
  //   color: "#fff",
  //   zIndex: 1,
  //   cursor: "pointer",
  //   color: "rgba(211, 78, 78, 0.781)",
  // }

  const removeFromArchive = (id, workout_type_id) => {
    dispatch({ type: 'REMOVE_WORKOUT', payload: {id, workout_type_id }});
    setSlideLength(slides.length - 1)
    dispatch({ type: 'ARCHIVE_INITIATE', payload: workout_type_id });

    Swal.fire({
        title: 'Workout Deleted!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: 'black',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://c.tenor.com/pK1P6r1kCV4AAAAC/the-dude.gif")
            center top
            no-repeat
                    `
    });
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

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }


  return (
    <>
      <div className="left-arrow-styles" onClick={goToPrevious}>
        <BsArrowLeftShort />
      </div>
      <div className="slides-map-test">
        {slides.map((workout, index) => {
          if (index == currentIndex) {
            return (
              <>
                <IndividualImage workout={workout}
                                 index={index} 
                                 removeFromArchive={removeFromArchive}/>
                <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                  <span key={slideIndex} id={slideIndex} className={ currentIndex == slideIndex ? 'dot-selected' : 'dot-item'} onClick={() => {goToSlide(slideIndex)}}><BsFillBrightnessLowFill /></span>
                ))}
                </div>
              </>
              // { index === currentIndex ? <div className="individual-table"> the index shown is: {index} </div> : <div></div> }
            )
          }
        })}
      </div>
      <div className="right-arrow-styles" onClick={goToNext}>
        <BsArrowRightShort />
      </div>
    </>
  );
}

export default ImageSlider;