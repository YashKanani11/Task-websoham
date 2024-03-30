import React, { useState } from 'react';
import './Carousel.css';

function Carousel() {
  const [currdeg, setCurrDeg] = useState(0);
  const [front,setfront]=useState(1)
  const rotate = (direction) => {
    if (direction === "n") {
      setCurrDeg(currdeg - 60);
      setfront(front+1)
      alert(front)
    } else if (direction === "p") {
      setCurrDeg(currdeg + 60);
    }
  };

  return (
    <div className="container">
      <div className="carousel"
      style={{
        "-webkit-transform": `rotateY(${currdeg}deg)`,
        "-moz-transform": `rotateY(${currdeg}deg)`,
        "-o-transform": `rotateY(${currdeg}deg)`,
        "transform": `rotateY(${currdeg}deg)`
      }}>
        <div className="item a 1">A</div>
        <div className="item b 2">B</div>
        <div className="item c 3">C</div>
        <div className="item d 4">D</div>
        <div className="item e 5">E</div>
        <div className="item f 6">F</div>
      </div>
      <div className="next" onClick={() => rotate("n")}>Next</div>
      <div className="prev" onClick={() => rotate("p")}>Prev</div>
    </div>
  );
}

export default Carousel;
