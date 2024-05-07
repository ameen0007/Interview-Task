import React, { useEffect, useState } from "react";

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

export const Milestone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [newMilestone, setNewMilestone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [milestonedata, setMilestonedata] = useState(["Installation"]);
  const [filteredMilestoneData, setFilteredMilestoneData] = useState("");
  const [error, setError] = useState(false);
  const [Taskname, setTaskname] = useState("");

  useEffect(() => {
    const storedMilestones = JSON.parse(localStorage.getItem("milestonedata"));
    if (storedMilestones) {
      setMilestonedata(storedMilestones);
      setFilteredMilestoneData(storedMilestones);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNewMilestoneSubmit = () => {
    if (newMilestone.trim() !== "") {
      milestonedata.push(newMilestone);
      console.log(milestonedata);
      setShowModal(false);
      toast.success("Successfully added new milstone");
      localStorage.setItem("milestonedata", JSON.stringify(milestonedata));
      setNewMilestone("");
    } else {
      setShowModal(false);
      toast.error("Input Field is empty");
    }
  };

  const handleAddMilestone = () => {
    setShowModal(true);
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
    console.log("kerunnuddo");
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
            <motion.p onClick={toggleDropdown}>
              {isOpen ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
            </motion.p>
            {/* <motion.h6>
            {selectedItem ? selectedItem : ""}
           
          </motion.h6> */}
            <motion.div
              className="inside-drop"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
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
            placeholder="Please Type Task Name"
          />
        </div>

        <div className="btn-1">
          <button
            className={!newMilestone || !Taskname ? "disable" : ""}
            disabled={!newMilestone || !Taskname}
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
        <Addtask/>
    </div>
  );
};
