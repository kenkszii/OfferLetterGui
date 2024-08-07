/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* OfferLetter
*/


/**
* author: Eduglobe Consultants
* copyright: Copyright 2023 - new Date().getFullYear(), Eduglobe Consultants
* credits: ["@kenkszii"]
* version: process.env.OFFERLETTER_BOILERPLATE_VERSION
* maintainer: Eduglobe Consultants
* email: support@offerletter.co.in
* status: process.env.OFFERLETTER_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import StudentDashboard from "./StudentDashoard.jsx"
import AdminDashboard from "./AdminDashboard.jsx"
import AgentDashboard from "./AgentDashboard.jsx"
import UniversityDashboard from "./UniversityDashboard"
import SchoolDashboard from "./SchoolDashboards.jsx"
import "../../../../static/assets/css/account/pages/Dashboard.css"
import { useUser } from "../../../../static/assets/js/useUser.js"

function Dashboard() {
  const { privilege } = useUser();
  return (
    <>
      {
        privilege.title === "Student" ? (
          <StudentDashboard />
        ) : privilege.title === "Admin" ? (
          <AdminDashboard />
        ) : privilege.title === "Agent" ? (
          <AgentDashboard />
        ) : privilege.title === "School" ? (
          <SchoolDashboard />
        ) : privilege.title === "University" ? (
          <UniversityDashboard />
        ) : <></>

      }
    </>


  );
}

export default Dashboard
