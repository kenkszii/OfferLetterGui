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
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../../static/assets/css/account/layout/footer.css"

function Footer() {
  return (
    <div className="w-[97%] fixed bottom-3 py-16 left" style={{ margin: '86px 0px 0px' }}>
      <div className="w-[81%] bottom-0 absolute right-0 mr-3 rounded-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.25)] bg-gray-200  flex flex-col lg:flex-row items-center justify-between py-7 lg:pr-28">
        <div className="px-7 text-center lg:text-left">
          <p className="mt-3 mb-3 text-base font-normal">
            @2022 OfferLetter.com
          </p>
          <div className="flex gap-3">
            <p className="text-base font-normal">
              <Link to="/privacy">
                Privacy Policy
              </Link>
            </p>
            <p className="text-base font-normal">
              <Link to="/conditions">
                Terms and Conditions
              </Link>
            </p>
            <p className="text-base font-normal">
              <Link to="/aboutus">
                About Us
              </Link>
            </p>
          </div>

        </div>

        <div className="flex flex-col items-end justify-end">
          <div className="flex items-center gap-6 text-2xl text-[#0D2C58]">


            <BsFacebook />

            <BsTwitter />

            <BsLinkedin />

            <BsYoutube />

            <BsInstagram />



          </div>
        </div>
      </div>
    </div>



  );
};

export default Footer;


