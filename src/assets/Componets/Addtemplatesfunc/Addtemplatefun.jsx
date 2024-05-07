import React, { useState } from "react";
import "./addtemp.scss";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoMdArrowDropdownCircle,
  IoMdArrowDropupCircle,
  IoMdClose,
} from "react-icons/io";
import { Colorpicker } from "../Colorpicker/Colorpicker";
import { Milestone } from "../Milesstonelist/Milestone";

export const Addtemplatefun = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [opened, setOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

  return (
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
              <motion.p onClick={toggleDropdown}>
                {isOpen ? (
                  <IoMdArrowDropupCircle />
                ) : (
                  <IoMdArrowDropdownCircle />
                )}
              </motion.p>
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
            <input type="text" placeholder="Please Type" />
          </div>
        </div>
      </div>
      <Colorpicker />
      <Milestone/>
    </div>
  );
};
