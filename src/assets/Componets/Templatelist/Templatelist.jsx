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

      <div class="table-main">
        <div class="inner-table">
          <div class="column">Template name</div>
          <div class="column">Template type</div>
          <div class="column">Created by</div>
          <div class="column">Status</div>
          <div class="column">Actions</div>
        </div>

        <div class="loop-row">
          <div class="column">Installation template</div>
          <div class="column">Installation</div>
          <div class="column">
            <div class="img-2">
              <img src="userlogo.png" alt="" />
              <p>David Nowak</p>
            </div>
          </div>
          <div class="column">
            <span>Active</span>
          </div>
          <div class="column">
            <FaEye />
          </div>
        </div>
        <div class="loop-row">
          <div class="column">Installation template</div>
          <div class="column">Installation</div>
          <div class="column">
            <div class="img-2">
              <img src="userlogo.png" alt="" />
              <p>David Nowak</p>
            </div>
          </div>
          <div class="column">
            <span>Active</span>
          </div>
          <div class="column">
            <FaEye />
          </div>
        </div>
        <div class="loop-row">
          <div class="column">Installation template</div>
          <div class="column">Installation</div>
          <div class="column">
            <div class="img-2">
              <img src="userlogo.png" alt="" />
              <p>David Nowak</p>
            </div>
          </div>
          <div class="column">
            <span>Active</span>
          </div>
          <div class="column">
            <FaEye />
          </div>
        </div>
        <div class="loop-row">
          <div class="column">Installation template</div>
          <div class="column">Installation</div>
          <div class="column">
            <div class="img-2">
              <img src="userlogo.png" alt="" />
              <p>David Nowak</p>
            </div>
          </div>
          <div class="column">
            <span>Active</span>
          </div>
          <div class="column">
            <FaEye />
          </div>
        </div>
      </div>
    </div>
  );
};
