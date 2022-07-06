import React, { useState } from 'react';
import {useSelector} from 'react-redux';

const  ImageSlider = ({ slides }) => {

    const [ currentIndex, setCurrentIndex ] = useState(0);

//   const [heading, setHeading] = useState('Functional Component');

  console.log('in ImageSlider, what are props?', slides)
  return (
    <div className="test-slide">
      <h2>Monsterlessons slider</h2>
    </div>
  );
}

export default ImageSlider;