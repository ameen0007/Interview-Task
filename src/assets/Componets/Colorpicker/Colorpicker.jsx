import React, { useState, useEffect, useRef } from "react";

import "./colorpicker.scss";
export const Colorpicker = () => {
  const [initialColor, setInitialColor] = useState("#ff0000");
  const [completedColor, setCompletedColor] = useState("#99fd15");
  const [delayedColor, setDelayedColor] = useState("#3743d3");

  const handleOnChange = (Selected_color, stateUpdation) => {
    if (Selected_color) {
      stateUpdation(Selected_color.hex);
    }
  };

  return (
    <div className="color-main">
      <div className="color-letter">
        <h6>Colors</h6>
      </div>
      <div className="second-raw">
        <div className="inner-second">
          <p>Progressing Color</p>
          <div className="color-div">
            <input
              type="color"
              onChange={(e) => handleOnChange(e.target.value, setInitialColor)}
              value={initialColor}
            />
          </div>
        </div>
        <div className="inner-second">
          <p>Completed Color</p>
          <div className="color-div">
            <input
              type="color"
              onChange={(e) =>
                handleOnChange(e.target.value, setCompletedColor)
              }
              value={completedColor}
            />
          </div>
        </div>
        <div className="inner-second">
          <p>Delayed Color</p>
          <div className="color-div">
            <input
              type="color"
              onChange={(e) => handleOnChange(e.target.value, setDelayedColor)}
              value={delayedColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
