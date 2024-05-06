import React from "react";
import "./templates.scss";
import { Header } from "../../Componets/Header/Header";
import { Aside } from "../../Componets/Aside/Aside";
import { Templatelist } from "../../Componets/Templatelist/Templatelist";
export const Templates = () => {
  return (
    <div className="main-component-div">
      <Aside />
      <Header />

      <div className="letter-div">
        <p>Templates</p>
        <div className="btn-1">
          <button>+ Add new</button>
        </div>
      </div>
      <Templatelist />
    </div>
  );
};
