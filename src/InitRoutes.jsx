

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
import {BrowserRouter} from "react-router-dom";

import App from "./App.jsx";


function InitRoutes() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};


export default InitRoutes;
