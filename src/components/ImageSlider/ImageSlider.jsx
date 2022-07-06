import React, { useState } from 'react';
import {useSelector} from 'react-redux';

const  ImageSlider = (props) => {

  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  console.log('in ImageSlider, what are props?')
  return (
    <div className="test-slide">
      <h2>Monsterlessons slider</h2>
    </div>
  );
}

export default ImageSlider;