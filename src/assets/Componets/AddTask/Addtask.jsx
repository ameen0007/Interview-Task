import React from 'react';
import './addtask.scss';

export const Addtask = ({ temporarymilstonearr }) => {
  return (
    <div className="addtask-container">
      {temporarymilstonearr.flatMap((milestoneObj, index) => (
        milestoneObj.tasks.map((task, taskIndex) => (
          <div className="addtask-main" key={index * 1000 + taskIndex}>
            <div className="add-taskleft">
              <div className="box">
                <p>{index + 1}</p> 
              </div>
              <p>{task.taskName}</p> 
            </div>
            <div className="add-taskright">
              <p><img src="deletelogo.png" alt="" /></p>
              <p><img src="edit.png" alt="" /></p>
              <p><img src="drag.png" alt="" /></p>
            </div>
          </div>
        ))
      ))}
    </div>
  );
};




  
  
        // <div className="addtask-main" key={index}>
        //   <div className="add-taskleft">
        //     <div className="box">
        //       <p>{index + 1}</p> 
        //     </div>
        //     <p>{data}</p>
        //   </div>
        //   <div className="add-taskright">
        //     <p><img src="deletelogo.png" alt="" /></p>
        //     <p><img src="edit.png" alt="" /></p>
        //     <p><img src="drag.png" alt="" /></p>
        //   </div>
        // </div>
 
