import React, { useState } from "react";
import { milestonedata } from "../milestonedata/milestone";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoMdArrowDropdownCircle,
  IoMdArrowDropupCircle,
  IoMdClose,
} from "react-icons/io";
import "./milestone.scss";
import {Modal} from '../Modal/Modal'
import { Toaster, toast } from "sonner";




export const Milestone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [newMilestone, setNewMilestone] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNewMilestoneSubmit = () => {
    if (newMilestone.trim() !== "") {
      milestonedata.push(newMilestone);
      setShowModal(false);
      toast.success('Successfully added new milstone')
      setNewMilestone("")
    } else {
      setShowModal(false);
      toast.error('Input Field is empty')
     
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  const handleAddMilestone = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
 
    <div className="milestone-main">
    <Toaster richColors position="top-right" />
      <div className="milesstone-first" >
        <div className="inner-milesstone">
          <p>Milesstone Name<span style={{color:'red'}}>*</span></p>
        </div>
       <div className="inner-milesstone">
       <p>Task Name<span style={{color:'red'}}>*</span></p>
       </div>
        
       
      </div>
      <div className="second-raw">
      <div className="dropdown">
        <div className="item-div" onClick={toggleDropdown}>
          <motion.h6>
            {selectedItem ? selectedItem : "Select Milestone"}
          </motion.h6>
          <motion.div
            className="inside-drop"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p onClick={toggleDropdown}>
              {isOpen ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
            </motion.p>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="dropdown-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {milestonedata.map((item, index) => (
                <motion.div
                  key={index}
                  className="item"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </motion.div>
              ))}
               <motion.div className="but-2">
                   <div>
                    <button onClick={handleAddMilestone}>+</button>
                   </div>
                   <p>New Mileston</p>
                </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="input-div">
          
         
      
        
        <input type="text" placeholder="Please Type Task Name"/>
        
        
      </div >
          <div className="btn-1"><button>Add task</button></div>
    </div>
    {showModal && (
        <Modal onClose={handleModalClose} handleNewMilestoneSubmit={handleNewMilestoneSubmit} newMilestone={newMilestone} setNewMilestone={setNewMilestone}/>
    
      )}
    
    </div>
  );
};
