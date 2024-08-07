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
import { Link } from "react-router-dom";

import offerletter_icon from "../../static/assets/img/layout/logo/offerletter_icon.svg";


function Logo() {
  return (
    <Link to="/" className="logo flex items-center gap-4">
      <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
        <img
          src={offerletter_icon}
          alt="offerletter-icon"
          className="w-full h-full object-cover"
        />
      </div>

      <span className="font-bold">
        OfferLetter
      </span>
    </Link>
  );
};


export default Logo;
