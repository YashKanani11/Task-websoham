import React, { useState } from 'react';
function Slider3d() {
  const [backfaceVisibility, setBackfaceVisibility] = useState(true);
  const [overflow, setOverflow] = useState(true);
  const [perspectiveOriginX, setPerspectiveOriginX] = useState(50);
  const [perspectiveOriginY, setPerspectiveOriginY] = useState(50);
  const [perspective, setPerspective] = useState(800);
  const [slideAmount, setSlideAmount] = useState(6);

  const handleBackfaceVisibility = (event) => {
    setBackfaceVisibility(event.target.checked);
  };

  const handleOverflow = (event) => {
    setOverflow(event.target.checked);
  };

  const handlePerspectiveOriginX = (event) => {
    setPerspectiveOriginX(event.target.value);
  };

  const handlePerspectiveOriginY = (event) => {
    setPerspectiveOriginY(event.target.value);
  };

  const handlePerspective = (event) => {
    setPerspective(event.target.value);
  };

  const handleSlideRemove = () => {
    if (slideAmount < 4) return;
    setSlideAmount(slideAmount - 1);
  };

  const handleSlideAdd = () => {
    setSlideAmount(slideAmount + 1);
  };

  return (
    <div>
      <div className="slider3d">
        <div className="slider3d_wrap">
          {/* Render slideAmount number of divs */}
          {[...Array(slideAmount)].map((_, index) => (
            <div key={index}>{index + 1}</div>
          ))}
        </div>
      </div>
      <div className="slider3d_left">&larr;</div>
      <div className="slider3d_right">&rarr;</div>

      <div className="ctrl">
        <div className="visibility">
          <label>
            <input
              type="checkbox"
              checked={backfaceVisibility}
              onChange={handleBackfaceVisibility}
            />
            backface-visibility
          </label>
          <label>
            <input
              type="checkbox"
              checked={overflow}
              onChange={handleOverflow}
            />
            overflow
          </label>
        </div>

        <div className="perspOrig">
          <p>perspective-origin:</p>
          <input
            type="number"
            value={perspectiveOriginX}
            min="-200"
            max="200"
            step="10"
            onChange={handlePerspectiveOriginX}
          />
          <span>%</span>
          <input
            type="number"
            value={perspectiveOriginY}
            min="-200"
            max="200"
            step="10"
            onChange={handlePerspectiveOriginY}
          />
          <span>%</span>
        </div>

        <div className="slideAmount">
          <span className="slideRem" onClick={handleSlideRemove}>
            -
          </span>
          <span>slide</span>
          <span className="slideAdd" onClick={handleSlideAdd}>
            +
          </span>
        </div>

        <div className="perspValue">
          <p>Perspective</p>
          <input
            type="range"
            value={perspective}
            min="10"
            max="1000"
            step="10"
            onChange={handlePerspective}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider3d;
