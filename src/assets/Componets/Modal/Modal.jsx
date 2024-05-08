import React from 'react';
import './modal.scss';
import { IoMdClose } from "react-icons/io";

export const Modal = ({setNewMilestone,newMilestone, onClose, children ,handleNewMilestoneSubmit}) => {
  return (
   
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}><IoMdClose /></span>
        <div className="title">Add new milestone</div>
        <div className="form-row">
          <label htmlFor="milestoneName">Milestone Name<span className="required">*</span></label>
          <input type="text"onChange={(e)=>setNewMilestone(e.target.value)}  id="milestoneName" placeholder="Please type" />
        </div>
        <div className="button-row">
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button onClick={handleNewMilestoneSubmit} className="submit">Submit</button>
        </div>
      </div>
      
    </div>
   
  );
};
