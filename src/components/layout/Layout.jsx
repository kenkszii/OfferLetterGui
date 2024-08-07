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
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../../static/assets/css/layout/Layout.css";


function Layout(props) {
  const content = props.children;
  
  return (
    <div className="layout">
      <Header />


      {content}


      <Footer />
    </div>
  );
};


export default Layout;
