import React from "react";
import "./templatelist.scss";
import { FaEye } from "react-icons/fa";
export const Templatelist = () => {
  return (
    <div className="temp-list-main">
      <div className="search-inner">
        <div className="search-box">
          <input type="text" placeholder="Search...." />
          <div className="img-1">
            <img src="searchlogo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="table-main">
  <div className="inner-table">
    <div className="column">Template name</div>
    <div className="column">Template type</div>
    <div className="column">Created by</div>
    <div className="column">Status</div>
    <div className="column">Actions</div>
  </div>

  <div className="loop-row">
    <div className="column">Installation template</div>
    <div className="column">Installation</div>
    <div className="column">
      <div className="img-2">
        <img src="userlogo.png" alt="" />
        <p>David Nowak</p>
      </div>
    </div>
    <div className="column">
      <span>Active</span>
    </div>
    <div className="column">
      <FaEye />
    </div>
  </div>
  <div className="loop-row">
    <div className="column">Installation template</div>
    <div className="column">Installation</div>
    <div className="column">
      <div className="img-2">
        <img src="userlogo.png" alt="" />
        <p>David Nowak</p>
      </div>
    </div>
    <div className="column">
      <span>Active</span>
    </div>
    <div className="column">
      <FaEye />
    </div>
  </div>
  <div className="loop-row">
    <div className="column">Installation template</div>
    <div className="column">Installation</div>
    <div className="column">
      <div className="img-2">
        <img src="userlogo.png" alt="" />
        <p>David Nowak</p>
      </div>
    </div>
    <div className="column">
      <span>Active</span>
    </div>
    <div className="column">
      <FaEye />
    </div>
  </div>
  <div className="loop-row">
    <div className="column">Installation template</div>
    <div className="column">Installation</div>
    <div className="column">
      <div className="img-2">
        <img src="userlogo.png" alt="" />
        <p>David Nowak</p>
      </div>
    </div>
    <div className="column">
      <span>Active</span>
    </div>
    <div className="column"> 
            <FaEye />
          </div>
        </div>
      </div>
    </div>
  );
};
