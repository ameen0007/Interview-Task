import React, { useContext, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  IoMdArrowDropdownCircle,
  IoMdArrowDropupCircle,
  IoMdClose,
} from "react-icons/io";
import "./milestone.scss";

import { Modal } from "../Modal/Modal";
import { Toaster, toast } from "sonner";
import { Addtask } from "../AddTask/Addtask";
import { StateContext } from "../Contextapi/contextapi";
import { v4 as uuidv4 } from "uuid";
export const Milestone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  
  const [showModal, setShowModal] = useState(false);
  const [milestonedata, setMilestonedata] = useState([]);
  const [filteredMilestoneData, setFilteredMilestoneData] = useState([]);
  const [error, setError] = useState(false);
  const [Taskname, setTaskname] = useState("");
  const { taskdata, setAddtask, newMilestone, setNewMilestone,milestonearr,setMilstonearr,tasks, setTasks, temporarymilstonearr,setTemporarymilstonearr} =
    useContext(StateContext);

  useEffect(() => {
    const storedMilestones = JSON.parse(localStorage.getItem("milestonedata"));
    if (storedMilestones) {
      setMilestonedata(storedMilestones);
      setFilteredMilestoneData(storedMilestones);
    }
    const storedTaskdata = JSON.parse(localStorage.getItem("taskdata"));
    if (storedTaskdata) {
      setAddtask(storedTaskdata);
    }
  }, [newMilestone]);

  useEffect(() => {
    console.log("Updated temporarymilstonearr:", temporarymilstonearr);
  }, [temporarymilstonearr]);
  const toggleDropdown2 = () => {
    setIsOpen(!isOpen);
  };

  const handleNewMilestoneSubmit = () => {
    if (newMilestone.trim() !== "") {
      milestonedata.push(newMilestone);
      console.log(milestonedata);
      
      toast.success("Successfully added new milstone");
      
      localStorage.setItem("milestonedata", JSON.stringify(milestonedata));
      setNewMilestone("")
      setShowModal(false);
    } else {
      
      setShowModal(false);
      toast.error("Input Field is empty");
    }
  };

  const handleAddMilestone = () => {
    setShowModal(true);
  };

  const handleAddTask = () => {
    // Log the current state before updating
    console.log("Current temporarymilstonearr:", temporarymilstonearr);
  
    // Check if the milestone already exists in temporarymilstonearr
    const milestoneExists = temporarymilstonearr.find(item => item.milestone === newMilestone);
  
    // Create a new task object
    const newTask = { taskName: Taskname };
  
    if (milestoneExists) {
      // If milestone already exists, update its tasks
      const updatedTemporaryMilestoneArr = temporarymilstonearr.map(item => {
        if (item.milestone === newMilestone) {
          return { ...item, tasks: [...item.tasks, newTask] };
        }
        return item;
      });
      setTemporarymilstonearr(updatedTemporaryMilestoneArr);
    } else {
      // If milestone doesn't exist, add it with the new task
      const newMilestoneData = { milestone: newMilestone, tasks: [newTask] };
      setTemporarymilstonearr(prevTemporarymilstonearr => [...prevTemporarymilstonearr, newMilestoneData]);
    }
  
    // Clear input fields
    setTaskname("");
  
    // Log the updated state after the state has been updated
    console.log("Updated temporarymilstonearr:", temporarymilstonearr);
  };
  
  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setNewMilestone(item);
  };

  const handleInputChange = (event) => {
    setIsOpen(true);
    const inputValue = event.target.value;
    setNewMilestone(inputValue);
    console.log(inputValue, "inputvalue");

    const filteredData = milestonedata.filter((item) =>
      item.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    if (filteredData.length === 0) {
      console.log(filteredData.length);
      setError(true);
      console.log(error, "kk");
      setFilteredMilestoneData(filteredData);
      return;
    }
   
    setError(false);
    console.log(filteredData, "filterdata");
    setFilteredMilestoneData(filteredData);
    console.log(filteredMilestoneData, "state");
    setNewMilestone(inputValue);
  };

  return (
    <div className="milestone-main">
      <Toaster richColors position="top-right" />
      <div className="milesstone-first">
        <div className="inner-milesstone">
          <p>
            Milesstone Name<span style={{ color: "red" }}>*</span>
          </p>
        </div>
        <div className="inner-milesstone">
          <p>
            Task Name<span style={{ color: "red" }}>*</span>
          </p>
        </div>
      </div>
      <div className="second-raw">
        <div className="dropdown">
          <div className="item-div">
            <input
              type="text"
              placeholder="Type Milestone"
              value={newMilestone}
              onChange={handleInputChange}
            />
            <motion.p onClick={toggleDropdown2}>
              {isOpen ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
            </motion.p>
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
                {error && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#ffdbdb",
                    }}
                  >
                    <p
                      style={{
                        backgroundColor: "#ffdbdb",
                        color: "red",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                    >
                      We didn't find any milestone with that name: '
                      {newMilestone}'
                    </p>
                  </div>
                )}
                {filteredMilestoneData?.map((item, index) => (
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
          <input
            onChange={(e) => setTaskname(e.target.value)}
            type="text"
            value={Taskname}
            placeholder="Please Type Task Name"
          />
        </div>

        <div className="btn-1">
          <button
            className={!newMilestone || !Taskname || error ? "disable" : ""}
            disabled={!newMilestone || !Taskname || error}
            onClick={handleAddTask}
          >
            Add task
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          onClose={handleModalClose}
          handleNewMilestoneSubmit={handleNewMilestoneSubmit}
          newMilestone={newMilestone}
          setNewMilestone={setNewMilestone}
        />
      )}
      <Addtask temporarymilstonearr={temporarymilstonearr} />
    </div>
  );
};
