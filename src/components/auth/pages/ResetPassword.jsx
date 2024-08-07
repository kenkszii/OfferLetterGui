/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* OfferLetter
*/


/**
* author: Eduglobe Consultants
* copyright: Copyright 2023 - new Date().getFullYear(), Eduglobe Consultants
* credits: ["Kenkszii"]
* version: process.env.OFFERLETTER_BOILERPLATE_VERSION
* maintainer: Eduglobe Consultants
* email: support@offerletter.co.in
* status: process.env.OFFERLETTER_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import { Link, useNavigate } from "react-router-dom";

import Offerllogo from "../../../static/assets/img/main/auth/offerletter_icon.svg"


function ResetPassword() {

  return (
    <section className="flex min-h-screen">
      <div className="lg:w-[50%] xl:w-[60%] hidden lg:block bg-[url(/src/static/assets/img/main/auth/side-img.png)] bg-no-repeat bg-cover" />


      {/*  Content form */}
      <div className="w-full lg:w-[50%] xl:w-[40%] px-4 md:px-12 py-20 bg-[#0D2C58] text-white">
        <div className="">

          <Link className="flex items-center gap-4 logo" to="/">
            <div className="w-[32px] h-[32px] md:w-[70px] md:h-[70px] ">

              <img src={Offerllogo} alt="logo" />
              

            </div>

            <span className="text-4xl font-bold">
              OFFER LETTER
            </span>

          </Link>


          <div className="px-4 py-8 md:px-10 md:py-10 bg-white rounded-[30px] relative text-black mt-10">

            <form className="flex flex-col gap-6">
              <input
                type="password"
                required
                id="curr-pass"
                placeholder="Enter your current password"
                name="currentPassword"
                className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
              />

              <input
                type="password"
                required
                id="new-pass"
                placeholder="Enter a new password"
                name="newPassword"
                className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
              />

              <p className="">
                Keep Password?{" "}
                <Link
                  to="/auth/sign-in"
                  className="text-base font-bold text-[#0D2C58]"
                >
                  Login
                </Link>
              </p>

              <button
                className="mt-8 bg-[#0D2C58] text-white py-4 font-semibold text-base md:text-xl rounded-lg"
                type="submit"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
