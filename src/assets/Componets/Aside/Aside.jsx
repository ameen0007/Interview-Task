import React, { useState } from "react";
import "./aside.scss";
import { GrAppsRounded } from "react-icons/gr";

export const Aside = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentElement, setCurrentElement] = useState("Templates");

  const handleHover = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  const handleElementClick = (name) => {
    setCurrentElement(name);
  };

  return (
    <div
      className={`aside-main ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aside-inner">
        <img src="logo.png" alt="logo" />

        <p>
          <GrAppsRounded />
        </p>
      </div>

      <div className="aside-second-row">
        {[
          { name: "Projects", img: "logo2.png" },
          { name: "Activities", img: "logo3.png" },
          { name: "Reports", img: "logo4.png" },
          { name: "Users", img: "logo5.png" },
          { name: "Templates", img: "logo8.png" },
          { name: "Roles", img: "logo6.png" },
          { name: "Settings", img: "logo7.png" },
        ].map((item, index) => (
          <div
            className={`aside-inner-2 ${
              currentElement === item.name ? "current" : ""
            }`}
            key={index}
            onClick={() => handleElementClick(item.name)}
          >
            <div className="img-con">
              <img src={item.img} alt="" />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
