import React from "react";
import "./addtask.scss";

export const Addtask = ({ onlytask }) => {
  return (
    <div className="addtask-container">
      {onlytask.map((task, index) => (
        <div className="addtask-main" key={index}>
          <div className="add-taskleft">
            <div className="box">
              <p>{index + 1}</p>
            </div>
            <p>{task.taskName}</p>
          </div>
          <div className="add-taskright">
            <p>
              <img src="deletelogo.png" alt="" />
            </p>
            <p>
              <img src="edit.png" alt="" />
            </p>
            <p>
              <img src="drag.png" alt="" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
