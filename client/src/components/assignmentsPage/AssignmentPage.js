import React from "react";
import { useState, useEffect } from "react";
import Card from "./card/Card";
import CreateAssignment from "./createAndUpdateAssignment/CreateAssignment";


import searchIcon from "../../icon/magnifying-glass-solid.svg";
import addIcon from "../../icon/plus-solid.svg";
import bellIcon from "../../icon/bell-solid.svg";
import gearIcon from "../../icon/gear-solid.svg";
import userIcon from '../../icon/user.png'


import "./AssignmentPage.css";

const AssignmentPage = () => {
  const [modal, setModal] = useState(false);
  const [assignments, setAssignment] = useState([]);

  const getData = async () => {
    const res = await fetch('/assignment');
    const data = await res.json();
    setAssignment(data);
  }
  useEffect(() => {
    getData();
  }, []);

  const toggle = () => {
    setModal(!modal);
  }

  return (
    <div class="assignmentPage">
      <div className="header_">
        <div className="header-left_">
          <div className="search-bar">
            <input type="text" placeholder="Search"></input>
            <img src={searchIcon} alt="search icon" className="searchIcon"></img>
          </div>
          <button className="btn" onClick={() => setModal(true)}><img src={addIcon} alt="add icon" className="addIcon"></img></button>
        </div>

        <div className="header-right_">
          <img src={bellIcon} alt="bell icon" className="bellIcon"></img>
          <img src={gearIcon} alt="gear icon" className="gearIcon"></img>
          <img src={userIcon} alt="user icon" className="userIcon"></img>
        </div>

      </div>
      
      <div className="container">
        {assignments && assignments.map((assignment) => <Card assignment={assignment}/>)}
      </div>
      <CreateAssignment toggle = {toggle} modal={modal}/>
    </div>
  );
}
export default AssignmentPage;