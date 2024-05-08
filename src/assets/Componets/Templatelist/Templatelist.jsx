import React, { useEffect, useState } from "react";
import "./templatelist.scss";
import { FaEye } from "react-icons/fa";

export const Templatelist = () => {
  const [userdetails, setuserdetails] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setuserdetails(storedUsers);
    }
  }, []);

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
    <div className="column">Template 1</div>
    <div className="column">Installing</div>
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



        {userdetails.map((user) => (
          <div className="loop-row" key={user.id}>
            <div className="column">{user.templateName}</div>
            <div className="column">{user.templateType}</div>
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
              <FaEye  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
