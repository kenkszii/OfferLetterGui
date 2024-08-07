/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* OfferLetter
*/


/**
* author: Eduglobe Consultants
* copyright: Copyright 2023 - new Date().getFullYear(), Eduglobe Consultants
* credits: ["OTechCup"]
* version: process.env.OFFERLETTER_BOILERPLATE_VERSION
* maintainer: Eduglobe Consultants
* email: support@offerletter.co.in
* status: process.env.OFFERLETTER_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../../../static/assets/css/account/layout/SideBar.css";
import { useAuth } from "../../../static/assets/js/useAuth.jsx";

import Layout from "../../../static/assets/img/account/layout/sidebar/layout.svg"
import Briefcase from "../../../static/assets/img/account/layout/sidebar/briefcase.svg"
import Folder from "../../../static/assets/img/account/layout/sidebar/folder.svg"
import Person from "../../../static/assets/img/account/layout/sidebar/person.svg"
import Chat from "../../../static/assets/img/account/layout/sidebar/chat.svg"
import ChalkboardTeacher from "../../../static/assets/img/account/layout/sidebar/chalkboard_teacher.svg"
import People from "../../../static/assets/img/account/layout/sidebar/people.svg"
import Logout from "../../../static/assets/img/account/layout/sidebar/logout.svg"
import { useUser } from "../../../static/assets/js/useUser";

function SideBar(props) {
  const { signOut } = useAuth();
  const { privilege } = useUser();
  const navLinks = useRef();
  const navHeight = props.navHeight;

  const [clickedLink, setClickedLink] = useState("");

  function removeDropDown(dropdownConts, clickedDropdown) {
    dropdownConts.forEach((dropdownCont) => {
      if (dropdownCont !== clickedDropdown) {
        dropdownCont.classList.remove("drop");
      }
    });
    clickedDropdown.classList.toggle("drop");
  }

  function handleLogout() {
    window.location.reload();
  }

  function handleDropDown(e) {
    const clickedDropdown = e.currentTarget.querySelector(".dropdown-links");
    const dropdownConts = navLinks.current.querySelectorAll(".dropdown-links");
    const clickedEl = e.currentTarget.dataset.clicked;

    if (clickedEl === clickedLink) {
      setClickedLink("not-clicked");
    } else {
      setClickedLink(clickedEl);
    }
    removeDropDown(dropdownConts, clickedDropdown);
  }

  return (
    <section className="sidebar">
      <div className="logo" style={{ minHeight: '86px' }}>
        <span>
          OfferLetter
        </span>
      </div>

      <ul className="nav-links" ref={navLinks}>
        <div className="top-links">


          {
            privilege.title === "Student"  ?
              <li>


                <Link to="/account/dashboard">
                  <span className="link">
                    <img
                      src={Layout}
                      alt="layout-icon"
                    />

                    <span>
                      Dashboard
                    </span>
                  </span>
                </Link>


              </li>
              : <></>
          }


          {privilege.title === "Student" ?
            <li onClick={handleDropDown} data-clicked="program">
              <div className="link">
                <img
                  src={Briefcase}
                  alt="briefcase-icon"
                />

                <div className="dropdown">
                  <span>
                    Program
                  </span>

                  <span>


                    {clickedLink === "program" ? <FaCaretUp /> : <FaCaretDown />}


                  </span>
                </div>
              </div>

              <ul className="dropdown-links">
                <li>


                  <Link to="/program/universities">
                    Universities
                  </Link>


                </li>

                <li>


                  <Link to="/program/exam">
                    Exams
                  </Link>


                </li>
              </ul>
            </li>
            : <></>
          }



          {
            privilege.title === "Student" ?

              <li onClick={handleDropDown} data-clicked="admission">
                <div className="link">
                  <img
                    src={Folder}
                    alt="folder-icon"
                  />

                  <div className="dropdown">
                    <span>
                      Admission
                    </span>

                    <span>


                      {clickedLink === "admission" ? (
                        <FaCaretUp />
                      ) : (
                        <FaCaretDown />
                      )}


                    </span>
                  </div>
                </div>

                <ul className="dropdown-links">
                  <li>


                    <Link to="/admission/applied-at">
                      Applied At
                    </Link>


                  </li>


                  <li>


                    <Link to="/admission/application-status">
                      Application Status
                    </Link>


                  </li>
                </ul>
              </li>
              : <></>
          }


          {
            privilege.title === "Student" ?
              <li onClick={handleDropDown} data-clicked="profile">
                <div className="link">
                  <img
                    src={Person}
                    alt="person-icon"
                  />

                  <div className="dropdown">
                    <span>
                      Profile
                    </span>

                    <span>


                      {clickedLink === "profile" ? <FaCaretUp /> : <FaCaretDown />}


                    </span>
                  </div>
                </div>

                <ul className="dropdown-links">
                  <li>


                    <Link to="/student/profile">
                      View profile
                    </Link>


                  </li>

                  <li>


                    <Link to="/student/documents">
                      Documents
                    </Link>


                  </li>
                </ul>
              </li>
              : <></>
          }


          {
            privilege.title === "Student" ?
              <li>
                <Link to="/student/inbox">
                  <span className="link">
                    <img
                      src={Chat}
                      alt="chat-icon"
                    />

                    <span>
                      Inbox
                    </span>
                  </span>
                </Link>
              </li>
              : <></>
          }




          {
            privilege.title === "Student" ?
              <div className="bottom-links">
                <li>
                  <div className="link">
                    <img
                      src={People}
                      alt="people-icon"
                    />


                    <span>


                      <Link to="/referral">
                        Refer and Earn
                      </Link>


                    </span>
                  </div>
                </li>

                <li>
                  <div className="link">
                    <img
                      src={Logout}
                      alt="logout-icon"
                    />

                    <button type="button" onClick={signOut}>
                      Logout
                    </button>
                  </div>
                </li>

              </div>

              : <></>
          }


        </div>
      </ul>
    </section>
  );
};


export default SideBar;
