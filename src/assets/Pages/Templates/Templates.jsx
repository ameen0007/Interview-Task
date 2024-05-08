import React from "react";
import "./templates.scss";
import { Header } from "../../Componets/Header/Header";
import { Aside } from "../../Componets/Aside/Aside";
import { Templatelist } from "../../Componets/Templatelist/Templatelist";
import { useNavigate } from "react-router";
export const Templates = () => {
  const navigate = useNavigate();

  const handleAddTemplates = () => {
    navigate("/AddnewTemplates");
  };

  return (
    <div className="main-component-div">
      <Aside />
      <Header />

      <div className="letter-div">
        <p>Templates</p>
        <div className="btn-1">
          <button onClick={handleAddTemplates}>+ Add new</button>
        </div>
      </div>
      <Templatelist />
    </div>
  );
};
