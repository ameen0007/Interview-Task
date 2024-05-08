import React, { useContext, useEffect, useState } from "react";
import "./addtemp.scss";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoMdArrowDropdownCircle,
  IoMdArrowDropupCircle,
  IoMdClose,
} from "react-icons/io";
import { Colorpicker } from "../Colorpicker/Colorpicker";
import { Milestone } from "../Milesstonelist/Milestone";
// import { Milestonelist } from "../Milestonelistarray/Milestonelist";
import { StateContext, Stateprovider } from "../Contextapi/contextapi";
import { Milestonelist } from "../Milestonelistarray/Milestonelist";
import { useNavigate } from "react-router";
import { Transition } from "../Animation/Animation";
import { toast } from "sonner";

export const Addtemplatefun = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [opened, setOpened] = useState(false);
  const {
    milestonearr,
    users,
    SetUsers,
    setMilstonearr,
    SetTask,
    taskdata,
    temporarymilstonearr,
    setTemporarymilstonearr,
    setAddtask,
    newMilestone,
  } = useContext(StateContext);
  const [templatename, settemplsteName] = useState("");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      SetUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setOpened(true);
  };

  const handleCancel = () => {
    setSelectedItem("Select");
    setIsOpen(false);
    setOpened(false);
  };

  const Handlesave = () => {
    // Update milestonearr with temporarymilstonearr
    setMilstonearr(temporarymilstonearr);

    // Update taskdata with tasks from temporarymilstonearr
    const updatedTaskData = temporarymilstonearr.map((milestone) => {
      return {
        milestone: milestone,
        tasks: taskdata
          .filter((task) => task.milestone === milestone)
          .map((task) => task.taskName),
      };
    });

    // Log updated taskdata
    console.log("Updated taskdata:", updatedTaskData);

    // Clear temporarymilstonearr

    SetTask([]);
    // Log saved milestonearr
    console.log("Saved milestonearr:", temporarymilstonearr);
  };

  const handleSubmit = () => {
    const randomUserId = Math.floor(Math.random() * 1000);
    if (!templatename || !selectedItem) {
      toast.error("Please fill in all fields!...");

      return;
    }
    // Create a new user object
    const newUser = {
      id: randomUserId,
      templateName: templatename,
      templateType: selectedItem,
      temporarymilstonearr: temporarymilstonearr, // Using the taskdata array for tasks
    };

    
    SetUsers((prevUsers) => [...prevUsers, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
  
    setAddtask([]);
    setTemporarymilstonearr([]);
    setMilstonearr([]);
    navigate("/");
    // Clear the templateName and selectedItem states
    settemplsteName("");
    setSelectedItem("");
  };

  
  useEffect(() => {
    console.log(users, "Updated users array");
  }, [users]);

  return (
    <Transition>
      <div className="dropdown-main-div">
        <div className="inner-wrap">
          <div className="dropdown">
            <p>
              Template Type<span style={{ color: "red" }}>*</span>
            </p>

            <div onClick={toggleDropdown} className="item-div">
              <motion.h6 onClick={toggleDropdown}>
                {selectedItem ? selectedItem : "Select"}
              </motion.h6>
              <motion.div
                className="inside-drop"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <p onClick={toggleDropdown}>
                  {isOpen ? (
                    <IoMdArrowDropupCircle />
                  ) : (
                    <IoMdArrowDropdownCircle />
                  )}
                </p>
                {opened && (
                  <motion.p onClick={handleCancel}>
                    <IoMdClose />
                  </motion.p>
                )}
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
                  <motion.div
                    className="item"
                    onClick={() => handleItemClick("Installation")}
                  >
                    Installation
                  </motion.div>
                  <motion.div
                    className="item"
                    onClick={() => handleItemClick("Crane")}
                  >
                    Crane
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="Template-name">
            <p>
              Template name <span style={{ color: "red" }}>*</span>
            </p>
            <div className="input">
              <input
                onChange={(e) => settemplsteName(e.target.value)}
                type="text"
                placeholder="Please Type"
              />
            </div>
          </div>
        </div>
        <Colorpicker />
        <Milestone />
        <div className="btn-con">
          <div className="save-btn">
            <button onClick={Handlesave}>Save/Add new milestone</button>
          </div>
        </div>
        <Milestonelist />
        <div className="btn-4">
          <div className="l-b">
            <button>Cancel</button>
          </div>
          <div className="r-b">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </Transition>
  );
};
