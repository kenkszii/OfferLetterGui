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
import React from "react";
import { Fragment } from "react";

import Footer from "./Footer.jsx";
import SideBar from "./SideBar.jsx";
import Header from "./Header.jsx";

import "../../../static/assets/css/account/layout/layout.css"
function Layout(props) {
  const content = props.children;

  return (
    <Fragment>
      <Header />
      <SideBar />
      <div className="page-margin">




        {content}

      </div>
      <Footer />
    </Fragment>
  );
};


export default Layout;
