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
import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import Google from "../../../static/assets/img/main/auth/google-icon.svg"
import Hrline from "../../..//static/assets/img/main/auth/hr-line.png"
import Offerllogo from "../../../static/assets/img/main/auth/offerletter_icon.svg"
import Appleicon from "../../..//static/assets/img/main/auth/apple-icon.svg"
import Facebookicon from "../../..//static/assets/img/main/auth/facebook-icon.svg"

function Layout(props) {
 

  const Arrowactive = "/auth/sign-up/".includes(location.pathname) ? "left-14" : "left-2 left-14";
  const Text = "/auth/sign-up/".includes(location.pathname) ? "Sign up" : "Sign in";

  return (
    <section className="flex">
      <div className="lg:w-[50%] xl:w-[60%] hidden lg:block bg-[url(/src/static/assets/img/main/auth/side-img.png)] bg-no-repeat bg-cover" />


      {/*  Content form */}
      <div className="w-full lg:w-[50%] xl:w-[40%] px-4 md:px-12 py-20 bg-[#0D2C58] text-white">
        <div className="">


          <Link className="logo flex items-center gap-4" to="/">
            <div className="w-[32px] h-[32px] md:w-[70px] md:h-[70px] ">

              <img src={Offerllogo} alt="logo" />

            </div>
            <span className="text-4xl font-bold">
              OFFER LETTER
            </span>
          </Link>


          <div className="flex items-center gap-4 my-8">

            <NavLink to="/auth/sign-in" className="font-bold text-[#8696AC]" >
              Signin
            </NavLink>


            <NavLink to="/auth/sign-up" className="font-bold text-[#8696AC]" >
              Signup
            </NavLink>


          </div>
          <div className="px-4 py-8 md:px-10 md:py-10 bg-white rounded-[30px] relative text-black">

            <div className={`angle__pointer w-0 h-0 absolute -top-[15px] ${Arrowactive}`} />

            {props.children}


            {/* Horizontal line for Or */}
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="h-line">

                <img src={Hrline} alt="hr-line" />

              </div>

              <span>
                Or
              </span>

              <div className="h-line">

                <img src={Hrline} alt="hr-line" />

              </div>
            </div>


            {/* Sign In with socials*/}
            <div className="flex flex-col gap-6">

              <button
                className="flex items-center justify-between bg-[#8696AC] 
                  rounded-lg text-base font-semibold text-white md:text-xl py-1 pl-8 pr-1"
              >

                <span>
                  {Text} with Google
                </span>

                <span className="bg-[#fff] w-[65px] h-[60px] rounded-lg flex flex-col items-center justify-center">

                  <img src= {Google} alt="google-icon" />

                </span>
              </button>

              <button className="flex items-center justify-between bg-[#8696AC] rounded-lg text-base font-semibold text-white md:text-xl py-1 pl-8 pr-1">

                <span>
                  {Text} with Facebook
                </span>

                <span className="bg-[#fff] w-[65px] h-[60px] rounded-lg flex flex-col items-center justify-center">

                  <img src={Facebookicon} alt="facebook-icon" />

                </span>
              </button>

              <button
                className="flex items-center justify-between bg-[#8696AC] rounded-lg text-base font-semibold
                text-white md:text-xl py-1 pl-8 pr-1">

                <span>
                  {Text} with Apple
                </span>

                <span className="bg-[#fff] w-[65px] h-[60px] rounded-lg flex flex-col items-center justify-center">

                  <img src={Appleicon} alt="apple-icon" />

                </span>
              </button>
            </div>

            {"/auth/sign-in/".includes(location.pathname) ? (
              <div className="flex items-center gap-2 justify-center mt-6">

                <p>
                  Don't have an account?
                </p>

                <button
                  type="button"
                  className="text-base font-bold text-[#0D2C58]"
                >


                  <Link to="/auth/sign-up"  >
                     Signup
                  </Link>


                </button>

              </div>

            ) : (

              <div className="flex gap-2 items-center justify-center mt-6">

                <p>
                  Already have an account?
                </p>

                <button
                  type="button"
                  className="text-base font-bold text-[#0D2C58]"
                >


                  <Link to="/auth/sign-in"  >
                     Signin
                  </Link>

                 
                </button>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Layout;
