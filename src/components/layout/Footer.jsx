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
import { BsBehance, BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsVimeo, BsYoutube } from "react-icons/bs";

import Logo from "./Logo.jsx";


function Footer() {
  return (
    <div className="bg-[#0D2C58] text-white flex flex-col gap-10 py-20 px-4 md:px-8 lg:px-16">


      <Logo />


      <div className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-0">
        <div className="flex flex-col gap-10 text-[#bdbdbd99] text-lg md:text-2xl">
          <div className="address">
            <p>
              Office no. G-02. <br />
              Building 1, Ground Floor. <br />
              Dubai Media City - Dubai
            </p>
          </div>

          <div className="time">
            <p>
              Available Everyday
            </p>

            <p className="gold text-[#FECF08]">
              From 9:00 AM to 6:00 PM
            </p>
          </div>

          <div className="copyright text-white">
            <p>
              Copyright © 2022 EduGlobe. All Rights Reserved
            </p>
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-6">
            <p className="about text-2xl md:text-4xl font-bold">
              About
            </p>

            <ul className="flex flex-col gap-6 text-lg md:text-2xl">
              <li>
                Our Story
              </li>
              
              <li>
                Our Services
              </li>
              
              <li>
                Blog
              </li>
              
              <li>
                Contact Us
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <p className="about text-2xl md:text-4xl font-bold">
              About
            </p>

            <ul className="flex flex-col gap-6 text-lg md:text-2xl">
              <li>
                Our Story
              </li>
              
              <li>
                Our Services
              </li>
              
              <li>
                Blog
              </li>
              
              <li>
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-end justify-end">
          <div className="flex items-center gap-6">


            <BsFacebook />

            <BsTwitter />

            <BsLinkedin />

            <BsYoutube />

            <BsBehance />

            <BsInstagram />

            <BsVimeo />


          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
