import React, { useContext } from "react";
import { IoIosStar } from "react-icons/io";
import "./milestonelist.scss";
import { StateContext } from "../Contextapi/contextapi";

export const Milestonelist = () => {
  const { milestonearr } = useContext(StateContext);

  console.log(milestonearr, "milearray");

  return (
    <div className="milestone-container">
      {milestonearr?.map((milestoneObj, index) => (
        <div key={index} className="milestone-details">
          <div className="mileston-inner">
            <div className="milestone-name">
              <p>Milestone name:</p>
              <h4>
                <span>
                  <IoIosStar />
                </span>{" "}
                {milestoneObj.milestone}
              </h4>
            </div>
            <div className="milestone-actions">
              <p>
                <img src="deletelogo.png" alt="" />
              </p>
              <p>
                <img src="edit.png" alt="" />
              </p>
            </div>
          </div>
          <div className="tasks-heading">
            <p>Tasks :</p>
          </div>
          <div className="task-con">
            {milestoneObj.tasks.map((task, taskIndex) => (
              <div key={taskIndex} className="task-details">
                <div>{taskIndex + 1}</div>
                <p>{task.taskName}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
